function solve(num){
  let result = '';

  for (let rows = 1; rows <= num; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      result += `${rows} `;
    }
    console.log(result);
    result = '';
}
}
solve(5);