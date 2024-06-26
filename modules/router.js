const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');
const questController = require('../controllers/questController');

// router.use(function (req, res, next) {
//      next();
// })

router.use('/*',(req, res, next) => {
  if (req.session.isLogged === true){
    next();
  }else{
    if (req.originalUrl !== '/login'){
      res.redirect('/login');
    }else{
      next();
    }
    
  }
})
router.get('/', (req, res) => {
     response.render('index');
 });
 router.get('/quests', questController.questsPage);
 
 
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
     response.render("quest",{myQuest, "distance": distance});
 });
 router.get('/login', heroController.loginPage);
 router.post('/login', heroController.loginAttempt);
 router.get('/heroes', heroController.heroesPage);
// Puis on exporte le router afin de l'utiliser quelque pars dans notre serveur
module.exports = router;