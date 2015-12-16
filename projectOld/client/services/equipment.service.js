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

            $http.post("/api/lecture/mongo/pe/equipment/" + equipmentId + "/content/" + contentType)
                .success(function(equipment){
                    deferred.resolve(equipment);
                });

            return deferred.promise;
        }

        function addEquipment(equipment) {
            var deferred = $q.defer();

            $http.post("/api/lecture/mongo/pe/equipment", equipment)
                .success(function(equipments){
                    deferred.resolve(equipments);
                });

            return deferred.promise;
        }

        function getAllEquipments() {
            var deferred = $q.defer();

            $http.get("/api/lecture/mongo/pe/equipment")
                .success(function(equipments){
                    deferred.resolve(equipments);
                });

            return deferred.promise;
        }

        function getEquipmentById(id) {
            var deferred = $q.defer();

            $http.get("/api/lecture/mongo/pe/equipment/"+id)
                .success(function(equipment){
                    deferred.resolve(equipment);
                });

            return deferred.promise;
        }
    }
})();