function aggragate(array) {
  let arrayLength = array.length;
  let sumElements = 0;
  let sumInverse = 0;
  let elementsConcatenated = '';

  for (let i = 0; i < arrayLength; i++) {
    sumElements += array[i];
    sumInverse += 1/array[i];
    elementsConcatenated += array[i].toString();
  }

  console.log(sumElements);
  console.log(sumInverse);
  console.log(elementsConcatenated);
}
aggragate([1, 2, 3]);