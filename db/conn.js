const mongoose = require("mongoose");
require ("colors")
require("dotenv").config();
mongoose.set("strictQuery", false);

const mongodbconn = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB".bgWhite.black)
    console.log("#StandWith".bgBlue+"Ukraine".bgYellow)
  })
  .catch((error) => {
    return error;
  });
  

module.exports = mongodbconn;
