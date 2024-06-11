const express = require('express');
// On récupère un nouveau routeur vide qu'on va modifier
const router = express.Router();
const heroController = require('../controllers/heroController');


// router.use(function (req, res, next) {
//      next();
// })


router.get('/', (req, res) => {
     response.render('index');
 });
 router.get('/quests', heroController.questsPage);
 
 
 // Page détail quête
 router.get('/quests/:questid', (request, response) => {
     const questId = parseInt(request.params.questid);
     const myQuest = quests.quests.find((onequest) => onequest.id === questId);
     // White house
     let distance = 0;
 var coord1 = {
     latitude: app.locals.quests[0].geoPoint[0],
     longitude: app.locals.quests[0].geoPoint[1]
   }
    
   // Washington Monument
   var coord2 = {
     latitude: app.locals.quests[1].geoPoint[0],
     longitude: app.locals.quests[1].geoPoint[1]
   }
    
   geo.vincenty(coord1, coord2, function(dist) {
     distance = dist;
   });
    
 //   var vincentyDist = geo.vincentySync(coord1, coord2);
    
    
    
 //   geo.haversine(coord1, coord2, function(dist) {
 //     console.log(dist);
 //   });
    
 //   var haversineDist = geo.haversineSync(coord1, coord2);
     response.render("quest",{myQuest, "distance": distance});
 
 
 
     
 
 
 });
// Puis on exporte le router afin de l'utiliser quelque pars dans notre serveur
module.exports = router;