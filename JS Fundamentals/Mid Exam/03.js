function solve(input){
  let listOfCards = input.shift().split(', ');
  let lengthOfCards = listOfCards.length;

  let n = Number(input.shift());
  let cardName = ' ';
  let index =  ' ';

  for (let i = 0; i < n; i++){
    let [command, key1, key2] = input[i].split(', ');
    
    switch (command){
      case "Add":
         cardName = key1;
        if(!listOfCards.includes(cardName)){
          listOfCards.push(cardName);
          console.log(`Card successfully added`);
        } else{
          console.log(`Card is already in the deck`);
        }
        break;

      case "Remove":
         cardName = key1;
        if(listOfCards.includes(cardName)){
          let index = listOfCards.indexOf(cardName);
          listOfCards.splice(index, 1);
          console.log(`Card successfully removed`);
        } else {
          console.log(`Card not found`);
        }
        break;

      case "Remove At":
        index = Number(key1);

        if(index >= 0 && index < listOfCards.length){
          listOfCards.splice(index, 1);
          console.log(`Card successfully removed`);
        }else{
          console.log(`Index out of range`);
        }
        break;

      case "Insert":
        index = Number(key1);
        cardName = key2;

        if(index >= 0 && index < listOfCards.length){
          //check if card is already in deck
          if(listOfCards.includes(cardName)){
            console.log(`Card is already added`);
          } else{
            listOfCards.splice(index, 0, cardName);
            console.log(`Card successfully added`);
          }
        } else{
          console.log(`Index out of range`);
        }
        
        break;
    }
  }
  
  console.log(listOfCards.join(', '));
}
/*solve(["Ace of Diamonds, Queen of Hearts, King of Clubs","3","Add, King of Diamonds","Insert, 2, Jack of Spades","Remove, Ace of Diamonds"]);
console.log(`----------------`);
console.log(`Card successfully added 
Card successfully added 
Card successfully removed 
Queen of Hearts, Jack of Spades, King of Clubs, King of Diamonds`);*/

/*solve(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts","2","Add, Two of Clubs","Remove, Five of Hearts"]);
console.log(`----------------`);
console.log(`Card is already in the deck 
Card not found 
Two of Clubs, King of Spades, Five of Spades, Jack of Hearts`);*/

solve(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"]);
console.log(`----------------`);
console.log(`Index out of range 
Card successfully removed 
Jack of Spades, Jack of Clubs`);



//deck of cards

