const userModel = require("../models/UserModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  // Register a user
  RegisterController: async (req, res, next) => {
    try {
      // Check if user exists
      const existingUser = await userModel.findOne({ email: req.body.email });
      if (existingUser) {
        res
          .status(200)
          .json({ success: false, message: "User already exists" });
      }
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;

      const user = await userModel(req.body);
      await user.save();
      res
        .status(200)
        .json({ success: true, message: "User created successfully" });
    } catch (err) {
      res
        .status(500)
        .json({
          success: false,
          message: `Register Controller ${err.message}`,
        });
    }
  },
  // Login a user
  LoginController: async (req, res, next) => {
    try {
      //checking if user is available

      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      }
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const isMatch = await bcrypt.compare(password, hashedPassword);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: "Invlid Email or Password", success: false });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "90d",
      });
      res.status(200).send({ message: "Login Success", success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }

    //     const isMatch = await bcrypt.compare(password, user.password);
    //     if (!isMatch) { return res.status(200).send({ message: "Invlid Email or Password", success: false });
    //     }
    //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //       expiresIn: "1d",
    //     });
    //     res.status(200).send({ message: "Login Success", success: true, token });
    //   } catch (error) {
    //     console.log(error);
    //     res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    //   }
  },
  // Get a user
  AuthController: async (req, res) => {
    try {
      const user = await userModel.findOne({ _id: req.body.userId });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      }
      // res.status(200).send({ message: "User Found", success: true, user });
      else {
        res.status(200).send({
          success: true,
          data: {
            name: user.name,
            email: user.email,
          },
        });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: `Error in Login CTRL`, success: false, error });
    }
  },
};
//     try {
//         const user = await userModel.find({email: req.body.email});
//         if (!user) { res.status(200).json({success: false, message: 'User does not exist'});
//     }
//         const isMatch = await bcrypt.compare(req.body.password, user.password);
//         if (!isMatch) { res.status(200).json({success: false, message: 'Invalid email or password'});
//         }
//         const token = jwt.sign({id: user.__id}, process.env.JWT_SECRET, {expiresIn: '1d'});
//         res.status(200).json({success: true, token,message: 'User logged in successfully'});
//     }
//     catch (err) {
//         res.status(500).json({success: false,message: `Login Error in Controller ${err.message}`});
//     }
// }
