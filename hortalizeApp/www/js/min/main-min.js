var hortalizeStatus=angular.module("hortalizeStatus",["ngRoute","ngResource","ngCordova"]);hortalizeStatus.config(["$routeProvider",function(t){t.when("/chicorita",{templateUrl:"home.html",controller:"chicoritaController"}).otherwise({redirectTo:"/chicorita"})}]),hortalizeStatus.controller("chicoritaController",function(t,o,i,e){function n(){i.subscribe("\r").then(function(i){o.info(i),t.infoBt=i},function(t){o.error("sem conexão com a Hortalize")})}document.addEventListener("deviceready",function(){i.available().then(function(t){e.path("#/start"),n()},function(t){o.info("seu bluetooth está ligado?")})},!1),t.tab=1,t.statsInfo=[{id:"temp",unit:"ºC",info:"32",type:"Temperatura"},{id:"level",unit:"%",info:"75",type:"Umidade do Solo"}],t.humityLevel=[{id:"temp",unit:"%",info:"50"}],$(".js-add-crop").on("click",function(){$(this).addClass("adding"),$("body").removeAttr("id"),$("body").attr("id","cropList"),$(this).off("click"),$(this).removeClass("js-add-crop")}),$(".crop-item").on("click",function(){var t=$(".crop").attr("class");$(".adding").addClass(t),$("body").attr("id"," "),$(".adding").removeClass("adding")})});