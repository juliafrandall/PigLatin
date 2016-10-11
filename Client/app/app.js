angular.module('piglatin',[
	'piglatin.translator',
	'piglatin.factory',
	'ngRoute'
])

.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/words.html',
		controller: 'TranslatorController'
	})
})
