function demo(input) {

  let age = Number(input);
  let result = '';

  if (age < 0 ){
    result = 'out of bounds';
  } else if (age >= 0 && age <= 2) {
    result = 'baby'; 
  } else if (age <= 13) {
    result = 'child';
  } else if (age <= 19) {
    result = 'teenager';
  } else if (age <= 65) {
    result = 'adult';
  } else if (age > 65) {
    result = 'elder';
  }

console.log(result);

}
demo("100");


// variable.length -> takes the length of the variable
// Math.floor(variable) -> rounds the variable to the lower value
// Math.ceil(variable) -> rounds the variable to the higher value
// Math.abs(variable) -> returns the absolute value of the variable
// Math.pow(a, i) -> returns the power of the variable a to the power of the i value
// Math.round(variable) -> rounds the variable to the nearest value
// Number(MAX_SAFE_INTEGER) -> returns the maximum possible number in JS
// Number(MIN_SAFE_INTEGER) -> returns the minimum possible number in JS
// parseFloat(string) -> The parseFloat() function parses a string argument and returns a floating point number.
