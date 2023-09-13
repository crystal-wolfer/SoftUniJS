function palindromeInteger(inputArray){
  // Looping through each element from the input array
  for(let i=0; i < inputArray.length; i++){
    let curElementAsString = (inputArray[i]).toString();

    // Takes curElement. divides it into all parts. reverses the order of the parts. joins them together again
    let reversedElement = curElementAsString.split('').reverse().join('');


    if (curElementAsString === reversedElement){
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  }
}
palindromeInteger([123,323,421,121]); 

