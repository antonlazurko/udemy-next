const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db', 'admin', 'admin_password', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  logging: false, // Set to true to log SQL queries
});

module.exports = sequelize;
