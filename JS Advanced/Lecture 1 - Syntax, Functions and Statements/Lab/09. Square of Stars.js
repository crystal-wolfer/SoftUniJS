function square(n){
  for (let i = 1; i <= n; i++) {
    let result = '';
    for (let j = 1; j <= n; j++) {
      result += '*' + ' ';
    }
    console.log(result);
  }
}
square(5);