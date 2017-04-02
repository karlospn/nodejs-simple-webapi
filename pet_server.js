var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost:27017/pets');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//var cats = require('./routes/cats_in_memory')(app);
var dogs = require('./routes/dogs')(app);
var cats = require('./routes/cats')(app);

var server = app.listen(8002, function(){
    console.log('Server running on localhost:8002');
});

