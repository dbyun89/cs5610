var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require ('multer');

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test'); //local

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';
mongoose.connect(connectionString);

/* if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
} */

// var db = mongoose.connect(connectionString);

app.use(express.static(__dirname + '/project/client'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);


//Equipment Schema
var EquipmentSchema = new mongoose.Schema ({
	name: String,
	datePosted: {type: Date, default: Date.now},
	price: Number,
	category: String
}, {collection: "equipment"});	

var equipment = mongoose.model("equipment", EquipmentSchema);

app.get("/rest/equipment", function(req, res) {
	
	equipment.find(function(err, equipmentList) {
		if (equipmentList) {
		console.log("in serverTest.js" + equipmentList);
		res.json(equipmentList);
		}
		else {
			console.log("stuck in equipment.find");
		}
		
	});
});












