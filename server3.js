var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');

console.log(mongoose);

var CourseSchema = new mongoose.Schema({
	title: String,
	seats: {type: Number, default: 25},
	starts: {type: Date, default: Date.now}
}, {collection: "test2"});

var Course = mongoose.model("Course", CourseSchema);

Course.create({title: "MongoDB", seats: 32},
function(err, results) {
	console.log(err);
	console.log(results);
});

function findAll(callback) {
	Course.find(callback);
}

function findByTitle(title, callback) {
	Course.find({title: title}, callback);
}

function createCourse(course) {
	Course.create(course, function(err, results) {
	console.log(err);
	console.log(results);
	});
}

findAll(renderCourses);

function renderCourses(err, resultSet) {
	// console.log(err);
	// console.log(resultSet);
	for (var r in resultSet) {
		var title = resultSet[r].title;
		var seats = resultSet[r].seats;
		console.log(title, seats);
	}
	
}

app.use(express.static(__dirname + '/test'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);


