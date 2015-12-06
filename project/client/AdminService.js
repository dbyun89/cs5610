(function(){
    angular
        .module("WhiteBoardApp")
        .factory("AdminService", AdminService);

    function AdminService($http) {
/*         var courses = [
            {title: "Java 101", seats: 12, start: new Date()},
            {title: "Node.js 101", seats: 12, start: new Date()},
            {title: "C# 101", seats: 12, start: new Date()},
            {title: "ASP.NET 101", seats: 12, start: new Date()},
        ]; */
		
		var users = [
			{name:"Justus Arnold", password:"JA123", email:"JArnold@GardenEquipment.com", dateCreated: new Date(), role:"user"},
			{name:"Kenzie Arjuna", password:"KA123", email:"KArjuna@GardenEquipment.com", dateCreated: new Date(), role:"user"},
			{name:"David Byun", password:"DB123", email:"DByun@GardenEquipmentAdmin.com", dateCreated: new Date(), role:"admin"}
		];
		
		

        var userService = {
            getAllUsers: getAllUsers,
			findUsers: findUsers
        };
        return userService;

        function getAllUsers() {
            return user;
        }
		
		function findUsers(callback) {
			console.log("In UsersService.js" + callback);
			$http.get("/rest/user")
				.success(callback)
		}
    }
}) ();
