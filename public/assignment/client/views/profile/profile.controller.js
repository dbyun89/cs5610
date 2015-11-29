(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, UserService, $rootScope) {
		var model = this;
		
		model.$location = $location;
		model.$update = update;
		
		function init() {
			model.username = $rootScope.user.username;
			model.password = $rootScope.user.password;
			model.firstname = $rootScope.user.firstname;
			model.lastname = $rootScope.user.lastname;
			model.email = $rootScope.user.email;
		}
		init();
        
		function update() {
			var newUser = {
				'username' : model.username,
				'password' : model.password,
				'firstName' : model.firstname,
				'lastName' : model.lastname,
				'email' : model.email
			};
			
			UserService
				.updateUser($rootScope.user.id, newUser)
				.then(function(newUserDetails) {
					$rootScope.user = newUserDetails;
					model.username = $rootScope.user.username;
					model.password = $rootScope.user.password;
					model.firstname = $rootScope.user.firstname;
					model.lastname = $rootScope.user.lastname;
					model.email = $rootScope.user.email;
				});
        }
    }
}) ();
