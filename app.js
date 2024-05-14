const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.static('assets'));
const geo = require('node-geo-distance');
app.set("view engine", "ejs");
app.set("views", "./views");
usersInfo = require("./users.json");
app.locals.logged = true;
app.locals.userId = 1;
app.locals.userInfo = usersInfo.find((user) => user.id === app.locals.userId);


const map = require("./modules/map");

// Libraries
const quests = require("./modules/quests");
app.locals.quests = require("./quests.json");
// const constructor = {
//     head : fs.readFileSync('./assets/head.html'),
//     header : fs.readFileSync('./assets/header.html'),
//     end : "</body></html>",
// }
app.get('/', (req, res) => {
    response.render('index');
});
app.get('/quests', (request, response) => {
    response.render('quests');
});


// Page détail quête
app.get('/quests/:questid', (request, response) => {
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

const server = app.listen(3000, function () {
    console.log('Node server is running..');
});