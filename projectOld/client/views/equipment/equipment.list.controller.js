(function(){
    angular
        .module("WhiteBoardApp")
        .controller("EquipmentListController", EquipmentListController);

    function EquipmentListController(EquipmentService) {
        var model = this;
        model.addEquipment = addEquipment;

        function init() {
            EquipmentService
                .getAllEquipments()
                .then(function(equipments){
                    model.equipments = equipments;
                });
        }
        init();

        function addEquipment(equipment) {
            EquipmentService
                .addEquipment(equipment)
                .then(function(equipments){
                    model.equipments = equipments;
                });
        }
    }
})();