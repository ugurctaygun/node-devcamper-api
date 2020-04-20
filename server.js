const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');

//Route files
const bootcamps = require('./routes/bootcamps');

//Load env vars
dotenv.config({path: './config/config.env'});

//Connect to Database
connectDB();

const app = express();

//Dev logging middleware
if(process.env.NODE_ENV === 'developement') {
    app.use(morgan('dev'));
}

//Custom middleware
//app.use(logger);

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server runner in ${process.env.NODE_ENV} mode on port ${PORT}`));