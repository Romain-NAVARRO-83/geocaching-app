const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://geoquest:geoquest@localhost:5432/geoquest', {
  host: 'localhost',
  dialect: 'postgres'
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();
module.exports = sequelize;
