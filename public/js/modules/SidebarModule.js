var ngApp = angular.module("ngApp", []);

ngApp.directive("sidebarModule", function () {
    return {
        restrict: "E",
        replace: true,
        scope: function(){
        },
        template: "<div class='sidebar-module'>" +
                    "<h4>{{title}}</h4>" +
                    "<ol class='list-unstyled'>" +
                      "<li ng-repeat='item in items'><a href='{{item.url}}'>{{item.value}}</a></li>" +
                    "</ol>" +
                  "</div>"
    }
});

ngApp.controller("SidebarHelloController", function ($scope) {
    $scope.title = "Hello";
    $scope.items = [
        { value: "One" },
        { value: "Two" }
    ];
});

ngApp.controller("SidebarElsewhereController", function ($scope) {
    $scope.title = "Elsewhere";
    $scope.items = [
        { value: "LinkedIn" },
        { value: "Twitter" }
    ];
});
