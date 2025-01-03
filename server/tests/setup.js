const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const logger = require('../utils/log')('test.setup');

let mongod;

// Connect to the in-memory database
module.exports.connect = async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  await mongoose.connect(uri);
  logger.info('Connected to in-memory MongoDB');
};

// Close database connection and stop mongod
module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
  logger.info('Closed in-memory MongoDB connection');
};

// Clear all data in the database
module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
  logger.info('Cleared in-memory database');
};