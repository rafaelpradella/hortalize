var hortalizeStatus=angular.module("hortalizeStatus",["ngRoute","ngResource","ngCordova"]);hortalizeStatus.config(["$routeProvider",function(e){e.when("/chicorita",{templateUrl:"home.html",controller:"chicoritaController"}).otherwise({redirectTo:"/chicorita"})}]),hortalizeStatus.controller("chicoritaController",function(e,t,o){function a(){t.subscribe("\r").then(function(t){alert(t),e.infoBt=t},function(e){alert("sem conexão com a Hortalize")})}document.addEventListener("deviceready",function(){t.available().then(function(e){o.path("#/start"),a()},function(e){alert("seu bluetooth está ligado?")})},!1),e.tab=1,e.statsInfo=[{id:"temp",unit:"ºC",info:"32",type:"Temperatura"},{id:"level",unit:"%",info:"75",type:"Umidade do Solo"}],e.humityLevel=[{id:"temp",unit:"%",info:"50"}],e.crops=[{name:"Alface",slug:"alface"},{name:"Manjericão",slug:"manjeiricao"},{name:"Morango",slug:"morango"},{name:"Cebolinha",slug:"cebolinha"},{name:"Tomate Cereja",slug:"tomate-cereja"},{name:"Hortelã",slug:"hortela"}]});