var q = require("q");

module.exports = function(mongoose, db){
    var EquipmentSchema = mongoose.Schema({
		"name": String,
        "label": String,
        "created": {type: Date, default: Date.now},
        "content": [{
            "contentType": {
                type: String,
                enum: ["HEADING","LABEL", "PARAGRAPH", "LIST", "FORM"]
            },
            "heading": {
                "size" : {type: Number, default:2},
                "content" : {type: String, default: "Heading"}
            },
            "label" : {
                "content" : {type: String, default: "Label"}
            },
            "paragraph" : {
                "content" : {type: String, default: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"}
            },
            "list" : {
                "listType" : {type: String, enum: ["ORDERED", "UNORDERED"], default: "ORDERED"},
                "items": [String]
            },
            "form" : {
                "formId" : String
            }
        }]
    }, {collection: "equipment"});

    var EquipmentModel = mongoose.model("EquipmentModel", EquipmentSchema);

    var api = {
        addEquipment: addEquipment,
        addContent: addContent,
        getAllEquipments: getAllEquipments,
        getEquipmentById: getEquipmentById
    };
    return api;

    function addContent(equipmentId, contentType) {
        var deferred = q.defer();

        EquipmentModel.findById(equipmentId, function(err, equipment){
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

        EquipmentModel.findById(id, function(err, equipment){
            deferred.resolve(equipment);
        });

        return deferred.promise;
    }

    function getAllEquipments() {
        var deferred = q.defer();

        EquipmentModel.find(function(err, equipments){
            deferred.resolve(equipments);
        });

        return deferred.promise;
    }

    function addEquipment(equipment) {
        var deferred = q.defer();

        EquipmentModel.create(equipment, function(err, doc){
            EquipmentModel.find(function(err, equipments){
                deferred.resolve(equipments);
            });
        });

        return deferred.promise;
    }
};