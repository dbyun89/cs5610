module.exports = function(app, mongoose, db) {
    var model = require("./index/server/models/page.model.js")(mongoose, db);
    require("./index/server/services/page.service.server.js")(app, model);
};

