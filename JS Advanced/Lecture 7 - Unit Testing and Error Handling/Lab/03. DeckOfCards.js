function printDeckOfCards(cards) {
  let face;
  let suit;
  let result = [];
  cards.forEach(element => {
      element = element.split('');
      if (element[0] === '1' && element[1] === '0') {
          face = '10';
          suit =element[2];
      } else {
          face = element[0];
          suit = element[1];
      }
      result.push((createCard(face,suit).toString()));
  });
  function createCard(face, suit) {
      const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const suits = {
          'S': '\u2660',
          'H': '\u2665',
          'D': '\u2666',
          'C': '\u2663',
      }
      if (faces.includes(face) == false) {
          return (`Invalid card: ${face}${suit}`);
      } else if (suit in suits == false) {
          return (`Invalid card: ${face}${suit}`);
      } else {
          let card = {
              face,
              suit,
              toString() {
                  return (this.face + suits[this.suit]);
              }
          }
          return card;

      }

  }
  console.log(result.join(' '))
  
}
printDeckOfCards(['5S', '3D', 'QD', '1C'])