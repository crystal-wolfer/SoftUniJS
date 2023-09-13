function solve(input){
  let spell = input.shift();
  let line = input.shift();

  while(line !== 'Abracadabra'){
    //destructuring the line into command and tokens
    let [command, token1, token2] = line.split(' ');

    //checking which command is received
    switch(command){
      case 'Abjuration':
        spell = spell.toUpperCase();
        console.log(spell);
      break;

      case 'Necromancy':
        spell = spell.toLowerCase();
        console.log(spell);
      break;

      case 'Illusion':
        let index = Number(token1);
        let letter = token2;

        //checkinf if the index is valid
        if(index >= 0 && index < spell.length){
          spell = spell.slice(0,index) + letter + spell.slice(index + 1, spell.length);
          console.log(`Done!`);
        } else {
          console.log(`The spell was too weak.`);
        }
      break;

      case 'Divination':
        let substr1 = token1;
        let substr2 = token2;
        // checking if the substr exists
        if(spell.includes(substr1)){
          spell = spell.split(substr1);
          spell = spell.join(substr2);
          console.log(spell);
        }
      break;
      
      case 'Alteration':
        let substr = token1;

        if(spell.includes(substr)){
          spell = spell.replace(substr, '');
          console.log(spell);
        }
      break;

      default:
        console.log(`The spell did not work!`);
      break;
    }

    line = input.shift();
  }

}
solve(
  (["JonPeterrrrSaraJonJonSara",
"Divination Jon Bea",
"Abracadabra"])
);
console.log(`--------------------`);
solve(
  (["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Abracadabra"])
);
console.log(`--------------------`);
solve(
  (["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"])
);



// https://softwareuniversity-my.sharepoint.com/:w:/g/personal/joana_veskova_students_softuni_bg/EZ7vBePke8tPlc4HIN9IXEgBywO8STOAG14Y6PDOU7quIg?e=G6Uv8V
// Vhod: https://softwareuniversity-my.sharepoint.com/:w:/g/personal/joana_veskova_students_softuni_bg/ET9JGPRswc9KgtIyJWJVAIUBz9ketvGjNJZsWY6UjrPLyQ?rtime=FUccCtCQ20g
//30min