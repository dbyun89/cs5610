(function(){
    angular
        .module("WhiteBoardApp")
        .controller("PageListController", PageListController);

    function PageListController(PageService) {
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

        function addPage(pages) {
            PageService
                .addPage(pages)
                .then(function(pages){
                    model.pages = pages;
                });
        }
    }
})();
