function solve(input){
  let numbers = input[0];
  //let regex = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

  let regex = /(\+359)([ -]?)(2)(\2\d{3})(\2\d{4})\b/g; // from chatGPT
  let result = [];
  
  let match = regex.exec(numbers);
  while (match) {
    result.push(match[0]);
    match = regex.exec(numbers)
  }
  console.log(result.join(', '));
}
solve(
  ['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']

);