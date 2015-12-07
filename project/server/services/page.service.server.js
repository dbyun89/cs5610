module.exports = function(app, model){
	console.log("In server/services/page.service.server.js");
    app.post("/rest/pages", addPage);
    app.get("/rest/pages", getAllPages);
    app.get("/rest/pages/:id", getPageById);
    app.post("/rest/pages/:pageId/content/:contentType", addContent);

    function addContent(req, res) {
        var pageId = req.params["pageId"];
        var contentType = req.params["contentType"];
        model
            .addContent(pageId, contentType)
            .then(function(pages){
                res.json(pages);
            });
    }

    function getPageById(req, res) {
        model
            .getPageById(req.params.id)
            .then(function(pages){
                res.json(pages);
            });
    }

    function getAllPages(req, res) {
        model
            .getAllPages()
            .then(function(pages){
                res.json(pages);
            });
    }

    function addPage(req, res) {
        var pages = req.body;
        model
            .addPage(pages)
            .then(function(pages){
                res.json(pages);
            });
    }
};