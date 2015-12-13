(function(){
    angular
        .module("WhiteBoardApp")
        .controller("PageListController", PageListController);

    function PageListController(PageService, UserService) {
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

        function addPage(page) {
            PageService

                .addPage(page)
                .then(function(pages){
                    model.pages = pages;
                });
        }
    }
})();