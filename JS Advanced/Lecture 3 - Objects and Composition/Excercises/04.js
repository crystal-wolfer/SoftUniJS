function heroicInventory(array){
  let result = [];

  array.forEach(element => {
    let hero = {};
    let [name, level, items] = element.split(' / ');
    hero.name = name;
    hero.level = Number(level);
    // check if items is empty or not (if not then split and add into the obj) if yes return empty array
    hero.items = items ? items.split(', ') : [];
    result.push(hero);
  });

  console.log(JSON.stringify(result));
}
heroicInventory(
  ['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']

);
