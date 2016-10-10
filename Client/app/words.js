angular.module('piglatin.translator', [])



.controller('TranslatorController', function($scope, Words){
	$scope.translateWord = function() {
		Words.translate($scope.word)
		.then(function(){

		})
		.catch(function(error) {
			console.error(err);
		})
	}
});