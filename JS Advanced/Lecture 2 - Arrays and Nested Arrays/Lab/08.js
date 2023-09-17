function processOddPositions(array) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      res.push(array[i]*2);
    }
  }
  let resReversed = res.reverse();
  console.log(resReversed.join(' '));
}
processOddPositions([3, 0, 10, 4, 7, 3]);
