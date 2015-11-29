var express = require('express');
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/cs5610');
var app = express();
//var db = mongoose.connection;
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);
