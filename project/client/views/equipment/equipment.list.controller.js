(function(){
    angular
        .module("WhiteBoardApp")
        .controller("EquipmentListController", EquipmentListController);

    function EquipmentListController(EquipmentService) {
        var equipmentModel = this;
        equipmentModel.addEquipment = addEquipment;

        function init() {
            EquipmentService
                .getAllEquipments()
                .then(function(equipments){
                    equipmentModel.equipments = equipments;
                });
        }
        init();

        function addEquipment(equipment) {
            EquipmentService
                .addEquipment(equipment)
                .then(function(equipments){
                    equipmentModel.equipments = equipments;
                });
        }
    }
})();