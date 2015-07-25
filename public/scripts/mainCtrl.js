'use strict';

var app = angular.module('landingApp');
	app.controller('mainCtrl', function ($scope,dataService) {

		// alert(window.location.search);
		// alert(window.location.href);
		var procedure = "";
			procedure = "dentalImp";

			dataService.getProcedure(procedure).then(function(data){
				console.log(data);
				$scope.procedureName = data[0].procedureGen;
				$scope.procedureDesc = data[0].descriptor;
				$scope.procedureSurg = data[0].surgeon;
				$scope.procedureCntr = data[0].center;
				$scope.procedure = data[0].procedure;
				$scope.webTitle = data[0].webTitle;
				$scope.webAddress = data[0].webAddress;

				$scope.usPrice = data[1].price;
				$scope.usTime = data[1].time;

				$scope.caPrice = data[2].price;
				$scope.caTime = data[2].time;

				$scope.saPrice = data[3].price;
				$scope.saTime = data[3].time;

				$scope.eePrice = data[4].price;
				$scope.eeTime = data[4].time;

				$scope.seaPrice = data[5].price;
				$scope.seaTime = data[5].time;

				$scope.eaPrice = data[6].price;
				$scope.eaTime = data[6].time;

				$scope.wvPrice = data[7].price;
				$scope.wvTime = data[7].time;

			});
	});