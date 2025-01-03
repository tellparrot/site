require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const basicRoutes = require("./routes/index");
const domainRoutes = require('./routes/domainRoutes');
const policyRoutes = require('./routes/policyRoutes');
const roleRoutes = require('./routes/roleRoutes');
const taskRoutes = require('./routes/taskRoutes');
const sitemapRoutes = require('./routes/sitemapRoutes');
const path = require('path');
const cors = require("cors");
const logger = require('./utils/log')('server');
const connectDB = require('./config/db');

if (!process.env.DATABASE_URL) {
  logger.error("Error: DATABASE_URL variable in .env missing.");
  process.exit(-1);
}

const app = express();
const port = process.env.PORT || 3000;

app.enable('json spaces');
app.enable('strict routing');

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger middleware
app.use((req, res, next) => {
  console.log('Received request:', {
    method: req.method,
    path: req.path,
    headers: req.headers
  });
  next();
});

// Body parser middleware logging
app.use((req, res, next) => {
  logger.info('Request body parser middleware:', {
    contentType: req.headers['content-type'],
    hasBody: !!req.body,
    bodyKeys: req.body ? Object.keys(req.body) : []
  });
  next();
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.on("error", (error) => {
  logger.error("Server error:", error);
});

logger.info('Registering routes...');

// Register routes BEFORE starting server
app.use(basicRoutes);
app.use('/api/domains', domainRoutes);
app.use('/api/policies', policyRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/', sitemapRoutes);

// After ALL route registrations, before the catch-all route
const registeredRoutes = app._router.stack
  .filter(r => r.route)
  .map(r => ({
    path: r.route.path,
    method: Object.keys(r.route.methods)[0]
  }));
logger.info("Final registered routes:", registeredRoutes);

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// If no routes handled the request, it's a 404
app.use((req, res, next) => {
  logger.warn(`404 Not Found: ${req.method} ${req.url}`);
  res.status(404).json({ message: "Route not found" });
});

// Error handling
app.use((err, req, res, next) => {
  logger.error("Unhandled application error:", {
    error: err.message,
    stack: err.stack,
    code: err.code
  });
  res.status(500).json({ message: "Internal server error" });
});

const startServer = async () => {
  try {
    logger.info('Starting server initialization...');

    // Log mongoose version and connection state
    logger.info('Mongoose details:', {
      version: mongoose.version,
      connectionState: mongoose.connection.readyState
    });

    await connectDB();

    mongoose.connection.on('connected', () => {
      console.log('MongoDB connection state:', mongoose.connection.readyState);
      console.log('Connected to database:', mongoose.connection.name);
    });

    // Before any model requires
    logger.info('Models registered in mongoose:', {
      modelNames: mongoose.modelNames()
    });

    try {
      logger.info('Loading Domain model...');
      require('./models/Domain');

      logger.info('Loading Policy model...');
      require('./models/Policy');

      logger.info('Loading Task model...');
      require('./models/Task');

      // After models are loaded
      logger.info('All models loaded. Registered models:', {
        modelNames: mongoose.modelNames(),
        collections: Object.keys(mongoose.connection.collections)
      });
    } catch (error) {
      logger.fatal('Error loading models:', {
        error: error.message,
        stack: error.stack,
        modelState: mongoose.modelNames()
      });
      throw error;
    }

    // Add detailed logging for DB configuration
    const conn = mongoose.connection;
    logger.info('Database configuration:', {
      name: conn.name,
      host: conn.host,
      port: conn.port,
      models: Object.keys(conn.models)
    });

    logger.info('Starting index creation...');
    // Create indexes in the background
    try {
      await Promise.all([
        mongoose.model('Domain').createIndexes(),
        mongoose.model('Policy').createIndexes(),
        mongoose.model('Task').createIndexes()
      ]);
      logger.info("All indexes created successfully");

      // Add logging of DB configuration
      logger.info('Database configuration:', {
        name: conn.name,
        models: Object.keys(conn.models),
        collections: await conn.db.listCollections().toArray()
      });

    } catch (indexErr) {
      // Log error but don't crash the server
      logger.error("Error creating indexes:", {
        error: indexErr.message,
        stack: indexErr.stack,
        code: indexErr.code
      });
    }

    // Start server after DB initialization and index creation
    const server = app.listen(port, () => {
      logger.info(`Server running on port ${port}`);
    });

    // Handle graceful shutdown
    process.on('SIGTERM', () => {
      server.close(() => {
        mongoose.connection.close();
      });
    });

  } catch (err) {
    logger.fatal('Fatal startup error:', {
      error: err.message,
      stack: err.stack
    });
    process.exit(1);
  }
};

startServer();

module.exports = app;