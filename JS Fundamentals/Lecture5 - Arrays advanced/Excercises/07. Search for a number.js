function solve(inputArray, manipulationsArray){
  let elementsToKeep = Number(manipulationsArray[0]);
  let elementsToRemove = Number(manipulationsArray[1]);
  let elementToSearch = Number(manipulationsArray[2]);

  // Taking only the elements needed
  let array1 = inputArray.slice(0, elementsToKeep);

  // Removing the elements needed
  let array2 = array1.slice(elementsToRemove);

  // Searching for the element
  let counter = 0;
  // Go through all elements in the array2 and if you find the element add 1 to the counter
  array2.find(e => {
    if (e === elementToSearch){
      counter++;
    }})

  console.log(`Number ${elementToSearch} occurs ${counter} times.`);

}
solve([5, 2, 3, 4, 1, 6],
  [5, 2, 3]);
solve([7, 1, 5, 8, 2, 7],
  [3, 1, 5]);

  //The first number represents the number of elements you have to take from the first array (starting from the first
  //  one).
  //The second number represents the number of elements you have to delete from the numbers you took (starting
  //  from the first one).
  //The third number is the number we search in our collection after the manipulations