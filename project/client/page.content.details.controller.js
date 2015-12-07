(function(){
    angular
        .module("WhiteBoardApp")
        .controller("PageContentEditorController", PageContentEditorController);

    function PageContentEditorController(PageService, $routeParams) {
        var pageId = $routeParams["pageId"];
        var contentIndex = $routeParams["index"];

        var model = this;

        function init() {
            PageService
                .getPageById(pageId)
                .then(function(pages){
                    model.pages = pages;
                    model.content = model.pages.content[contentIndex];
                });
        }
        init();
    }
})();