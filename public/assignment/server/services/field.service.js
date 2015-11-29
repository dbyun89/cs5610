module.exports = function(app, model){
	"use strict";
    app.get("/api/assignment/form/:formId/field", getFieldByFormId);
    app.get("/api/assignment/form/:formId/field/:fieldId", getOneFieldByFormAndFieldId);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldByFormAndFieldId);
    app.post("/api/assignment/form/:formId/field", createField);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateField);

    function getFieldByFormId(req, res) {
        model
            .findFieldByFormId(req.params["formId"])
            .then(function(fields) {
                res.json(fields);
            });
    }
    function getOneFieldByFormAndFieldId(req, res) {
        model
            .findOneFieldByFormAndFieldId(req.params["formId"], req.params["fieldId"])
            .then(function(field) {
                res.json(field);
            });
    }
    function deleteFieldByFormAndFieldId(req, res) {
        model
            .deleteFieldByFormAndFieldId(req.params["formId"], req.params["fieldId"])
            .then(function(result) {
                res.json(result);
            });
    }
    function createField(req, res) {
        model
            .createField(req.params["formId"], req.body)
            .then(function(form) {
                res.json(form);
            });
    }
    function updateField(req, res) {
        var fieldId = req.params["fieldId"];
        var formId = req.params["formId"];
        model
            .updateField(formId, fieldId, req.body)
            .then(function(form) {
                res.json(form);
            });
    }
};