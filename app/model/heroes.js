const sequelize = require ('/app/model/sequelizeClient');

class Hero extends Model {}

Hero.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Hero', // We need to choose the model name
  },
);

// the defined model is the class itself
console.log(Hero === sequelize.models.Hero); // true