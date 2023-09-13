function numberModification(numberInput){

  // Change the number to an array of numbers
  let numberAsArray = numberInput.toString().split('');
  let sumElements = 0;
  let avarage = 0

  loopThroughElements(numberAsArray);  

  // Function that loops through the array of numbers to find the sum and check if requirement is met
  function loopThroughElements(numberAsArray){  
      for (let i=0; i<numberAsArray.length; i++) {
        let curElement = Number(numberAsArray[i]);
        sumElements += curElement;
      }
    
     // Find the avarage of the sum and check if it matches the requirement to be > 5
      avarage = sumElements / numberAsArray.length;
      if (avarage > 5){
        console.log(numberAsArray.join(''));
      }else{
        modify(numberAsArray);
        sumElements = 0;
        loopThroughElements(numberAsArray);
      }
    }
    

  // Function to modify the input number by adding a new 9
  function modify(number){
    numberAsArray.push('9');
    return numberAsArray;
  } 

}
numberModification(5835); 
