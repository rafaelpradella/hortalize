// Angular Module

var hortalizeStatus = angular.module('hortalizeStatus', ['ngRoute','ngResource','ngCordova']);

hortalizeStatus.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/chicorita', {templateUrl: 'home.html', controller: 'chicoritaController'}).
                otherwise({redirectTo: '/chicorita'});
}]);

document.addEventListener("deviceready", function () {
}, false);

// Angular Controllers

hortalizeStatus.controller('chicoritaController', function($scope){
	$scope.tab = 1;
	
	$scope.statsInfo = [
		{ id: 'temp', unit: 'ºC', info: '32', type: 'Temperatura'},
		{ id: 'level', unit: '%', info: '75', type: 'Umidade do Solo'},	
	];

	$scope.humityLevel = [
		{ id: 'temp', unit: '%', info: '50'},
	];
});