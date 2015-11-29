module.exports = function(mongoose) {
	"use strict";
	var FieldSchema = require('./field.schema.js')(mongoose);
	var FormSchema = mongoose.Schema({
		"id" : String,
		"title" : String,
		"userId" : String,
		"fields" : [FieldSchema]
	}, {collection : "cs5610.assignment.form"});
	return FormSchema;
};
