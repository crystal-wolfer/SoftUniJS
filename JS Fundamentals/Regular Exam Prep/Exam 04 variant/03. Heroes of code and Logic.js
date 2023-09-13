function solve(input){
  let n = Number(input.shift());
  let heroes = {};
  let curHero = input.shift();

  createHero();
  manipulateHero();

  // Object creation - storing each hero's stats
  function createHero(){
    while (n > 0){
      // extracting the info
      let [heroName, hp, mp] = curHero.split(' ');
      hp = Number(hp);
      mp = Number(mp);

      if(!heroes[heroName]){
        heroes[heroName] = {
          hp, 
          mp
        }
      }
      curHero = input.shift();
      n--;
    }
  }

  // Executing the commands CastSpell, TakeDamage, Recharge and Heal
  function manipulateHero(){
    let line = curHero;

    while (line !== 'End'){
      let destructuring = line.split(' - ');
      let command = destructuring.shift();

      // Command CastSpell
      if(command == 'CastSpell'){
        let [heroName, mp, spell] = destructuring;
        mp = Number(mp);

        // checking if player has enough MP to cast the spell
        if (heroes[heroName].mp >= mp){
          heroes[heroName].mp -= mp;
          console.log(`${heroName} has successfully cast ${spell} and now has ${heroes[heroName].mp} MP!`);
        } else {
          console.log(`${heroName} does not have enough MP to cast ${spell}!`);
        }
      }

      // Command  TakeDamage
      if(command == 'TakeDamage'){
        let [heroName, damage, attacker] = destructuring;
        damage = Number(damage);

        // reducing the hero HP
        heroes[heroName].hp -= damage;

        // checking how much HP the hero has and if they died
        if(heroes[heroName].hp > 0){
          console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
        } else {
          console.log(`${heroName} has been killed by ${attacker}!`);
          delete heroes[heroName];
        }
      }

      // Command Recharge
      if (command == 'Recharge'){
        let [heroName, amount] = destructuring;
        amount = Number(amount);
        let curMP = amount + heroes[heroName].mp;

        // checking if max MP = 200 is exceeded
        if (curMP > 200){
          heroes[heroName].mp = 200;
          let recharged = amount - (curMP - 200);
          console.log(`${heroName} recharged for ${recharged} MP!`);
        } else {
          heroes[heroName].mp = curMP;
          console.log(`${heroName} recharged for ${amount} MP!`);
        }
      }

      // Command Heal
      if(command == 'Heal'){
        let [heroName, amount] = destructuring;
        amount = Number(amount);
        let curHP = amount + heroes[heroName].hp;

        // checking if max HP = 100 is exceeded
        if (curHP > 100){
          heroes[heroName].hp = 100;
          let recharged = amount - (curHP - 100);
          console.log(`${heroName} healed for ${recharged} HP!`);
        } else {
          heroes[heroName].hp = curHP;
          console.log(`${heroName} healed for ${amount} HP!`);
        }        
      }

      line = input.shift();
    }
  }

  // printing all hero stats
  for (const hero in heroes) {
    console.log(`${hero}`);
    console.log(`  HP: ${heroes[hero].hp}`);
    console.log(`  MP: ${heroes[hero].mp}`);
  }

}
solve(
  [
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]    
    
);