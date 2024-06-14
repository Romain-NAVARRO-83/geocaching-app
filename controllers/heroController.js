// const NodeGeocoder = require('node-geocoder');
// const geocoder = NodeGeocoder({ provider: 'openstreetmap'});
const Hero = require('../app/model/Heroes.js');
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
        const allHeroes = await Hero.findAll();
        console.log(allHeroes);
        try{
            const allHeroes = await Hero.findAll();
            res.render('heroes', {allHeroes});
        }catch{
            res.render('heroes',{message : "GeoCode error"});
        }
    }

}
module.exports = heroController