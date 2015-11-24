(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

     function RegisterController($scope, $location, UserService, $rootScope) {
        $scope.$location = $location;
		$scope.register = register;
		
		function register() {
			var newUser = {
				username: user.username,
				inputPassword3: user.inputPassword3,
				email: user.email
			};
			
            UserService.createUser(newUser, function(newUser){
                $rootScope.user = newUser;
                $location.path("/profile");
            });
        }
    }
}) ();
