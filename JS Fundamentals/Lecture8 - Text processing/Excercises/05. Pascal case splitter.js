function solve(string1){
  let string2 = string1.toLowerCase();

  
  let result = string1[0]; // setting result to start with first character of the input

  // iterating through the input string
  for (let i = 1; i < string1.length; i++) {
    if(string1[i] !== string2[i]) { 
      result = result + ', ' +string1[i]; // if cur character is an Uppercase letter then we add the separator and the uppercase
    } else {
      result = result + string2[i]; // else we add the lowercase letter
    }
  }

  console.log(result);
}
solve(
  'SplitMeIfYouCanHaHaYouCantOrYouCan'
);

console.log(`------------------`);

solve(
  'HoldTheDoor'
  );
