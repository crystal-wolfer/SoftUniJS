function solve(input){
  let health = 100;
  let bitcoins = 0;

  //making the string into an array of rooms
  let dungeonRooms = input[0].split('|');

  for(let i = 0; i < dungeonRooms.length; i++) {
    let [command, value] = dungeonRooms[i].split(' ');
    value = Number(value);

    // covering the potion and chest commands
    if (command === 'potion' || command === 'chest') {
      //potion case:
      if (command === 'potion') {
        health += value;

        if(health > 100){
          value = value - (health - 100);
          health = 100;
        }

      console.log(`You healed for ${value} hp.`);
      console.log(`Current health: ${health} hp.`);
      } // chest case:
        else{
          bitcoins += value;
          console.log(`You found ${value} bitcoins.`);
      }
    } else {
      health -= value;
        // check if health is 0 or less:
        if(health <= 0){
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${i+1}`);
          return;
        } else {
          console.log(`You slayed ${command}.`);
        }
    }

  }

  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
 
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);