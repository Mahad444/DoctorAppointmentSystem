const express = require('express');
const { LoginController, RegisterController, AuthController } = require('../controllers/userController');
const Authmidlleware = require('../middlewares/Authmidlleware');

const router = express.Router();


// @route Post api
// @desc Login a user 
// @access Public
router.post('/register',RegisterController);

router.post('/login',LoginController);

   
// AUTH MIDDLEWARE||POST

router.post('/getUserData' ,Authmidlleware,AuthController);

module.exports = router;