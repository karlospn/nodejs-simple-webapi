var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost:27017/dogs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var dogs = require('./routes/dogs')(app);

var server = app.listen(8001, function(){
    console.log('Server running on localhost:8001');
});

