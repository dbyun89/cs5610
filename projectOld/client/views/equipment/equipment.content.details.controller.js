(function(){
    angular
        .module("WhiteBoardApp")
        .controller("EquipmentContentEditorController", EquipmentContentEditorController);

    function EquipmentContentEditorController(EquipmentService, $routeParams) {
        var equipmentId = $routeParams["equipmentId"];
        var contentIndex = $routeParams["index"];

        var model = this;

        function init() {
            EquipmentService
                .getEquipmentById(equipmentId)
                .then(function(equipment){
                    model.equipment = equipment;
                    model.content = model.equipment.content[contentIndex];
                });
        }
        init();
    }
})();