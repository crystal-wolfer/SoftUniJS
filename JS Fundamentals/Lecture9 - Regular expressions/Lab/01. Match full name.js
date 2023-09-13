function solve(input){
  
  let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
  let result = [];

  let match = regex.exec(input);

  while (match){
    result.push(match);
    match = regex.exec(input);
  }
  
  console.log(result.join(", "));
}
solve(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov"
);