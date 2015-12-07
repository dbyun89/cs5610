(function(){
    angular
        .module("WhiteBoardApp")
        .factory("PageService", PageService);

    function PageService($http, $q) {
        var api = {
            getAllPages: getAllPages,
            getPageById: getPageById,
            addPage: addPage,
            addContent: addContent
        };
        return api;

        function addContent(pageId, contentType) {
            var deferred = $q.defer();

            $http.post("/rest/pages/" + pageId + "/content/" + contentType)
                .success(function(pages){
                    deferred.resolve(pages);
                });

            return deferred.promise;
        }

        function addPage(pages) {
            var deferred = $q.defer();

            $http.post("/rest/pages", pages)
                .success(function(pages){
                    deferred.resolve(pages);
                });

            return deferred.promise;
        }

        function getAllPages() {
            var deferred = $q.defer();

            $http.get("/rest/pages")
                .success(function(pages){
                    deferred.resolve(pages);
                });

            return deferred.promise;
        }

        function getPageById(id) {
            var deferred = $q.defer();

            $http.get("/rest/pages/"+id)
                .success(function(pages){
                    deferred.resolve(pages);
                });

            return deferred.promise;
        }
    }
})();