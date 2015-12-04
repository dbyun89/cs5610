(function(){
    angular
        .module("WhiteBoardApp")
        .controller("CourseController", CourseController);

    function CourseController($scope, CourseService, $http) {

/*         $scope.courses = CourseService.getAllCourses();

        $scope.removeCourse = function(index) {
            console.log(index);
            $scope.courses.splice(index, 1);
        } */
		
		CourseService.findEquipments(function(equipment) {
			console.log("In CourseController.js" + equipment);
			$scope.equipment = equipment;
		
		
		
		});
    }
})();