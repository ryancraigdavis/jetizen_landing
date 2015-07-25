'use strict';

var app = angular.module('landingApp');
	app.service('dataService', function service($q,$http) {
		this.getProcedure = function(procedure){
			console.log(procedure);
			var deferred = $q.defer();
			$http({
				method: 'GET', url: '/procedure:name?q='+procedure
			}).success(function(data) {
			    deferred.resolve(data);
			}).error(function(err){
			    deferred.reject(err);
			});
			return deferred.promise;
		};

	});