(function(){
    angular
        .module("WhiteBoardApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "home.html"
            })
            .when("/register", {
                templateUrl: "register.html"
            })
            .when("/courses", {
                templateUrl: "courses.html",
                controller: "CourseController"
            })
            .when("/courseEdit/:count", {
                templateUrl: "courseEdit.html",
                controller: "CourseEditController"
            })
            .when("/login", {
                templateUrl: "login.html"
            })
			.when("/profile", {
				templateUrl: "profile.html"
			})
			.when("/admin", {
				templateUrl: "admin.html",
				controller: "AdminController"
			})
			.when("/form", {
				templateUrl: "form.html"
			})
			
			
			.when("/page", {
                templateUrl: "views/page/page.list.view.html",
                controller: "PageListController",
                controllerAs: "model"
            })
            .when("/page/:pageId/details",
            {
                templateUrl: "views/page/page.details.view.html",
                controller: "PageDetailsController",
                controllerAs: "model"
            })
            .when("/page/:pageId/details/:index",
            {
                templateUrl: "views/page/page.content.details.view.html",
                controller: "PageContentEditorController",
                controllerAs: "model"
            })
			
			
			.when("/equipment", {
                templateUrl: "views/equipment/equipment.list.view.html",
                controller: "EquipmentListController",
                controllerAs: "model"
            })
            .when("/equipment/:equipmentId/details",
            {
                templateUrl: "views/equipment/equipment.details.view.html",
                controller: "EquipmentDetailsController",
                controllerAs: "model"
            })
			/* get rid of this unless I want admin to be able to change these values */
            .when("/equipment/:equipmentId/details/:index",
            {
                templateUrl: "views/equipment/equipment.content.details.view.html",
                controller: "EquipmentContentEditorController",
                controllerAs: "model"
            })
			
			
            .otherwise({
                redirectTo: "/home"
            });
    }
})();