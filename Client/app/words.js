angular.module('piglatin.translator', [])

.controller('TranslatorController', function($scope, Words){
	// $scope.OriginalWords = [];
	// $scope.word;
	// $scope.newWord;
	// $scope.TranslatedWords = [];
	// $scope.getWord = function(word) {
	// 	$scope.OriginalWords.push(word);
	// }


	$scope.translateWord = function(){
		$scope.newWord = Words.translate($scope.word);
		// $scope.TranslatedWords.push($scope.newWord)
		
		// $scope.TranslatedWords.push(this.word)
		
	}

});

