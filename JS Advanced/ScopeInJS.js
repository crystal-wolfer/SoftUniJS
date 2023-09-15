// Block scope
const a = 3;
const b = 5;
 
if (a < b) {
  const c = 7; // Block scope
  console.log(c); // 7
}
 
// console.log(c); // ReferenceError: c is not defined
 
if (a < b) {
  let d = 8; // Block scope
  console.log(d); // 8
}
 
// console.log(d); // ReferenceError: d is not defined
 
if (a < b) {
  var e = 9; // Var doesn't have block scope
  console.log(e); // 9
}
 
console.log(e); // 9
 
// Function scope
 
function myFunction() {
  let carName = "Volvo";
  const secondCarName = "BMW";
  var thirdCarName = "Mercedes";
  console.log(carName); // Volvo
  console.log(secondCarName); // BMW
  console.log(thirdCarName); // Mercedes
 
  function innerFunction() {
    var innerVar = "innerVar";
    console.log(innerVar); // BMW
    console.log(secondCarName, "HEREE"); 
  }
 
  innerFunction();
  // console.log(innerVar); // ReferenceError: innerVar is not defined
}
 
myFunction();
// console.log(carName); // ReferenceError: carName is not defined
// console.log(secondCarName); // ReferenceError: secondCarName is not defined
// console.log(thirdCarName); // ReferenceError: thirdCarName is not defined
 
// Global scope
let car = "Volvo"; // Global scope
const secondCar = "BMW"; // Global scope
var thirdCar = "Mercedes"; // Global scope
 
function myFunction2() {
  console.log(car); // Volvo
  console.log(secondCar); // BMW
  console.log(thirdCar); // Mercedes
}
 
if (a < b) {
  console.log(car); // Volvo
  console.log(secondCar); // BMW
  console.log(thirdCar); // Mercedes
}
 
myFunction2();
 
// Automatically Global
 
test();
 
console.log(myName); // Toni
 
function test() {
  myName = "Toni";
}