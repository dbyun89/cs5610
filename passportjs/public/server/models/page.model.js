var q = require("q");

module.exports = function(mongoose, db) {
    var PageSchema = mongoose.Schema({
        "label": String,
        "created": {type: Date, default: Date.now},
		"createdBy": {type: String, default: "David Byun"},
		"price": String,
		"category": String,
		"company": String
    }, {collection: "pages"});

    var PageModel = mongoose.model("PageModel", PageSchema);

    var api = {
        addPage: addPage,
        addContent: addContent,
        getAllPages: getAllPages,
        getPageById: getPageById
    };
    return api;

    function addContent(pageId, contentType) {
        var deferred = q.defer();

        PageModel.findById(pageId, function(err, page){
            var content = {
                contentType: contentType,
                list: {listType: 'ORDERED', items: ["Item 1", "Item 2", "Item 3"]}
            };
            page.content.push(content);
            page.save(function(err, doc){
                deferred.resolve(doc);
            });
        });

        return deferred.promise;
    }

    function getPageById(id) {
        var deferred = q.defer();

        PageModel.findById(id, function(err, page){
            deferred.resolve(page);
        });

        return deferred.promise;
    }

    function getAllPages() {
        var deferred = q.defer();

        PageModel.find(function(err, pages){
            deferred.resolve(pages);
        });

        return deferred.promise;
    }

    function addPage(page) {
        var deferred = q.defer();

        PageModel.create(page, function(err, doc){
            PageModel.find(function(err, pages){
                deferred.resolve(pages);
            });
        });

        return deferred.promise;
    }
};