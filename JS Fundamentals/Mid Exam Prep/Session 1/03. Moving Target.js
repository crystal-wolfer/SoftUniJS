function solve(input){
  let targets = input.shift().split(' ').map(Number);
  let i = 0;
  let iterator = input[i];

  while(iterator !== "End"){
    let [command, index, value] = input[i].split(' ');
    index = Number(index);
    value = Number(value);

    switch(command){
      case "Shoot":
        //reducing the target by the given power called value
        if (targets[index] !== undefined){
          let curElement = targets[index];
          let newElement = curElement - value;
          targets.splice(index,1, newElement);

          //check if the target is <=0 and delete it
          if (newElement <= 0){
            targets.splice(index,1);
          }
        }
        break;
      case "Add":
        // if the index exists add the given value at the given index
        if (targets[index] !== undefined){
          targets.splice(index,0,value);
        }else{
          console.log(`Invalid placement!`);
        }
        break;
      case "Strike":
        // checks if it is possible to remove the items at the given index-value position 
        if (index - value >= 0){
          targets.splice((index - value),(value*2+1));
          } else{
            console.log(`Strike missed!`);
          }
        break;
    }
    iterator = input[i];
    i++;
  }
console.log(targets.join("|"));
}
solve(["1 2 3 4 5",
"Strike 0 1",
"End"]);