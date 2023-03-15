const express = require('express');
const { LoginController, RegisterController } = require('../controllers/userController');

const router = express.Router();


// @route Post api
// @desc Login a user
router.post('/register',RegisterController);

// router.post('/login',LoginController);



module.exports = router;