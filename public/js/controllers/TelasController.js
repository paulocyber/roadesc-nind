angular.module('nind-form').controller('TelasController',
	function($scope){

	$scope.template = [{
        name: 'login.html',
        url: 'login.html'}]

    $scope.myFunction = function() {
        $scope.color = 'red';
    }
});