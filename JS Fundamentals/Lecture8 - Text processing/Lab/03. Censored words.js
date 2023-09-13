function solve(sentence, word){

 while (sentence.includes(word)){
  sentence = sentence.replace(word, '*'.repeat(word.length));
 }

 console.log(sentence);
}
solve(
  'small sentence small with some words',
  'small'
);