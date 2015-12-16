module.exports = function(app, mongoose, db) {
    var model = require("./models/page.model.js")(mongoose, db);
    require("./services/page.service.server.js")(app, model);
	
/*     var equipmentModel = require("./models/equipment.model.js")(mongoose, db);
    require("./services/equipment.service.server.js")(app, equipmentModel); */
};
