const Quest = require('./Quests.js');
const Hero = require('./Heroes.js');

Hero.belongsToMany(Quest, { 
    through: 'heroes_quests' ,
    foreignKey:'id_quest',
    as:'done_quests',
  timestamps: false,

});
Quest.belongsToMany(Hero, {
    through: 'heroes_quests',
    foreignKey:'id_hero',
    as:'hero_visits',
      timestamps: false

});

module.exports = {Quest, Hero}