module.exports = function(app, equipmentModel) {
    app.post("/api/lecture/mongo/pe/equipment", addEquipment);
    app.get("/api/lecture/mongo/pe/equipment", getAllEquipments);
    app.get("/api/lecture/mongo/pe/equipment/:id", getEquipmentById);
    app.post("/api/lecture/mongo/pe/equipment/:equipmentId/content/:contentType", addContent);
	
    function addContent(req, res) {
        var equipmentId = req.params["equipmentId"];
        var contentType = req.params["contentType"];
        equipmentModel
            .addContent(equipmentId, contentType)
            .then(function(equipment){
                res.json(equipment);
            });
    }

    function getEquipmentById(req, res) {
        equipmentModel
            .getEquipmentById(req.params.id)
            .then(function(equipment){
                res.json(equipment);
            });
    }

    function getAllEquipments(req, res) {
        equipmentModel
            .getAllEquipments()
            .then(function(equipments){
                res.json(equipments);
            });
    }

    function addEquipment(req, res) {
        var equipment = req.body;
        equipmentModel
            .addEquipment(equipment)
            .then(function(equipments){
                res.json(equipments);
            });
    }
};