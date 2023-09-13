function solve(string){
  // taking the firsr and second half of the input string
  let firstHalf = string.substring(0, string.length/2);
  let secondHalf = string.substring(string.length/2);

  // splitting into an array of chars, reversing the chars and then joining them into a string
  let firstHalfReversed = firstHalf
    .split('')
    .reverse()
    .join('');

  let secondHalfReversed = secondHalf
    .split('')
    .reverse()
    .join('');
  
  console.log(firstHalfReversed);
  console.log(secondHalfReversed);
}
solve(
  'tluciffiDsIsihTgnizamAoSsIsihT' 
);

console.log(`------------------`);

solve(
  'sihToDtnaCuoYteBIboJsihTtAdooGoSmI'
  );