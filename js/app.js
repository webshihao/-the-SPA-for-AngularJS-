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

		// 为什么不能去掉第二个路由~~~ 直接走redirectTo
	}])
})(window);
