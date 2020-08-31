require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
//const indexRoute = require('./routes/index');
const writingRoute = require('./routes/writing');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARES
app.use(cors());
app.use(express.json());
/*to get json data from forms
app.use(express.urlencoded({extended: false}));*/

//ROUTES
//app.use(indexRoute);
app.use('/api', writingRoute);

//STATIC FILES
app.use(express.static(path.join(__dirname, 'dist')));


//START SERVER
/*mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
mongoose.connection.on('Error', (err) => {
    console.log('MongoDB Error on ' + err)
  });*/

app.listen(app.get('port'), () => {
    console.log('LISTENING ON PORT: ', app.get('port'));
});
