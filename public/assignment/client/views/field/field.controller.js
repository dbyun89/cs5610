(function () {
	"use strict";
	angular
		.module("FormBuilderApp")
		.controller("FieldController", FieldController);

	function FieldController($routeParams, FieldService) {
		var model = this;

		model.addField = addField;
		model.deleteField = deleteField;

		var userId = $routeParams.userId;
		var formId = $routeParams.formId;
		
		function addField(fieldType) {
			FieldService.createFieldForForm(formId, field);
		}
		
		function deleteField(fieldId) {
			FieldService.deleteFieldFromForm(formId, fieldId);
		}    
	}
}) ();