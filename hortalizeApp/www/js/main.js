// Angular Module

var hortalizeStatus = angular.module('hortalizeStatus', ['ngRoute','ngResource']);

hortalizeStatus.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'setup.html', controller: 'setupController'}).
		when('/chicorita', {templateUrl: 'home.html', controller: 'chicoritaController'}).
		otherwise({redirectTo: '/chicorita'});
}]);

// Angular Controllers

hortalizeStatus.controller('chicoritaController', function($scope){
	$('body').attr('id', '');
	$scope.fullTank = 35;
	$scope.receivedBT = "75//76.00//19.00//90/n";
	$scope.splitBT = $scope.receivedBT.split("//");
	$scope.waterLevel = Math.round($scope.splitBT[0]);
	$scope.airHumidity = Math.round($scope.splitBT[1]);
	$scope.temperature = Math.round($scope.splitBT[2]);
	$scope.soilHumidity = Math.round($scope.splitBT[3].replace("/n", ""));
	$scope.waterDays = Math.round(($scope.fullTank * $scope.waterLevel)/100);

	$scope.tab = 1;
	$scope.statsInfo = [
		{ id: 'temp', unit: 'ºC', info: $scope.temperature, type: 'Temperatura'},
		{ id: 'level', unit: '%', info: $scope.soilHumidity, type: 'Umidade do Solo'}
	];

	$scope.humityLevel = [
		{ id: 'temp', unit: '%', info: $scope.waterLevel, daysLeft: $scope.waterDays},
	];

	$scope.cropInfo = [
		{ id: 'alface', nome: "Alface Crespa", cont: "Planta de clima ameno/quente (10ºC e 24ºC), tem como pragas as lesmas e os caracois. Seu consumo ajuda no controle de inflamações"},
		{ id: 'cebolinha', nome: "Cebolinha", cont: "Planta de clima ameno, muito sensível à ação de ácaros e pulgões. Seu consumo previne doenças e retarda o envelhecimento celular."},
		{ id: 'hortela', nome: "Hortelã", cont: "Planta de clima ameno, ajuda no tratamento de resfriados, dores de cabeça, má digestão e vômitos."},
		{ id: 'manjeiricao', nome: "Manjeiricão", cont: "Planta de clima ameno, auxilia em dores e problemas digestivos."},
		{ id: 'morango', nome: "Morango", cont: "Planta de clima Ameno/Quente (20°C e 24°C), tem como pragas e doenças as formigas, ácaros e lagartas. Rica em cobre, iodo, potássio, magnésio e vitaminas C, K, B2, B5, B6 e B9. Ajuda a reduzir a pressão sanguínea."},
		{ id: 'tomate-cereja', nome: "Tomate Cereja", cont: "Planta de clima Ameno/Quente (20°C e 24°C), tem como pragas e doenças as formigas, ácaros e lagartas. Rica em cobre, iodo, potássio, magnésio e vitaminas C, K, B2, B5, B6 e B9. Ajuda a reduzir a pressão sanguínea."},

	];

	$('.js-add-crop').on('click', function (){
		$(this).addClass('adding');
		$('body').removeAttr('id');
		$('body').attr('id', 'cropList');
		$(this).off('click');
		$(this).removeClass('js-add-crop');
	});

	$('.crop-item').on('click', function(){
		var selectedCrop = $(this).children().attr('class');
		$('.adding').addClass(selectedCrop + " js-crop-info crop-info");
		$('body').attr('id', 'addedCrop');
		$('.adding').removeClass('adding');
	});

	$('.crop-info').on('click', function(){
		var cropId = $(this).attr('class').split(' ')[1];
		console.log(cropId);
		$('.crop-info-block#'+cropId).show();
		$('.crop-info-block#'+cropId).siblings().hide();
	});

	$scope.isActive = false;
  	$scope.activeButton = function() {
    	$scope.isActive = !$scope.isActive;
  	};  

});

hortalizeStatus.controller('setupController', function($scope){
	$('body').attr('id', 'setup');
});
