const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelizeClient.js");

class Hero extends Model {}

Hero.init({
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  pseudo: {
    type: DataTypes.TEXT,
    allowNull: false // Le champ n'est PAS:  "NOT NULL"
  },
  level: {
    type: DataTypes.TINYINT,
    allowNull: false
  }

}, {
  sequelize,
  tableName: "heroes",
  timestamps: false,
});

module.exports = Hero;