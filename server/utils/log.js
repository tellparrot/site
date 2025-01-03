const pino = require('pino');

const DEFAULT_LOG_LEVEL = process.env.NODE_ENV === "production" ? "info" : "debug";
const level = process.env.LOG_LEVEL || DEFAULT_LOG_LEVEL;

if (!pino.levels.values[level]) {
  const validLevels = Object.keys(pino.levels.values).join(', ');
  throw new Error(`Log level must be one of: ${validLevels}`);
}

const logger = (name) => {
  const log = pino({
    name,
    level,
    serializers: {
      error: (err) => ({
        message: err.message,
        stack: err.stack,
        code: err.code,
        name: err.name,
        errors: err.errors,
        details: err.details,
        fullError: JSON.stringify(err, Object.getOwnPropertyNames(err)),
        ...err
      })
    },
    formatters: {
      level(label) {
        return { level: label };
      }
    },
    timestamp: pino.stdTimeFunctions.isoTime
  });

  return log;
};

module.exports = logger;