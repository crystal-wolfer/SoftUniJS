function solve(data){
  let wordsList = {}
  

  for (const word of data) {
    // checking if the word is not in the wordList associative array and adding counter
    if (!wordsList.hasOwnProperty(word)){
      wordsList[word] = 1;
    } else {
      // if the word is in the wordList add 1 to the counter
      wordsList[word] += 1;
    }
  }

  // sorting in descending order based on the counts of words
  let wordListSorted = Object.entries(wordsList);
  wordListSorted = wordListSorted.sort(([word1, count1], [word2, count2]) => count2 - count1);
  
  for (const wordArray of wordListSorted) {
    console.log(`${wordArray[0]} -> ${wordArray[1]} times`);
  }
}
solve(
  ["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]
);
console.log(`----- Answer------`);
console.log(`
sentence -> 3 times
Here -> 2 times
is -> 2 times
the -> 2 times
first -> 1 times
another -> 1 times
And -> 1 times
finally -> 1 times
third -> 1 times`);