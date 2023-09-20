function magicMatrices(matrix) {
 
  let rowSums = [];
  let columnSums = [];
  let isEqual = true;

  for (let i = 0; i < matrix.length; i++) {

      let sumRow = 0;
      let sumColumn = 0;

      for (let j = 0; j < matrix.length; j++) {

          let rowElement = matrix[i][j];
          sumRow += rowElement;

          let columnElements = matrix[j][i];
          sumColumn += columnElements;
      }

      if (sumRow !== sumColumn) {

          isEqual = false;
          break;
      }

      rowSums.push(sumRow);
      columnSums.push(sumColumn);
  }

  if (rowSums[0] !== rowSums[1] || columnSums[0] !== columnSums[1] ) {

      isEqual = false;
  }

  console.log(isEqual);
}