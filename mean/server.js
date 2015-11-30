var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WhiteBoardDB');

// var bodyParser = require('body-parser');
// var multer = require('multer');

// var db = mongoose.connection;


app.use(express.static(__dirname + '/public'));

// var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
// var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

// app.listen(port, ipaddress);

app.listen(3000);

