
const { Op } = require("sequelize");
const {Hero, Quest} = require('../app/model/associations.js');
const heroController = {
    questsPage : async (req,res) => {
        try{
            // const geocoded =  await geocoder.geocode('Paris');
            // console.log(geocoded);
            res.render('quests');
        }catch{
            res.render('quests',{message : "GeoCode error"});
        }
    },
    heroesPage : async (req,res) => {
        
        // const allQuests = await Quest.findAll();
        // console.log(allHeroes);
        try{
            const heroes = await Hero.findAll({
                limit:15,
                order: [
                    ['id', 'ASC'],
              ],
                include:[
                    {association : "done_quests",
                    required:false}
                ]
                
            });
            res.render('heroes', {heroes});
        }catch{
            res.render('heroes',{message : "error"});
        }clearImmediate
    },
    loginPage : async(req,res) => {
       try{
        
        res .render('login');
       }catch(err){
        res.render('login',{message : "error"});
       }
    },
    loginAttempt : async(req,res) => {
        try{
            const myQuery = req.body;
        console.log(myQuery);
        const foundUser = await Hero.findOne({where : {email : myQuery.email}});
        console.log(foundUser);
        if (!foundUser){
            res.render('login',{message : "No hero found"});
        }else if(foundUser.password === myQuery.password){
            req.session.isLogged = true;
            res.render('hero',{message : "Hero connected !"});
        }else{
            res.render('login',{message : "Invalid password"});
        }
        }catch(err){

        }
    }

}
module.exports = heroController
// const myUser = await User.findOne({
//     where : {firstname : "Chuck"}
// })