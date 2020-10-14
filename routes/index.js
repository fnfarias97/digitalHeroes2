var express = require('express');
const heroes = require('../data/heroes');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Heroes Digitales' });
});

router.get('/heroes', function(req, res, next) {
  heroesString = JSON.stringify(heroes);
  res.render('heroes', { title: 'Heroes Digitales | Heroes', heroes: heroesString});
});

module.exports = router;
