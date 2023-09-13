function solve(input){
  let digits = /\d/g;
  let digitsMatch = input[0].match(digits);
  let threshold = 1;

  for (let num of digitsMatch) {
    num = Number(num);
    threshold *= num;
  }

  console.log(`Cool threshold: ${threshold}`);

  let pattern = /([\:]{2}|[\*]{2})([A-Z][a-z]{2,})\1/gm;
  let match = input[0].match(pattern);
  let count = match.length;
  console.log(`${count} emojis found in the text. The cool ones are:`);
  
  // checking which matches are cool
  for (let el of match) {
    let word = el.split(/[\W]+/).slice(1,-1).join();

    let sum = 0;

    for (let i = 0; i < word.length; i++) {
      let num = word.charCodeAt(i);
      sum += num;
    }

    if (sum > threshold) {
      console.log(el);
    } 
      
  }

}
solve(
  [("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")]
);
console.log(`---------------`);
solve(
  (["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
);
console.log(`---------------`);
solve(
  (["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
);


