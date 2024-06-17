const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelizeClient.js");

class Quest extends Model {}

Quest.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

}, {
  sequelize,
  tableName: "quests",
  timestamps: false,
});

module.exports = Quest;