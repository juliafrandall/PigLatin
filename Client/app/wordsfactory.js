angular.module('piglatin.factory', [])

.factory('Words', function(){
	// var words = {
	// 	OriginalWord: word,
	// 	TranslatedWord: newWord
	// }

	var translate = function(word){
		var array = word.split('');
		var vowels = ['a', 'e', 'i', 'o', 'u'];
		var newWord = '';
    	for(var i = 0; i < vowels.length-1; i++) {
        	for(var y = 0; y < word.length-1; y++) {
            	if(word[y] === vowels[i]) {
                	for(var x = y; x < word.length; x++){
                    	newWord = newWord + word[x];
                	}
                for(var n = 0; n < y; n++){ 
                    newWord = newWord + word[n];
                }
               return newWord + "ay";
            }       
        }
    }  
}

return {
	translate: translate,

}

})


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