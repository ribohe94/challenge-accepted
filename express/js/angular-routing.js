/**
 * Created by ribohe94 on 21/12/16.
 */
var app = angular.module("app", ["ngRoute"]);

app.controller('MainController', function ($scope) {
    $.get('http://localhost:3001/data', function (data) {
        $scope.temp = data;
    });
});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/temp", {
            templateUrl: '/views/temp.html',
            controller: 'MainController'
        })
        .when("/lux", {
            templateUrl: '/views/lux.html',
            controller: 'MainController'
        })
        .when("/touch", {
            templateUrl: '/views/touch.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

