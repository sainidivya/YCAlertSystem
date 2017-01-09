'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute', 'ngMaterial'
]);

myApp.config(['$locationProvider', '$routeProvider', 
    function ($locationProvider, $routeProvider) {
        $routeProvider.
            when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl'
            }).
            otherwise({
                redirectTo: '/view1'
            });
        $locationProvider.hashPrefix('!');

}]);

myApp.controller('MainController', ['$scope', '$location', '$resource', '$http', 
    function ($scope, $location, $resource, $http) {

        $scope.main = {};

}]);