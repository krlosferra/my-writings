require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();

var corsOptions = {
  origin: "http://localhost:8888"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
//const indexRoute = require('./routes/index');
const writingRoute = require('../src/app/route/writing');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARES
//app.use(cors());
app.use(express.json());
/*to get json data from forms
app.use(express.urlencoded({extended: false}));*/

//ROUTES
//app.use(indexRoute);
app.use('/api', writingRoute);

//STATIC FILES
app.use(express.static(path.join(__dirname, 'dist')));

//START SERVER
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
mongoose.connection.on('Error', (err) => {
    console.log('MongoDB Error on ' + err)
  });

app.listen(app.get('port'), () => {
    console.log('LISTENING ON PORT: ', app.get('port'));
});
