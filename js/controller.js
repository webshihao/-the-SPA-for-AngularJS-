var app = angular.module('myApp');
app.controller('myCtrl', ['$scope','$location','myService', function ($scope,$location,myService) {
	$scope.items = myService.get();
	$scope.newTasks = '';
	
	$scope.add = function(){
		console.log($scope.newTasks);
		if(!$scope.newTasks){return;}
		myService.add($scope.newTasks);
		$scope.newTasks = '';
	}
	
	$scope.del = myService.remove;
	$scope.isEditingId = -1;
	// 只改变view部分,不涉及业务逻辑 所以不需要放到service
	$scope.edit = function(id){
		$scope.isEditingId = id;
	}
	$scope.save = function(){
		$scope.isEditingId = -1;
		myService.save();
	}
	
	var toggle = true;
	$scope.toggleAll = function(){
		myService.toggleAll(toggle);
		toggle = !toggle;
	}
	$scope.$watch('items',function(now,old){
		$scope.itemleft = myService.unCompleted();
	},true);
	$scope.clearCompleted = function(){
		myService.clearCompleted();
		$scope.items = myService.get();
	};
	
	$scope.isShow = myService.isShow;

}])
app.controller('RouteCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
	//功能9：切换不同状态任务的显示
	$scope.isComplete = {};
	console.log($routeParams);
	switch($routeParams.status) {
		case 'active':
			$scope.isComplete = {
				completed: false
			}
			break;
		case 'completed':
			$scope.isComplete = {
				completed: true
			};
			break;
		default:
			$scope.isComplete={
				completed: undefined
			};
            break;
	}
}])