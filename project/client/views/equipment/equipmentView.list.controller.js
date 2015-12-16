(function() {
	angular
		.module("WhiteBoardApp")
		.controller("PageViewController", PageViewController);

	function PageViewController(PageService, UserService) {
		var model = this;

		function init() {
			PageService
				.getAllPages()
				.then(function(pages){
					model.pages = pages;
				});
		}
		init();
	}
}) ();