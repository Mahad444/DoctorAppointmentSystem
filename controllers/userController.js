const userModel = require('../models/UserModels');
const bcrypt = require('bcryptjs');


module.exports = {
    // Register a user
     RegisterController : async (req, res, next) => {
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
}

}
