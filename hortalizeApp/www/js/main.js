// Angular Module

var hortalizeStatus = angular.module('hortalizeStatus', ['ngRoute','ngResource','ngCordova']);

hortalizeStatus.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/chicorita', {templateUrl: 'home.html', controller: 'chicoritaController'}).
		otherwise({redirectTo: '/chicorita'});
}]);

// Angular Controllers

hortalizeStatus.controller('chicoritaController', function($scope, $log, $cordovaBluetoothSerial, $location){
	/*document.addEventListener('deviceready', function () {
		$cordovaBluetoothSerial.isConnected(
		    function() {
		        getInfo();
		    },
		    function() {
		        console.log("Bluetooth is *not* connected");
		    }
		);
	}, false);

	function getInfo(){
		$cordovaBluetoothSerial.subscribe('\r').then(
			function (result) {
				$log.info(result);
				$scope.infoBt = result;
			},
			function (err) {
				$log.error('sem conexão com a Hortalize');
			}
		);
	}*/

	$scope.receivedBT = "75//76.00//19.00//90/n";
	$scope.splitBT = $scope.receivedBT.split("//");
	$scope.waterLevel = Math.round($scope.splitBT[0]);
	$scope.airHumidity = Math.round($scope.splitBT[1]);
	$scope.temperature = Math.round($scope.splitBT[2]);
	$scope.soilHumidity = Math.round($scope.splitBT[3].replace("/n", ""));
	console.log($scope.soilHumidity);

	$scope.tab = 1;
	$scope.statsInfo = [
		{ id: 'temp', unit: 'ºC', info: $scope.temperature, type: 'Temperatura'},
		{ id: 'level', unit: '%', info: $scope.waterLevel, type: 'Umidade do Solo'},
	];
	$scope.humityLevel = [
		{ id: 'temp', unit: '%', info: $scope.soilHumidity},
	];

	$('.js-add-crop').on('click', function (){
		$(this).addClass('adding');
		$('body').removeAttr('id');
		$('body').attr('id', 'cropList');
		$(this).off('click');
		$(this).removeClass('js-add-crop');
	});

	$('.crop-item').on('click', function(){
		var selectedCrop = $('.crop').attr('class');
		$('.adding').addClass(selectedCrop + " js-crop-info crop-info");
		$('body').attr('id', ' ');
		$('.adding').removeClass('adding');
	});
});
