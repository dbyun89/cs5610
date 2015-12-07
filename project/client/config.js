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
                templateUrl: "page/page.list.view.html",
                controller: "PageListController",
                controllerAs: "model"
            })
            .when("/page/:pageId/details",
            {
                templateUrl: "page/page.details.view.html",
                controller: "PageDetailsController",
                controllerAs: "model"
            })
            .when("/page/:pageId/details/:index",
            {
                templateUrl: "page/page.content.details.view.html",
                controller: "PageContentEditorController",
                controllerAs: "model"
            })
			
			
			
            .otherwise({
                redirectTo: "/home"
            });
    }
})();