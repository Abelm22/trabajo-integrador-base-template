const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const mongodb = require('./databases/mongodb.connection');

const touristCorridorRouter = require('./src/routes/touristCorridor.router');
const destinationRouter = require('./src/routes/destinations.router');

const app = express();

mongodb.connectMongoDb()
    .then(() => console.log('[ 🚀 MongoDb connected ]'))
    .catch(err => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/index', touristCorridorRouter);
app.use('/destination', destinationRouter);

module.exports = app;
