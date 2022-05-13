const { Sequelize } = require('sequelize');
const db = new Sequelize('hr', 'postgres', 'Sunita1234', {
  host: 'localhost',
  dialect: 'postgres'
});
module.exports = db