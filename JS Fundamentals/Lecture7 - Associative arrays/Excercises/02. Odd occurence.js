function solve(input){
  // craeting a new array with the input string split into words and modified to lowercase
  let arrayOfWords = input.split(' ').map(e => e.toLowerCase());

  let wordsList = {};

  for (const word of arrayOfWords) {
    // check if the word is in the words object and if not adding it
    if (!wordsList.hasOwnProperty(word)){
      wordsList[word] = 0;
    }
    // if the word is in the wordsList increase the count value
    wordsList[word] ++;
  }
  // creating new array by filtering the odd count words(filter) sorted by count values
  let wordsOddCount = Object.entries(wordsList).filter( entry => entry[1] % 2 !== 0 ).sort((a,b) => b[1] - a[1]);

  let result = '';
  for (const word of wordsOddCount) {
    result += `${word[0]} `;
  }

  console.log(result);
}
solve(
  'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
);