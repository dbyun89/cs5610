(function() {
	angular
		.module("WhiteBoardApp")
		.controller("ProfileController", ProfileController);

	function ProfileController(UserService) {
		var model = this;
		model.update = update;
    
		function update(user) {
			UserService.update(user, function(response) {
				console.log(response);
			});
		}
	}
}) ()
