(function() {
	angular
		.module("WhiteBoardApp")
		.controller("PageDetailsController", PageDetailsController);

	function PageDetailsController(UserService, PageService, $routeParams) {
		var pageId = $routeParams["pageId"];

		var model = this;
		model.addContent = addContent;
		model.removeContent = removeContent;

		function init() {
			PageService
				.getPageById(pageId)
				.then(function(page){
					model.page = page;
				});
		}
		init();

		function addContent(contentType) {
			PageService
				.addContent(model.page._id, contentType)
				.then(function(page){
					model.page = page;
				});
		}

		function removeContent(content) {
			var contentIndex = model.page.content.indexOf(content);
			PageService
				.removeContent(model.page._id, contentIndex)
				.then(function(page){
					model.page = page;
				});
		}
	}
}) ();