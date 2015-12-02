var app = angular.module("HelloWorldApp", []);

app.controller("HelloWorldController", HelloWorldController);

function HelloWorldController($scope) {
    $scope.helloA = "Hello World from AngularJS!";
}
