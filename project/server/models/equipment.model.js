var q = require("q");

module.exports = function(mongoose, db){
    var EquipmentSchema = mongoose.Schema({
		name: String,
		datePosted: {type: Date, default: Date.now},
		price: Number,
		category: String,
		company: String
    }, {collection: "equipment"});

    var equipment = mongoose.model("equipment", EquipmentSchema);

    var api = {
        addEquipment: addEquipment,
        addContent: addContent,
        getAllEquipments: getAllEquipments,
        getEquipmentById: getEquipmentById
    };
    return api;

    function addContent(equipmentId, contentType) {
        var deferred = q.defer();

        equipment.findById(equipmentId, function(err, equipment){
            var content = {
                contentType: contentType,
                list: {listType: 'ORDERED', items: ["Item 1", "Item 2", "Item 3"]}
            };
            equipment.content.push(content);
            equipment.save(function(err, doc){
                deferred.resolve(doc);
            });
        });

        return deferred.promise;
    }

    function getEquipmentById(id) {
        var deferred = q.defer();

        equipment.findById(id, function(err, equipment){
            deferred.resolve(equipment);
        });

        return deferred.promise;
    }

    function getAllEquipments() {
        var deferred = q.defer();

        equipment.find(function(err, equipments){
            deferred.resolve(equipments);
        });

        return deferred.promise;
    }

    function addEquipment(equipment) {
        var deferred = q.defer();

        equipment.create(equipment, function(err, doc){
            equipment.find(function(err, equipments){
                deferred.resolve(equipments);
            });
        });

        return deferred.promise;
    }
};