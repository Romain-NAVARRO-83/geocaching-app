const express = require('express');
// On récupère un nouveau routeur vide qu'on va modifier
const router = express.Router();

//déclanché pour n'importe quelle route qui passe par ce router
router.use(function (req, res, next) {
     // ... Un peu de logique ici ... Comme n'importe quel middleware
     next();
})

// traitera toute demande qui se termine par /events
// en fonction de l'endroit ou le router est utilisé ( use())
router.get('/events', function (req, res, next) {
     // ..
})
// Puis on exporte le router afin de l'utiliser quelque pars dans notre serveur
module.exports = router;