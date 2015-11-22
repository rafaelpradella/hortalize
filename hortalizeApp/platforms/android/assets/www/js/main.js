// Angular Module

var hortalizeStatus = angular.module('hortalizeStatus', ['ngRoute','ngResource','ngCordova']);

hortalizeStatus.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/chicorita', {templateUrl: 'home.html', controller: 'chicoritaController'}).
		otherwise({redirectTo: '/chicorita'});
}]);

// Angular Controllers

hortalizeStatus.controller('chicoritaController', function($scope, $cordovaBluetoothSerial, $location){
	document.addEventListener("deviceready", function () {
		$cordovaBluetoothSerial.available().then(
			function (result) {
				$location.path('#/start');
				getInfo();
			},
			function (err) {
				alert("seu bluetooth está ligado?");
			}
		);
	}, false);

	function getInfo(){
		$cordovaBluetoothSerial.subscribe('\r').then(
			function (result) {
				alert(result);
				$scope.infoBt = result;
			},
			function (err) {
				alert("sem conexão com a Hortalize");
			}
		);
	}

	$scope.tab = 1;
	$scope.statsInfo = [
		{ id: 'temp', unit: 'ºC', info: '32', type: 'Temperatura'},
		{ id: 'level', unit: '%', info: '75', type: 'Umidade do Solo'}, 
	];
	$scope.humityLevel = [
		{ id: 'temp', unit: '%', info: '50'},
	];
	$scope.crops = [
		{ name: "Alface", slug: "alface"},
		{ name: "Manjericão", slug: "manjeiricao"},
		{ name: "Morango", slug: "morango"},
		{ name: "Cebolinha", slug: "cebolinha"},
		{ name: "Tomate Cereja", slug: "tomate-cereja"},
		{ name: "Hortelã", slug: "hortela"},
	];
});