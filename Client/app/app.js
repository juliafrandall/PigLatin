angular.module('piglatin',[
	'piglatin.translator',
	'piglatin.factory',
	'ngRoute'
])

.config(function($routeProvider){
	.when('/'{
		templateUrl: 'app/words.html',
		controller: 'TranslatorController'
	})
})
.run(function($rootScope){
	
})