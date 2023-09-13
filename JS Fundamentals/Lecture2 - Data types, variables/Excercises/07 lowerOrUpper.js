function solve(letter){
  let asciiCode = letter.charCodeAt();
  
  if (asciiCode >= 65  && asciiCode <= 90){
    console.log(`upper-case`);
  } else {
    console.log(`lower-case`);
  }
}
solve('l')