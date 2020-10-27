var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController')

router.get('/register', authController.create);

router.post('/register', authController.store);

router.get('/login', authController.login);

router.get('/avatar', authController.updateAvatar);

module.exports = router;
