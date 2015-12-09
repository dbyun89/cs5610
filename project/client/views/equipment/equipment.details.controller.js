(function() {
    angular
        .module("WhiteBoardApp")
        .controller("EquipmentDetailsController", EquipmentDetailsController);

    function EquipmentDetailsController(EquipmentService, $routeParams) {
        var equipmentId = $routeParams["equipmentId"];

        var model = this;
        model.addContent = addContent;
        model.removeContent = removeContent;

        function init() {
            EquipmentService
                .getEquipmentById(equipmentId)
                .then(function(equipment){
                    model.equipment = equipment;
                });
        }
        init();

        function addContent(contentType) {
            EquipmentService
                .addContent(model.equipment._id, contentType)
                .then(function(equipment){
                    model.equipment = equipment;
                });
        }

        function removeContent(content) {
            var contentIndex = model.equipment.content.indexOf(content);
            EquipmentService
                .removeContent(model.equipment._id, contentIndex)
                .then(function(equipment){
                    model.equipment = equipment;
                });
        }
    }
}) ();