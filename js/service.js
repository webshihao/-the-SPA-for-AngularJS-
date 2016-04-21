(function(angular){
	var app = angular.module('myApp');
	app.service('myService', ['$window',function($window) {
		// 先拿到localStorage对象，然后通过key获取value，将取得的JSON字符串转换为对象，目的是为了后面的ng-repeat遍历
		var storage = $window.localStorage;
		var str = storage.getItem('todos');
		var tasks = JSON.parse(str || '[]');
		this.save = function(){
			storage.setItem('todos',JSON.stringify(tasks));
		}
		// 功能1：显示任务数据列表
		this.get = function(){
			return tasks;
		}
		// 功能2：添加任务 (暴露数据模型跟行为模型)
		this.add = function(newTasks){
			var newId = 1;
			if(tasks.length>0){
				newId = tasks[tasks.length - 1].id+1;
			}
			tasks.push({
				id: newId,
				name: newTasks,
				completed: false
			})
			this.save();
		}
		// 功能3：删除任务
		this.remove = function(id){
			for(var i=0;i<tasks.length;i++){
				var item = tasks[i];
				if(item.id == id){
					tasks.splice(i,1);
				}
			}
			this.save();
		}
		// 功能4： 编辑任务
		// 功能6 批量切换任务状态
		this.toggleAll = function(toggle){
			for(var i=0;i<tasks.length;i++){
				var item = tasks[i];
				item.completed = toggle;
			}
			this.save();
		}
		// 功能7:显示未完成的任务数量
		this.unCompleted = function(){
			var itemleft = 0;
			for(var i=0;i<tasks.length;i++){
				var item = tasks[i];
				if(!item.completed){
					itemleft++;
				}
			}
			// 功能5.切换任务是否完成的状态
			this.save();
			return itemleft;
		}
		// 8:清除所有已完成任务(1注册点击事件  2找出未完成的数据  3更新数据)
		this.clearCompleted = function(){
			var arr = [];
			tasks.forEach(function(item){
				if(!item.completed){
					arr.push(item);
				}
			})
			tasks = arr;
			this.save()
		}
		// 只要有一个已完成 就显示出来
		this.isShow = function(){
			for(var i=0;i<tasks.length;i++){
				var item = tasks[i];
				if(item.completed){
					return true;
				}
			}
			return false;
		}
	}])
})(angular)