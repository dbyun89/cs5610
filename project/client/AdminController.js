(function(){
    angular
        .module("WhiteBoardApp")
        .controller("AdminController", AdminController);

    function AdminController($scope, AdminService, $http) {

/*         $scope.courses = CourseService.getAllCourses();

        $scope.removeCourse = function(index) {
            console.log(index);
            $scope.courses.splice(index, 1);
        } */
		
		AdminService.findUsers(function(user) {
			console.log("In AdminController.js" + user);
			$scope.user = user;
		
		
		
		});
    }
}) ();