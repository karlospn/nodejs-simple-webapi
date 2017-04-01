var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost:27017/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//var cats = require('./cats_in_memory')(app);
var cats = require('./cats_mongodb')(app);
var main = require('./main')(app);

var server = app.listen(8000, function(){
    console.log('Server running on localhost:8000');
});

