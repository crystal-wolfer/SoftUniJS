function solve(string){
  let result = string[0];
  for (let index = 1; index < string.length; index++) {
    let curChar = string[index];
    let prevChar = string[index-1];

    if (curChar !== prevChar) {
      result+=curChar;
    } 
  }

  console.log(result);
}
solve(
  'aaaaabbbbbcdddeeeedssaa'
);

console.log(`------------------`);

solve(
  'qqqwerqwecccwd'
  );