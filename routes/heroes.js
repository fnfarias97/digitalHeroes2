var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path')
const heroesController = require('../controllers/heroesController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })

router.get('/', heroesController.index);

router.get('/:id/profesion',heroesController.profesion);

router.get('/:id/resenia',heroesController.resenia);

router.get('/crear',heroesController.crear);

router.post('/create', upload.any(), heroesController.create)

router.get('/edit/:id', heroesController.editar)

router.put('/edit/:id', upload.any(), heroesController.edit)

router.get('/:id',heroesController.detalle);

router.delete('/remove/:id',heroesController.remove);

module.exports = router;