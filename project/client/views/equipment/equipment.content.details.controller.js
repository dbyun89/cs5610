(function(){
    angular
        .module("WhiteBoardApp")
        .controller("EquipmentContentEditorController", EquipmentContentEditorController);

    function EquipmentContentEditorController(EquipmentService, $routeParams) {
        var equipmentId = $routeParams["equipmentId"];
        var contentIndex = $routeParams["index"];

        var equipmentModel = this;

        function init() {
            EquipmentService
                .getEquipmentById(equipmentId)
                .then(function(equipment){
                    equipmentModel.equipment = equipment;
                    equipmentModel.content = equipmentModel.equipment.content[contentIndex];
                });
        }
        init();
    }
})();