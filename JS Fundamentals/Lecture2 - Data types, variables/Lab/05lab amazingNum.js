function solve(num){
  num = num.toString();
  let sum = 0;

  for (var i=0; i<num.length; i++) {
    let curNum = Number(num[i]);
    sum += curNum;
  }

  let result = sum.toString();

  if (result.includes('9')){
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`)
  }
}
solve(583472)