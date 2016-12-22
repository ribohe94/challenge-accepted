/**
 * Created by ribohe94 on 21/12/16.
 */
var app = angular.module("app", ["ngRoute"]);

app.controller('MainController', function ($scope) {
    $scope.text = "Hello World!!!";
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/temp", {
            templateUrl: 'temp.html',
            controller: 'MainController'
        })
        .when("/lux", {
            templateUrl: 'lux.html',
            controller: 'MainController'
        })
        .when("/touch", {
            templateUrl: 'touch.html',
            controller: 'MainController'
        });
});