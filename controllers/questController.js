const { Op } = require("sequelize");
const {Hero, Quest} = require('../app/model/associations.js');

const questController = {
    questsPage : async (req, res) => {
        try{
            const quests = await Quest.findAll();
            res.render('quests',{quests, includeLeaflet : true})
        }catch(err){

        }
    }
}
module.exports = questController;