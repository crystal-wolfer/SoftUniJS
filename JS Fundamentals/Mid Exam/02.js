function solve(input){
  let usernames = input.shift().split(', ');
  
  let commandsLength = input.length;
  let blacklistedCounter = 0;
  let lostCounter = 0;
  
  for (let i = 0; i < commandsLength; i++) {

     // use case: when command Report is called before the end of the inputs
     if(input[i] === "Report"){
      break;
    } 

    let [command, key1, key2] = input[i].split(' ');

    switch(command){
      case "Blacklist":
        if (usernames.includes(key1)){
          let index = usernames.indexOf(key1);
          usernames.splice(index, 1, "Blacklisted");
          console.log(`${key1} was blacklisted.`);
          blacklistedCounter ++;
        } else{
          console.log(`${key1} was not found.`);
        }
        break;

      case "Error":
        // checking if index is valid
        key1 = Number(key1);
        if (key1 >= 0 && key1 < usernames.length){
          let indexOfName = key1;
          let name = usernames[indexOfName];

          // checking if the name is blacklisted or lost
          if(name == "Blacklisted" || name == "Lost"){
            break;
          } else{
            usernames.splice(indexOfName, 1, "Lost");
            console.log(`${name} was lost due to an error.`);
            lostCounter ++;
          }
        }
        break;

      case "Change":
        let index = Number(key1);
        let newName = key2;
        // checking if index is valid
        if (index >= 0 && index < usernames.length){
          let name = usernames[index];
          // checking if name is blacklisted or lost
          if(name == "Blacklisted" || name == "Lost"){
            break;
          }else{
            usernames.splice(index, 1, newName);
            console.log(`${name} changed his username to ${newName}.`);
          }
        }

        break;
    }
  }

  console.log(`Blacklisted names: ${blacklistedCounter}`);
  console.log(`Lost names: ${lostCounter}`);
  console.log(usernames.join(" "));
}
//solve(["Mike, John, Eddie","Blacklist Mike","Error 0","Report"]);
//console.log(`-----------`);
//console.log(`Mike was blacklisted. 
//Blacklisted names: 1 
//Lost names: 0 
//Blacklisted John Eddie`);
//console.log(`///////////////////`);
//solve(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"])
//console.log(`-----------`);
//console.log(`William was lost due to an error. 
//Mike changed his username to Mike123. 
//Blacklisted names: 0 
//Lost names: 1 
//Mike123 John Eddie Lost`);
//console.log(`///////////////////`);
solve(["Mike, John, Eddie, William","Blacklist Maya","Error 1","Change 4 George","Report"])
console.log(`-----------`);
console.log(`Maya was not found. 
John was lost due to an error. 
Blacklisted names: 0 
Lost names: 1 
Mike Lost Eddie William`);


//friendlist maintenance