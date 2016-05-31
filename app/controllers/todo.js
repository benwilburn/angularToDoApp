app.controller("angularToDoCtrl", function($scope, $http) {
	$scope.title = "Angular ToDo!";
	$scope.potato = "";
	$scope.variableName = '';
	$scope.filter2 = "";

	$scope.newTodo = "";
	$scope.taskType = "home";

	$scope.selectedTodo = "nothing";

  // $scope.tasks = [
  //   { name: "Make the bed", type: "home"},
  //   { name: "Eat breakfast", type: "home"},
  //   { name: "Check the network", type: "work"},
  //   { name: "Start up Slack", type: "work"},
  //   { name: "Feed the cats", type: "home"}
  // ];


// LONG HAND DATA REQUEST
  // $http({
  // 	method: 'GET',
  // 	url: 'data/tasks.json'
  // }).then((response) => {
  // 	$scope.tasks = response.tasks;
  // });


// SHORT HAND DATA REQUEST
  $http.get('data/tasks.json').then((response) => {
  	$scope.tasks = response.data.tasks;
  });

  // $http.post('/data/tasks.json', {data: "what I'm sending"})
  //   .then((response) => {
  //     console.log("response", response);
  //     $scope.tasks = response.data.tasks;
  // })


  $scope.addTodo = function () {
  	$scope.tasks.push({
  		name: $scope.newTodo, type: $scope.taskType
  	});
  	$scope.newTodo = "";
  };

  $scope.removeTodo = (task) => {
  	const taskIndex = $scope.tasks.indexOf(task);
  	if(taskIndex >= 0){
  		$scope.tasks.splice(taskIndex, 1);
  	}
  };

});
