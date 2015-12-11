var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require ('multer');
var q = require ('q');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');


var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test'); //local

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(session({ secret: 'this is the secret' }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
function(username, password, done)
{
    UserModel.findOne({username: username, password: password}, function(err, user)
    {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    })
}));

passport.serializeUser(function(user, done)
{
    done(null, user);
});

passport.deserializeUser(function(user, done)
{
    UserModel.findById(user._id, function(err, user)
    {
        done(err, user);
    });
});


var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';
//console.log(connectionString);
//mongoose.connect(connectionString);

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

var db = mongoose.connect(connectionString);

app.use(express.static(__dirname + '/passportjs'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;


// require("./index/server/app.js")(app, mongoose, db);
//require("./project/server/app.js")(app, mongoose, db);

var UserModel = require("./user/user.model.js")();
var UserService = require("./user/user.service.js")(app, UserModel, passport);

app.listen(port, ipaddress);



//Equipment Schema
/* var EquipmentSchema = new mongoose.Schema ({
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
}); */


//User Schema
var UserSchema = new mongoose.Schema ({
	username: String,
	name: String,
	password: String,
	dateCreated: {type: Date, default: Date.now},
	email: String,
	role: String
}, {collection: "user"});

var user = mongoose.model("user", UserSchema);









app.get("/rest/user", function(req, res) {
	
	user.find(function(err, userList) {
		if (userList) {
		console.log("in serverTest.js" + userList);
		res.json(userList);
		}
		else {
			console.log("stuck in user.find");
		}
		
	});
});









