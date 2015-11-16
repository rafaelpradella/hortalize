

// Angular Module

var hortalizeStatus = angular.module('hortalizeStatus', ['ngRoute','ngResource']);

hortalizeStatus.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/chicorita', {templateUrl: 'home.html', controller: 'chicoritaController'}).
                when('/coco', {templateUrl: 'home.html', controller: 'cocoController'}).
                otherwise({redirectTo: '/chicorita'});
}]);

hortalizeStatus.factory('bluetooth', function() {
    var bluetoothSerial = cordova.require('bluetoothSerial');
    return {
		btStatus: function() {        
		   	bluetoothSerial.available(function(success, failure){
				if(success){
					alert("Bluetooth workou");
				}
				else{
					alert("Bluetooth falhou");
				}
			});
        }
    };
});

// Angular Controllers

hortalizeStatus.controller('chicoritaController', function($scope, $resource, bluetooth){
	$scope.tab = 1;
	
	$scope.statsInfo = [
		{ id: 'temp', unit: 'ºC', info: '32', type: 'Temperatura'},
		{ id: 'level', unit: '%', info: '75', type: 'Umidade do Solo'},	
	];

	$scope.humityLevel = [
		{ id: 'temp', unit: '%', info: '50'},
	];
});