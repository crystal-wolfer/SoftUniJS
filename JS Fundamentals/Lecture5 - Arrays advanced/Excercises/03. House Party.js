function solve(input) {

  let list = [];

  for (const element of input) {
    // splitting the input element into the 4 possible words
    let [name, isValue, notValue, going] = element.split(' ');

    // checking if the $name is not in the list and $name is NOT going
    if (!list.includes(name) && notValue === 'not'){
      console.log(`${name} is not in the list!`)
    }

    // checking if the $name is NOT going and removing it from the list array; or saying its already in the list
    if (list.includes(name)) {
      if (notValue === 'not') {
        let nameIndex = list.indexOf(name);
        list.splice(nameIndex, 1);
      } else {
        console.log(`${name} is already in the list!`);
      }
    }

    // checking if the $name is not added to the list array yet and adding it
    if (!list.includes(name)) {
      if (notValue !== 'not') {
        list.push(name);
      }
    }
  }

  console.log(list.join('\n'));

}
solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);