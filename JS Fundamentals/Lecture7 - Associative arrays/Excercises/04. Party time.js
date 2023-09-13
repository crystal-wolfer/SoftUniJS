function solve(input){
  let vipList = [];
  let regularList = [];

  let command = input.shift();

  while(command!== 'PARTY'){
    let firstChar = command[0];

    if (isNaN(firstChar)){
      regularList.push(command);
    } else{
      vipList.push(command);
    }

    command = input.shift();
  }

  // concatenating the 2 arrays
  let guestList = vipList.concat(regularList);

  for (const guest of input) {
    if (guestList.includes(guest)){
      // removing all guests who came to the party
      guestList.splice(guestList.indexOf(guest), 1);
    }
  }
  console.log(guestList.length);
  guestList.forEach(guest => console.log(guest));
  
}
solve(
['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);


// set only for unique elements
// map when we care about the order of input
// object universal for data collection