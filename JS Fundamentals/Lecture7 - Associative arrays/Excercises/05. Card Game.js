function solve(input){
  // instead of using switch to calculate the cards points we can use objects that store the type and value of the card(cardType) and the cardPower based on the card power
  let cardType ={
    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1
  }

  let cardPower = {
    '1': 10,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }
  // create collection for each element 
  let players = {}; 

  // for each element of the input parse the element and store it in the collection, if person is not recorded in the collection create new Set and add new cards to the persons set
  input.forEach(element => {
    let [name, cards] = element.split(': ');
    cards = cards.split(', ');
    

    if (!players.hasOwnProperty(name)) {
      players[name] = new Set();
    }

    cards.forEach(card => {
      players[name].add(card);
    })

  })

  //for each entry in the collection: for each card calculate the points, sum all points for each person
  for(let [name, cards] of Object.entries(players)) {
    let sum = 0;
    for (let card of cards) {
      let curCardPower = cardPower[card[0]];
      let curCardType = cardType[card[card.length-1]];

      sum += curCardPower*curCardType;
    }

    // print each person and the sum points
    console.log(`${name}: ${sum}`);;
  }
  
}
solve(
  [
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
  ]   
);

//(S -> 4, H-> 3, D -> 2, C -> 1)
