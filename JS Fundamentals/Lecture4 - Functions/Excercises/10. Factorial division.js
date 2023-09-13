function factorialDivision(firstNumber, secondNumber){

    // Recursive function to calculate the factorial of a number
    function factorial(number){
      if (number === 0){
        return 1; 
      }else{
        return number * factorial(number - 1);
      }
    }

    let firstNumberFactorial = factorial(firstNumber);
    let secondNumberFactorial = factorial(secondNumber);
    let result = firstNumberFactorial / secondNumberFactorial;

    return result.toFixed(2);

}
console.log(factorialDivision(5,  2)); 
