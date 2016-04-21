(function (window) {
	'use strict';
	var app = angular.module('myApp',['ngRoute']);
	app.config(['$routeProvider',function ($routeProvider) {
		$routeProvider
		.when('/:status', {
			templateUrl: 'route.html',
			controller: 'RouteCtrl'
		})
		.when('/', {
			templateUrl: 'route.html',
			controller: 'RouteCtrl'
		})
		.otherwise({ redirectTo: '/' })

		// Ϊʲô����ȥ���ڶ���·��~~~ ֱ����redirectTo
	}])
})(window);
