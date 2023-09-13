function addAndSubtract(firstNumber, secondNumber, thirdNumber){

    // Function to sum the first two numbers
    function sum(firstNumber, secondNumber){
      return  firstNumber + secondNumber; 
    }

    // Variable to hold the result of the function sum
    let sumResult = sum(firstNumber, secondNumber);

    // Function to subtract the 3rd num from the sum
    function subtract(sum, thirdNumber){
      return sum - thirdNumber;
    }

    // Returns the final result with input from the 1st function + second function
    return subtract (sumResult, thirdNumber);
}
console.log(addAndSubtract(23,6,10)); 

