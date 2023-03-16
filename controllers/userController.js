const userModel = require('../models/UserModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports = {
    // Register a user
     RegisterController : async (req, res,next) => {
        try {
            // Check if user exists
            const existingUser = await userModel.findOne({email: req.body.email});
            if (existingUser) {
                res.status(200).json({success: false, message: 'User already exists'});
            }
            const password = req.body.password;
            const salt= await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
             req.body.password = hashedPassword;
 
            const user = await userModel(req.body);
            await user.save();
            res.status(200).json({success: true, message: 'User created successfully'});
        }
         catch (err) {
        res.status(500).json({success: false,message: `Register Controller ${err.message}`});
    }
},
// Login a user
LoginController : async (req, res,next) => {

    try {
        const user = await userModel.find({email: req.body.email});
        if (!user) { res.status(200).json({success: false, message: 'User does not exist'}); 
    }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) { res.status(200).json({success: false, message: 'Invalid email or password'});
        }
        const token = jwt.sign({id: user.__id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
        res.status(200).json({success: true, token,message: 'User logged in successfully'});
    }
    catch (err) {
        res.status(500).json({success: false,message: `Login Error in Controller ${err.message}`});
    }
}
}
