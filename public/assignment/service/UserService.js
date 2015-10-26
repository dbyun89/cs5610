(function() {
    "use strict";
    angular
		.module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var users = [
		
		];

        var service = {
			findUserByUsernameAndPassword : findUserByUsernameAndPassword,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser
        };

        return service;
        
        function guid() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		}

        function findUserByUsernameAndPassword(username, password, callback) {
            for (var i=0; i<users.length; i++) {
                if (users[i].username == username && users[i].password == password) {
                    callback(users[i]);
                }
				else {
					callback(null);
				}
            }
        }
        
        function findAllUsers(callback) {
            callback(users);
        }
        
        function createUser(user, callback) {
            var newUser = {
                id : guid(),
                username : user.username,
                password : user.password,
            };
            users.push(newUser);
            callback(newUser);
        }
        
        function deleteUserById(id, callback) {
            for (var i=0; i<users.length; i++) {
                if (users[i].id == id) {
                    users.splice(i,1);
					callback(users)
                }
				else {
					callback(null)
				}
            }
        }

        function updateUser(id, user, callback) {
            for (var i=0; i<users.length; i++) {
                if (users[i].id == id) {
                    users[i].username = user.username;
                    users[i].password = user.password;
                    callback(users[i]);
                }
				else {
					callback(null);
				}
            }
        }
    }
}) ();
