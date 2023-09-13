function solve(words, sentence){
  let wordsArray = words.split(', ');

  for (const word of wordsArray) {
    // transforming the current word into *s
    let wordAsStars = '*'.repeat(word.length);
    // searching in sentence if there are same amount of stars and then replacing them with the cur word
    sentence = sentence.replace(wordAsStars, word);
  }
  console.log(sentence);
}

solve(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
  );


  // working solution but really bad one:
/*function solve(words, sentence){
 let wordsArray = words.split(', ');
 let sentenceArray = sentence.split(' ');
 let result = [];
 
 
 for (const curWord of sentenceArray){
  for (const word of wordsArray) {
    // adding to result[] either the new word or the old word and making sure only unique words are added
    if (curWord.startsWith('*') && curWord.length === word.length){
      result.push(word);
      break;
    } else if (!result.includes(curWord) && !curWord.startsWith('*')){
      result.push(curWord);
    }
  }  
 }

 console.log(result.join(' '));
}
solve(
  'great',
  'softuni is ***** place for learning new programming languages'
  
);

console.log('================================');

solve(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
  );
*/