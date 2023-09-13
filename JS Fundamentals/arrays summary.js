function arraysAdvanced(){

  //arrays are reference type of variables
  //copying an array
  let arr = [5,1,8,10];
  let arr2 = arr.slice(0); //creates new array without changing the original arr

  //methods that change original array
  .shift(); - deletes 1st element
  .pop(); - deletes last element
  .unshift(); - adds element to pos 0
  .push(); - adds element at the end
  .splice();

  //methods that do not change original array but create a new one
  .map();
  .filter();
  .sort(); - manipulates the original array 
  .slice(0).sort(); - will return new sorted array without affecting the original array


  //arrow functions explained
  arr.filter(e => e % 2 === 0);
  //checks every element and return only the elements that match e%2===0
  arrow functions do the same as for loops
}
arraysAdvanced();

  //replacing function with regexp: password = password.replace(new RegExp(substring, 'g'), substitude);
