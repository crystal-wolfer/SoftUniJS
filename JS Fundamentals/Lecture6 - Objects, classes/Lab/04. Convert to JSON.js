function solve(name, lastName, hairColor) {
  let object = {
    name,
    lastName,
    hairColor,
  }

  let results = JSON.stringify(object);

  console.log(results);
  
}
solve('George', 'Jones','Brown');