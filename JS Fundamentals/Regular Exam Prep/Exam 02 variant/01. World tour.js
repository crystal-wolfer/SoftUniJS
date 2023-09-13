function solve(input){
  let string = input.shift();
  let strAsArray = string.split(/[\W]+/); //splitting using a regex to take the city names only not needed for this
  let i = 0;
  let iterator = input[i];

  while (iterator !== "Travel"){
    let [command, token1, token2] = iterator.split(':');
      switch(command){
        case 'Add Stop':
          let index = Number(token1);
          let substring = token2;

          if (index >= 0 && index < string.length){
            string = string.slice(0, index) + substring + string.slice(index); // inserting a substring into another string
            console.log(string);
          }
          break;

          case 'Remove Stop':
            let startIndex = Number(token1);
            let endIndex = Number(token2);

            if (startIndex >= 0 && startIndex < string.length && endIndex >= 0 && endIndex < string.length){  //checking if both indices are valid???
              string = string.slice(0,startIndex) + string.slice(endIndex+1); //taking only the parts left after the deletion 
              console.log(string);
            } else{
              console.log(string);
            }
            break;

          case 'Switch':
            let oldStr = token1;
            let newStr = token2;
            
            // replacing all occurrences of the oldStr with the newStr
            if (string.includes(oldStr)){
              string = string.split(oldStr);
              string = string.join(newStr);
              console.log(string);
            } else{
              console.log(string);
            }
            break;
      }
    i++;
    iterator=input[i];
  }
  
  console.log(`Ready for world tour! Planned stops: ${string}`);

}
solve(
  (["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])

);

//39min