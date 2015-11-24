"use strict";

module.exports = function(app) {
	var forms = require('./form.mock.json');
	
	var api = {	
			createForm : createForm
			findAllForms : findAllForms,
			findFormsById : findFormsById,
			updateForm : updateForm,
			deleteForm : deleteForm,
			findFormByTitle : findFormByTitle,
			findFormsByUserId : findFormsByUserId,
	};
	
	return api;
		
	function createForm(form) {
		form.id = guid();
		forms.push(form);
		return forms;
	}
	
	function findAllForms() {
		return forms;
	}
	
	function findFormsById(formId) {
		for (var i=0; i<forms.length; i++) {
			if (forms[i].id == formId) {
				return forms[i];
			}
		}
		return null;
	}

	function updateForm(id, newForm) {
		for (var i=0; i<forms.length; i++) {
			if (forms[i].id == id) {
				forms[i] = newForm;
				break;
			}
		}
		return forms;
	}
	
	function deleteForm(id) {
		for (var i=0; i<forms.length; i++) {
			if (forms[i].id == id) {
				forms.splice(i, 1);
				break;
			}
		}
		return forms;
	}
	
	function findFormByTitle(title) {
		for (var i=0; i<forms.length; i++) {
			if (forms[i].title == title) {
				return forms[i];
			}
		}
		return null;
	}
	
	function findFormsByUserId(userId) {
		var userForms = [];
		for (var i=0; i<forms.length; i++) {
			if (forms[i].userId == userId) {
				userForms.push(forms[i]);
			}
		}
		return userForms;
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