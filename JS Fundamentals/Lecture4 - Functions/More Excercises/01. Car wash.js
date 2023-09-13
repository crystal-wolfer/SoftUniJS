function smallestOfNumbers(inputAray){
    let sum = 0;

    for (let i = 0; i < inputAray.length; i++){
      switch(inputAray[i]){
        case 'soap':
          sum += 10; break;
        case 'water': 
          sum += sum*0.2; break;
        case 'vacuum cleaner':
          sum += sum*0.25;  break;
        case 'mud':
          sum -= sum*0.1; break;
      }
    }

    return `The car is ${sum.toFixed(2)}% clean.`
}
console.log(smallestOfNumbers(["soap", "water", "mud", "mud", "water", "mud",
"vacuum cleaner"])); 
