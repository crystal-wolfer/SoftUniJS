function solve(input){
  let text = input[0];
  let pattern = /([#@])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gi; // needs the i flag to make case insensitive mathces
  //let pattern = /([#|@])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gi
  let result = [];

  let match = text.match(pattern);  // extracting all the matches
  
  if (match){
    let numOfPairs = match.length; // extract the number of valid pairs
    console.log(`${numOfPairs} word pairs found!`);

    // cleaning up the array with matches
    let matchClean = match.join().split(/[\W]+/).slice(1,-1); //removing the weird characters and keeping a clean array with the names only by deleting the first and last elements

    for(let i = 0; i < matchClean.length; i+=2){
      let item1 = matchClean[i];
      let item2 = matchClean[i+1];

      //reversing item2
      let reversed = item2.split("").reverse().join("");

      // pushing the pairs into the result array to keep only the mirror words
      if(item1 === reversed){
        let pair = item1 + " <=> " + item2;
        result.push(pair);
      }      
    }
  } else {
    console.log(`No word pairs found!`);
  }

  // checking there are mirror words
  if(result.length > 0){
    console.log(`The mirror words are:`);
    console.log(`${result.join(', ')}`);
  } else {
    console.log(`No mirror words!`);
  }
  
}
solve(
  [
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
  ]    
);

console.log(`-----NEW LINE-----`);
solve(
  [
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
  ]    
);

console.log(`-----NEW LINE-----`);
solve(
  [
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
  ]    
);