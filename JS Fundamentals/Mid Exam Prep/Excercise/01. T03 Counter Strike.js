function counterStrike(main) {
  let counter = 0;
  let energy = Number(main.shift());
  let moves = main;
  for (let i = 0; i < moves.length; i++) {
      let current = moves[i];

      if (current === 'End of battle') {
          return console.log(`Won battles: ${counter}. Energy left: ${energy}`);
      }
      current = Number(moves[i]);
      if(current > energy){
          return console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
      }
      counter++;
      energy -= current;
      if (counter % 3 === 0) {
          energy += counter;
      }
  }

}
counterStrike(["200","54","214","28","13","End of battle"]);
