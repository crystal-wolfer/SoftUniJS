function solve(input) {

  let inventory = [];

  for (const entry of input) {
    // taking every input item
    let [name, level, items] = entry.split(' / ');

    // creating new object to store inventory
    let hero = {
      name: name,
      level: Number(level),
      items: items
    }

    // pushing each object for each hero to the inventory array
    inventory.push(hero);
  }

  // sorting the inventory array by ascdening level:
  inventory.sort((a, b) => a.level - b.level);

  // printing to the console each object
  inventory.forEach(element => {
    console.log(`Hero: ${element.name}`);
    console.log(`level => ${element.level}`);
    console.log(`items => ${element.items}`);
  });

}
solve(
  ['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']
    
);

console.log(`-------------`);
solve(
  ['Batman / 2 / Banana, Gun','Superman / 18 / Sword','Poppy / 28 / Sentinel, Antara']
    
);