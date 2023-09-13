function solve(data) {
  let addressBook = {};

  data.forEach(element => {
    let [key, value] = element.split(':');
    addressBook[key] = value;
  });

  let addressBookSorted = Object.entries(addressBook);
  addressBookSorted.sort(([key1, value1], [key2, value2]) => key1.localeCompare(key2));
  
  for (const element of addressBookSorted) {
    console.log(`${element[0]} -> ${element[1]}`);
  }
}
solve(
  ['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);