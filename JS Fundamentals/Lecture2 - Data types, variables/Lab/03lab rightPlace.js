function solve(word, char, word2){
  let finalWord = word.replace("_", char);

  if(finalWord === word2){
    console.log(`Matched`);
  } else {
    console.log(`Not Matched`);
  } 
}
solve('Str_ng', 'I', 'StrIng' )