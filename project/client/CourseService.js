(function(){
    angular
        .module("WhiteBoardApp")
        .factory("CourseService", CourseService);

    function CourseService($http) {
/*         var courses = [
            {title: "Java 101", seats: 12, start: new Date()},
            {title: "Node.js 101", seats: 12, start: new Date()},
            {title: "C# 101", seats: 12, start: new Date()},
            {title: "ASP.NET 101", seats: 12, start: new Date()},
        ]; */
		
		var courses = [
			{title: "Steel Leaf Rake", start: new Date(), price: 14.97, category: "Rakes"},
			{title: "Post Hole Digger", start: new Date(), price: 34.97, category: "Digging Tools"}
		];

        var service = {
            getAllCourses: getAllCourses,
			findEquipments: findEquipments
        };
        return service;

        function getAllCourses() {
            return courses;
        }
		
		function findEquipments(callback) {
			console.log("In CourseService.js" + callback);
			$http.get("/api/lecture/mongo/pe/equipment")
				.success(callback)
		}
    }
}) ();
