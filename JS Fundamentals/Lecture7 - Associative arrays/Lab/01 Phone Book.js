function solve(data) {
  let phoneBook = {}

 data.forEach(element => {
   let [key, value] = element.split(' ');
   phoneBook[key] = value;
  });

  for (const el in phoneBook) {
    console.log(`${el} -> ${phoneBook[el]}`);
  }
  
}
solve(
  ['Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344']
);