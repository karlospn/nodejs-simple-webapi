var http = require('http');
var express = require('express');
var app = express();

var cats = require('./cats')(app);
var main = require('./main')(app);

var server = app.listen(8000, function(){
    console.log('Server running on localhost:8000');
});

