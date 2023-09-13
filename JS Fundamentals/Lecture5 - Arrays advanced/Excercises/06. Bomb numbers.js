function solve(bombField, bombArray){

  let bombIndex = null;
  let power = bombArray[1];
  let sum = 0;
  let chargedBomb = bombField.includes(bombArray[0])

  if (chargedBomb) { // IF there isn't special-bomb-number DO NOTHING
      while (chargedBomb) {  //IF there is more than one bobms
          bombIndex = bombField.indexOf(bombArray[0]) //Index of special-bomb-number
          bombField.splice(bombIndex + 1, power); // Removing element on the right side of the bomb excluding bomb
          if (bombIndex - power < 0) { //IF bombs will deploy elements before 0;
              bombField.splice(0, bombIndex + 1); //  Removing all elements including bombIndex
          } else {
              bombField.splice(bombIndex - power, power + 1); // Starting index , power + bomb
          }
          chargedBomb = bombField.includes(bombArray[0]) // check for another bomb
      }
      for (let i = 0; i < bombField.length; i++) {
          sum += bombField[i];
      }
      console.log(sum);
  }
}

solve([1, 1, 2, 1, 1, 1,
  2, 1, 1, 1],
  [2, 3]);