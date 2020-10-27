var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Heroes Digitales' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Heroes Digitales | Contacto' });
});

module.exports = router;
