(function() {
	angular
		.module("WhiteBoardApp")
		.controller("EquipmentSearchController", EquipmentSearchController);

	function EquipmentSearchController(PageService, UserService) {
		var model = this;
		model.equipmentResults = [];

		function init() {
			PageService
				.getAllPages()
				.then(function(pages){
					model.pages = pages;
				});
		}
		init();

		function getPageById(id) {
			PageService

				.getPageById(id)
				.then(function(page){
					model.equipmentResults = page;
				});
		}
	}
}) ();