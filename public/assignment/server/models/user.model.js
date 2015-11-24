"use strict";

var users = require("./user.mock.json");

module.exports = function(app) {
	var api = {
		createUser: createUser,
		findAllUsers : findAllUsers,
		findUserById : findUserById,
		updateUser : updateUser,
		deleteUser : deleteUser,
		findUserByUsername: findUserByUsername,
		findUserByCredential: findUserByCredential
	};
	return api;
	
	function createUser(user) {
		user.id = guid();
		users.push(user);
		return users;
	}
	
	function findAllUsers() {
		return users;
	}
	
	function findUserById(id) {
		for (var i=0; i<users.length; i++) {
			if (users[i].id == id) {
				return users[i];
			}
		}
		return null;
	}
	
	function updateUser(id, newUser) {
		for (var i=0; i<users.length; i++) {
			if (users[i].id == id) {
				users[i] = newUser;
				break;
			}
		}
		return users;
	}
	
	function deleteUser(id) {
		for (var i=0; i<users.length; i++) {
			if (users[i].id == id) {
				users.splice(i, 1);
				break;
			}
		}
		return users;
	}
	
	function findUserByUsername(username) {
		for (var i=0; i<users.length; i++) {
			if (users[i].username == username) {
				return user[i];
			}
		}
		return null;
	}
	
	function findUserByCredential(credentials) {
		for (var i=0; i<users.length; i++) {
			if (users[i].username == credentials.username && users[i].password == credentials.password) {
				return user[i];
			}
		}
		return null;
	}
	
	function guid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}
};