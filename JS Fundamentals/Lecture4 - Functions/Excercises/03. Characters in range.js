function charsInRange(firstChar, secondChar){
  //finding the ASCII character number
  let charOne = firstChar.charCodeAt();
  let charTwo = secondChar.charCodeAt();
  let newArray = [];

  let smallestChar = Math.min(charOne, charTwo);
  let biggestChar = Math.max(charOne, charTwo);
  
  //creating a loop that finds the smallest ASCII value from the inputs and loops until the biggest value
  for (let index = smallestChar + 1; index < biggestChar; index ++){
    let curChar = String.fromCharCode(index);
    newArray.push(curChar);
  }
  
  return newArray.join(' ');
}
console.log(charsInRange('o','h'));

