angular.module('piglatin.translator', [])

.controller('TranslatorController', function($scope, Quotes, Words){
	// $scope.OriginalWords = [];
	$scope.word;
	$scope.oldword;

	// $scope.newWord;
	// $scope.TranslatedWords = [];
	// $scope.getWord = function(word) {
	// 	$scope.OriginalWords.push(word);
	// }


	$scope.translateWord = function(){
		$scope.newWord = Words.inPigLatin($scope.word)
		$scope.oldword = $scope.word;
		$scope.word = "";
		// $scope.word = "";
		// $scope.TranslatedWords.push($scope.newWord)
		
		// $scope.TranslatedWords.push(this.word)
		
	}

	$scope.data = {};

	$scope.getQuotes = function(){
		Quotes.getQuote()
		.then(function(quotes) {
			console.log(quotes)
			$scope.data.quotes = quotes;
		}).catch(function(error) {
			console.error(error);
		});
	};

	$scope.getQuotePigLatin = function(){
		$scope.newQuote = Words.inPigLatin($scope.data.quotes)

	}
})



