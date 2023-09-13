function solve(arr1, arr2) {
  let sum = 0;
    for (var i = 0; i < arr1.length; i++){
      let currElArr1 = Number(arr1[i]);
      let currElArr2 = Number(arr2[i]);

      if (currElArr1 !== currElArr2){
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        return;
      }

      sum += currElArr1;
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
  }

solve(['10','20','30'], ['10','20','30'])
console.log(`--------------------------------`);
solve(['1','2','3','4','5'],['1','2','4','4','5']);
console.log(`--------------------------------`);
solve(['1'], ['10']);