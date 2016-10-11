angular.module('piglatin.factory', ['underscore'])


.factory('Words', function(_){
	// var words = {
	// 	OriginalWord: word,
	// 	TranslatedWord: newWord
	// }

// 	var translate = function(word){
// 		var array = word.split('');
// 		var vowels = ['a', 'e', 'i', 'o', 'u'];
// 		var newWord = '';
//     	for(var i = 0; i < vowels.length-1; i++) {
//         	for(var y = 0; y < word.length-1; y++) {
//             	if(word[y] === vowels[i]) {
//                 	for(var x = y; x < word.length; x++){
//                     	newWord = newWord + word[x];
//                 	}
//                 for(var n = 0; n < y; n++){ 
//                     newWord = newWord + word[n];
//                 }
//                return newWord + "ay";
//             }       
//         }
//     }  
// }

// 	return {
// 		translate: translate
// 	}
var isVowel = function(char){
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.indexOf(char) !== -1;
}

var wordInPigLatin = function(word){
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetter = word[0];
  if(isVowel(firstLetter)){
    return word + "yay";
  } else{
      for(var i = 0; i < word.length; i++) {
        var char = word[i];
        if(isVowel(char)){
          var wordStart = word.slice(0, i);
          var wordEnd = word.slice(i);
          return wordEnd + wordStart + "ay";
        }
      }
      return word + "ay";
    }
}

var matchCapitalization = function(oldWord, newWord){
  var firstLetter = oldWord[0];
  if (firstLetter === firstLetter.toUpperCase()){
    return newWord[0].toUpperCase() + newWord.slice(1).toLowerCase();
  }else{
    return newWord;
  }
}


var inPigLatin = function(sentence){
  var sentenceArray = sentence.split(" ");
  var pigLatinArray = [];

  _.each(sentenceArray, function(word){
    var pigLatinWord = wordInPigLatin(word);
    pigLatinArray.push(matchCapitalization(word, pigLatinWord));
  });
  return pigLatinArray.join(" ");
}

return {
	inPigLatin: inPigLatin,
}
})

.factory('Quotes', function($http){
	var getQuote = function(){
		return $http({
			method: 'GET',
			url: 'http://quotes.rest/qod.json'
		}).then(function(response){
			return response.data.contents.quotes[0].quote;
		});
	};
	return{
		getQuote: getQuote
	}
});


// //<li ngChange="(words.TranslatedWord)in words" class="ng-binding ng-scope">{{words.OriginalWord}} </li>
// 		</ul>
// //i need to return both the original and the translated word
// //I need to get the word typed in to pass to translate
// //I need to post both the word I typed in and the translated


	// <form ng-submit="translateWord(word)" class="ng-pristine ng-valid">
	// 		<input type='text' ng-model='word' placeholder="Enter word to translate" class="ng-pristine ng-valid ng-empty ng-touched ngc-change="change()"/>
	// 		<button type="submit"> Translate </button>
	// 	</form>
	// 	<ul style="list-style:none;">
	// 	<li ngChange="(words.TranslatedWord)in words" class="ng-binding ng-scope">{{words.OriginalWord}} </li>
	// 	</ul>