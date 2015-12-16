(function() {
	angular
		.module("WhiteBoardApp")
		.config(Config);
  
	function Config($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "home/home.view.html"
			})    
			.when("/register", {
				templateUrl: "views/register/register.view.html",
				controller : "RegisterController as controller"
			})
			.when("/login", {
				templateUrl: "views/login/login.view.html",
				controller : "LoginController as controller"
			})
			.when("/logout", {
				controller: 'NavController'
			})
			.when("/profile", {
				templateUrl: "views/profile/profile.view.html",
				controller : "ProfileController as controller",
				resolve    : {
					loggedin : checkLoggedin
				}
			})
			.when("/admin", {
				templateUrl: "views/admin/admin.view.html",
				controller : "AdminController as controller",
				resolve    : {
					admin    : checkAdmin
				}
			})
			.when("/equipmentView", {
				templateUrl: "views/equipment/equipmentView.list.view.html",
				controller: "PageViewController",
				controllerAs: "model",
			})
			.when("/equipmentSearch", {
				templateUrl: "views/equipment/equipmentSearch.view.html",
				controller: "EquipmentSearchController",
				controllerAs: "model",
			})			
			.when("/equipment", {
				templateUrl: "views/equipment/equipment.list.view.html",
				controller: "PageListController",
				controllerAs: "model",
				resolve    : {
					loggedin : checkLoggedin
				}
			})
			.when("/page/:pageId/details", {
				templateUrl: "views/equipment/equipment.details.view.html",
				controller: "PageDetailsController",
				controllerAs: "model"
			})
/* 			.when("/page/:pageId/details/:index",
			{
				templateUrl: "equipment/equipment.content.details.view.html",
				controller: "PageContentEditorController",
				controllerAs: "model"
			})	 */
		
      .otherwise({redirectTo: "/home"});    
  }
}) ();

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
	var deferred = $q.defer();

	$http.get('/rest/loggedin').success(function(user) {
		if (user !== '0') {
			$rootScope.currentUser = user;
			deferred.resolve();
		}
		else {
			$rootScope.errorMessage = 'You need to log in.';
			deferred.reject();
			$location.url('/login');
		}
	});

	return deferred.promise;
};

var checkAdmin = function($q, $timeout, $http, $location, $rootScope) {
	var deferred = $q.defer();

	$http.get('/rest/admin').success(function(user) {
		if (user !== '0') {
			$rootScope.currentUser = user;
			deferred.resolve();
		}
	});
  
	return deferred.promise;
};
