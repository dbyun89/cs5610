module.exports = function(mongoose) {
	"use strict";
	var FieldSchema = mongoose.Schema({
		"id" : String,
		"label" : String,
		"fieldType" : {type : String, enum: ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"]},
		"options" : [{label : String, value: String}],
		"placeholder" : String
	});
	return FieldSchema;
};
