(function(){
    angular
        .module("WhiteBoardApp")
        .factory("EquipmentService", EquipmentService);

    function EquipmentService($http, $q) {
        var api = {
            getAllEquipments: getAllEquipments,
            getEquipmentById: getEquipmentById,
            addEquipment: addEquipment,
            addContent: addContent
        };
        return api;

        function addContent(equipmentId, contentType) {
            var deferred = $q.defer();

            $http.post("/rest/equipment/" + equipmentId + "/content/" + contentType)
                .success(function(equipment){
                    deferred.resolve(equipment);
                });

            return deferred.promise;
        }

        function addEquipment(equipment) {
            var deferred = $q.defer();

            $http.post("/rest/equipment", equipment)
                .success(function(equipments){
                    deferred.resolve(equipments);
                });

            return deferred.promise;
        }

        function getAllEquipments() {
            var deferred = $q.defer();

            $http.get("/rest/equipment")
                .success(function(equipments){
                    deferred.resolve(equipments);
                });

            return deferred.promise;
        }

        function getEquipmentById(id) {
            var deferred = $q.defer();

            $http.get("/rest/equipment/"+id)
                .success(function(equipment){
                    deferred.resolve(equipment);
                });

            return deferred.promise;
        }
    }
})();