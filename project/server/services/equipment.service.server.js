module.exports = function(app, model) {
    app.post("/rest/equipment", addEquipment);
    app.get("/rest/equipment", getAllEquipments);
    app.get("/rest/equipment/:id", getEquipmentById);
    app.post("/rest/equipment/:equipmentId/content/:contentType", addContent);

    function addContent(req, res) {
        var equipmentId = req.params["equipmentId"];
        var contentType = req.params["contentType"];
        model
            .addContent(equipmentId, contentType)
            .then(function(equipment){
                res.json(equipment);
            });
    }

    function getEquipmentById(req, res) {
        model
            .getEquipmentById(req.params.id)
            .then(function(equipment){
                res.json(equipment);
            });
    }

    function getAllEquipments(req, res) {
        model
            .getAllEquipments()
            .then(function(equipments){
                res.json(equipments);
            });
    }

    function addEquipment(req, res) {
        var equipment = req.body;
        model
            .addEquipment(equipment)
            .then(function(equipments){
                res.json(equipments);
            });
    }
};