(function() {
	angular
		.module("WhiteBoardApp")
		.controller("CourseController", CourseController);
	
	function CourseController($scope) {
		$scope.hello = "Hello from Course Controller";

	}
}) ();