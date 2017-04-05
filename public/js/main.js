angular.module('nind-form',['ngRoute','ngResource']).config(function($routeProvider) {

	$routeProvider.when('/',{
		templateUrl: 'partials/df1.html',
		controller: 'TelasController'
	})
});
