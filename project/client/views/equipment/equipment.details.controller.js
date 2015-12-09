(function() {
    angular
        .module("WhiteBoardApp")
        .controller("EquipmentDetailsController", EquipmentDetailsController);

    function EquipmentDetailsController(EquipmentService, $routeParams) {
        var equipmentId = $routeParams["equipmentId"];

        var equipmentModel = this;
        equipmentModel.addContent = addContent;
        equipmentModel.removeContent = removeContent;

        function init() {
            EquipmentService
                .getEquipmentById(equipmentId)
                .then(function(equipment){
                    equipmentModel.equipment = equipment;
                });
        }
        init();

        function addContent(contentType) {
            EquipmentService
                .addContent(equipmentModel.equipment._id, contentType)
                .then(function(equipment){
                    equipmentModel.equipment = equipment;
                });
        }

        function removeContent(content) {
            var contentIndex = equipmentModel.equipment.content.indexOf(content);
            EquipmentService
                .removeContent(equipmentModel.equipment._id, contentIndex)
                .then(function(equipment){
                    equipmentModel.equipment = equipment;
                });
        }
    }
}) ();