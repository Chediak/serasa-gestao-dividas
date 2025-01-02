const { Sequelize } = require('sequelize');
const logger = require('./logger');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: (msg) => logger.info(msg),
});

sequelize.authenticate()
  .then(() => logger.info('Database connected successfully'))
  .catch((err) => logger.error('Database connection failed', err));

module.exports = sequelize;
