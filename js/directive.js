var app = angular.module('myApp');
app.directive('autofocus', [function () {
	return {
		restrict: 'ECMA',
		link: function (scope, element, attr) {
			element.bind('dblclick',function(){
				var input = angular.element(this).find('input')[1];
				input.focus();
			});
		}
	};
}])