

// Angular Module

var hortalizeStatus = angular.module('hortalizeStatus', ['ngRoute','ngResource']);

hortalizeStatus.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/chicorita', {templateUrl: 'home.html', controller: 'chicoritaController'}).
                when('/coco', {templateUrl: 'home.html', controller: 'cocoController'}).
                otherwise({redirectTo: '/chicorita'});
}]);

// Angular Controllers

hortalizeStatus.controller('chicoritaController', function($scope, $resource){
	$scope.tab = 1;
	
	$scope.statsInfo = [
		{ id: 'temp', unit: 'ºC', info: '32', type: 'Temperatura'},
		{ id: 'level', unit: '%', info: '75', type: 'Umidade do Solo'},	
	];

	$scope.humityLevel = [
		{ id: 'temp', unit: '%', info: '50'},
	];
});

hortalizeStatus.controller('cocoController', function($scope, $resource){
	$scope.tab = 2;
	
	$scope.statsInfo = [
		{ id: 'temp', unit: 'ºC', info: '22', type: 'Temperatura'},
		{ id: 'level', unit: '%', info: '80', type: 'Umidade do Solo'},	
	];

	$scope.humityLevel = [
		{ id: 'temp', unit: '%', info: '20'},
	];

});









