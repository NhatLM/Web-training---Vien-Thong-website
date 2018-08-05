// 'use strict';
var myApp = angular.module("myApp", [
    'ngRoute'
]);

angular.module('myApp')
    .controller(
        'MyRootController',
        function ($scope, $location, $rootScope, $log, AuthSV) {


        }
    );





myApp.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "./component/dashboard/dashboard.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});