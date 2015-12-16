(function() {
	angular
		.module("WhiteBoardApp")
		.controller("PageViewController", PageViewController);

	function PageViewController(PageService, UserService) {
		var model = this;
		
		
		model.addPage = addPage;

		function init() {
			PageService
				.getAllPages()
				.then(function(pages){
					model.pages = pages;
				});
		}
		init();

		function addPage(page) {
			PageService

				.addPage(page)
				.then(function(pages){
					model.pages = pages;
				});
		}
	}
}) ();