(function(){
    angular
        .module("WhiteBoardApp")
        .controller("PageDetailsController", PageDetailsController);

    function PageDetailsController(PageService, $routeParams) {
        var pageId = $routeParams["pageId"];

        var model = this;
        model.addContent = addContent;
        model.removeContent = removeContent;

        function init() {
            PageService
                .getPageById(pageId)
                .then(function(pages){
                    model.pages = pages;
                });
        }
        init();

        function addContent(contentType) {
            PageService
                .addContent(model.pages._id, contentType)
                .then(function(pages){
                    model.pages = pages;
                });
        }

        function removeContent(content) {
            var contentIndex = model.pages.content.indexOf(content);
            PageService
                .removeContent(model.pages._id, contentIndex)
                .then(function(pages){
                    model.pages = pages;
                });
        }
    }
})();