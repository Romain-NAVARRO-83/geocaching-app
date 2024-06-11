const NodeGeocoder = require('node-geocoder');
const geocoder = NodeGeocoder({ provider: 'openstreetmap'});
const heroController = {
    questsPage : async (req,res) => {
        try{
            const geocoded =  await geocoder.geocode('Saint sulpice - france');
            console.log(geocoded);
            res.render('quests',{geocoded});
        }catch{
            res.render('quests',{message : "GeoCode error"});
        }
    }
}
module.exports = heroController