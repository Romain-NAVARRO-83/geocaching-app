require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: false }));
const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
const geo = require('node-geo-distance');

app.set("view engine", "ejs");
app.set("views", "./views");
usersInfo = require("./users.json");
app.locals.logged = true;
app.locals.userId = 1;
app.locals.userInfo = usersInfo.find((user) => user.id === app.locals.userId);
const map = require("./modules/map");
app.locals.quests = require("./quests.json");

// Libraries
const quests = require("./modules/quests");
const router = require ('./modules/router');

app.use( router);



const server = app.listen(3000, function () {
    console.log('Node server is running..');
});