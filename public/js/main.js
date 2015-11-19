angular.module('app', ['chart.js' , 'ui.router'])
.controller('myController', function($scope){
	$scope.data = [20,30,40];
	$scope.labels = ['y', 'n', '?'];
})
.config(function($stateProvider) {
	$stateProvider.state('audience', {
		url:'/audience',
		templateUrl:'audience.jade'
	});
	$stateProvider.state('debug', {
		url:'/debug',
		templateUrl:'debug.jade'
	});
	$stateProvider.state('board', {
		url:'/board',
		templateUrl:'board.jade'
	});
	
})
