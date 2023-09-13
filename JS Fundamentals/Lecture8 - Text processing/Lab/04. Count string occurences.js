function solve(sentence, wordSearch){
 let sentenceArray = sentence.split(' ');
 let counter = 0;

 for (const word of sentenceArray) {
    if (word === wordSearch) {
      counter++;
    }
 }
 console.log(counter);
}
solve(
  'This is a word and it also is a sentence is this love',
  'is'  
);