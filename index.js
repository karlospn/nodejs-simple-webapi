var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var cats = require('./cats')(app);
var main = require('./main')(app);

var server = app.listen(8000, function(){
    console.log('Server running on localhost:8000');
});

