const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require ('colors');
const connectDB = require('./config/db');



// LOAD ENV VARS
dotenv.config();


// CONNECT TO DATABASE
connectDB();


// REST OBJECTS

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
app.use('/api/v1/users', require('./routes/userRoute'));
// PORT
const PORT = process.env.PORT || 7070;

// LISTEN
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_MODE} mode on port http://localhost:${PORT}`.yellow.bold);
}
);