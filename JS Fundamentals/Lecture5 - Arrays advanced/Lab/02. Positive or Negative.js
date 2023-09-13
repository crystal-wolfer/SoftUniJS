function negativeOrPositive(inputArr){
  let result = [];

  for(let i = 0; i < inputArr.length; i++){
    let curNum = Number(inputArr[i]);

    if (curNum < 0){
      result.unshift(curNum);
    } else {
      result.push(curNum);
    }
  }

  console.log(result.join('\n'));
}
negativeOrPositive(['3', '-2', '0', '-1']);  