function solve(sentence){
  let sentenceArray = sentence.split(' ');
  let isValid = false;
  
  for (const word of sentenceArray) {
    if (word.startsWith('#')) {
      let wordToCheck = word.substring(1); // removing the #
      for (let char of wordToCheck.split('')) {
        char = Number(char);
        // checking if some of the characters are numbers
        if (isNaN(char)){
          isValid = true;
        } else {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        console.log(wordToCheck);;
      }
    }
  }
}
solve(
  'Nowadays everyone uses # to tag a #special word in #socialMedia'
);

console.log(`-------------`);

solve(
  'The symbol # is known #variously in English-speaking #regions as the #number sign'
);

//ascii letters: 65 - 90 incl + 97-122 incl