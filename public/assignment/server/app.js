module.exports = function(app, mongoose, db) {
	"use strict";
	
	var UserSchema = require("./models/user.schema.js")(mongoose);
	var FormSchema = require("./models/form.schema.js")(mongoose);
	var FormModel = require("./models/form.model.js")(app, mongoose, FormSchema);
	var UserModel = require("./models/user.model.js")(app, mongoose, UserSchema);
	
	require("./services/user.service.js")(app, userModel);
	require("./services/form.service.js")(app, formModel);
	require("./services/field.service.js")(app, formModel);
}