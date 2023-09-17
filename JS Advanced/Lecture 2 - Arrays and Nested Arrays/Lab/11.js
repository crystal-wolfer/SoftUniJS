function equalNeighbors(matrix){
  counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
      let curEl = matrix[i][j];
      let nextEl = matrix[i][j + 1];
      let colEl;

      if (i + 1 < matrix.length){
        colEl = matrix[i+1][j];
      }
      
      if (curEl === nextEl) {
        counter++;
      }

      if (curEl === colEl){
        counter++;
      }

    }
  }

  return counter;

}
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

);