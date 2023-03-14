const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require ('colors');


// LOAD ENV VARS
dotenv.config();


// REST OBJECTS

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
app.get('/', (req, res) => {
    res.status(200).json({
        message:"server running successfully"
    })
});

// PORT
const PORT = process.env.PORT || 7070;

// LISTEN
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_MODE} mode on port http://localhost:${PORT}`.yellow.bold);
}
);