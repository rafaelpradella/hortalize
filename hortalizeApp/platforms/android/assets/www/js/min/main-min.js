var hortalizeStatus=angular.module("hortalizeStatus",["ngRoute","ngResource"]);hortalizeStatus.config(["$routeProvider",function(t){t.when("/",{templateUrl:"setup.html",controller:"setupController"}).when("/chicorita",{templateUrl:"home.html",controller:"chicoritaController"}).otherwise({redirectTo:"/chicorita"})}]),hortalizeStatus.controller("chicoritaController",function(t){$("body").attr("id",""),t.receivedBT="75//76.00//19.00//90/n",t.splitBT=t.receivedBT.split("//"),t.waterLevel=Math.round(t.splitBT[0]),t.airHumidity=Math.round(t.splitBT[1]),t.temperature=Math.round(t.splitBT[2]),t.soilHumidity=Math.round(t.splitBT[3].replace("/n","")),t.tab=1,t.statsInfo=[{id:"temp",unit:"ºC",info:t.temperature,type:"Temperatura"},{id:"level",unit:"%",info:t.waterLevel,type:"Umidade do Solo"}],t.humityLevel=[{id:"temp",unit:"%",info:t.soilHumidity}],$(".js-add-crop").on("click",function(){$(this).addClass("adding"),$("body").removeAttr("id"),$("body").attr("id","cropList"),$(this).off("click"),$(this).removeClass("js-add-crop")}),$(".crop-item").on("click",function(){var t=$(".crop").attr("class");$(".adding").addClass(t+" js-crop-info crop-info"),$("body").attr("id"," "),$(".crops-container::before").hide(),$(".adding").removeClass("adding")})}),hortalizeStatus.controller("setupController",function(t){$("body").attr("id","setup")});