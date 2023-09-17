function biggestEl(matrix) {
  let biggest = Number.MIN_SAFE_INTEGER;
  let temp = 0;
  for (let i = 0; i < matrix.length; i++) {
    temp = Math.max(...matrix[i]);

    if (temp >= biggest) {
      biggest = temp;
    }
    
  }
console.log(biggest);
}
biggestEl(
  [[0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, -5, 6]]
);