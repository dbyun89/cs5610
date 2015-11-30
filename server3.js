//var express = require('express');
//var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');

var CourseSchema = new mongoose.Schema({
	title: String,
	seats: {type: Number, default: 25},
	starts: {type: Date, default: Date.now}
}, {collection: "course"});

var Course = mongoose.model("Course", CourseSchema);

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



