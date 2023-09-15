function wordsUpperCase(word){
  let res = word.match(/\w+/gm).join(', ');
  console.log(res.toUpperCase());
}
wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');