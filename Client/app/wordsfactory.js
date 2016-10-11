angular.module('piglatin.factory', ['underscore'])


.factory('Words', function(_){
	var isVowel = function(char){
	var vowels = ["a", "e", "i", "o", "u"];
		return vowels.indexOf(char) !== -1;
	}

	var wordInPigLatin = function(word){
		var vowels = ["a", "e", "i", "o", "u"];
		var punctuation = [".", ",", "!", "?", ":", ";", "/", "'", '"']
		var firstLetter = word[0];
		var translatedWord = ""
		var vowelFound = false;

		if(isVowel(firstLetter)){
		    translatedWord = word + "yay";
		} else {
		    for(var i = 0; i < word.length; i++) {
		        var char = word[i];
		        if(isVowel(char) && vowelFound === false){
		        	var wordStart = word.slice(0, i);
		        	var wordEnd = word.slice(i);
		        	translatedWord = wordEnd + wordStart + "ay";
		        	vowelFound = true
		        }
			}
		}

		if(translatedWord !== ""){
	      	_.each(translatedWord, function(char){
	      	if (punctuation.indexOf(char) !== -1){
	      		translatedWord = translatedWord.split(char).join("")
	      		translatedWord = translatedWord + char;
	      	}
	    })
	    	return translatedWord
	    } else {
		    _.each(word, function(char){
		      	if (punctuation.indexOf(char) !== -1){
		      		word = word.split(char).join("")
		      		word = word + char;
		      	}
		      })
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
			url: 'https://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Norris'
		}).then(function(response){
			return response.data.value.joke;
		});
	};
	return{
		getQuote: getQuote
	}
});


	