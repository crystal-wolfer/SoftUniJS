function solve(input){
  let map = new Map();
  let wordsToCheck = input.shift().split(' ');

  wordsToCheck.forEach(word => {
    // set lets us add new double to the Map object
    map.set(word, 0);
  });


  for (const line of input) {
    for (const word of wordsToCheck) {
      
      if(line === word){
        let currQuantity = map.get(line);
        map.set(line, currQuantity + 1);
      }
    }
    
  }

  let wordsSorted = Array.from(map.entries());
  wordsSorted.sort((a, b) => b[1] - a[1]);

  for (const wordArray of wordsSorted) {
    console.log(`${wordArray.join(' - ')}`); // same as console.log(`${wordArray[0]} - ${wordArray[1]}`)
  }

}
solve(
  [
    'is the first',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    
);

/*
  // creating an array of strings with the words to look for
  let wordsSearchingFor = data.shift().split(' ');

  let result = {};

  for (const currWord of data) {
    // checking if the current word is in the wordsSearchingFor array
    if (wordsSearchingFor.includes(currWord)){
      // if not add the word with count 1 to the wordsSearchingFor array; if the word is already in the wordsSearchingFor array increase the count by 1
      if (!result[currWord]){
        result[currWord] = 1;
      } else {
        result[currWord] += 1;
      }
    }
  }

  // order the reult in descending order based on the counts (a and b are associative array)
  let resultSorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

  // printing the results in descending order
  for (const array of resultSorted) {
    console.log(`${array[0]} - ${array[1]}`);
  }
*/