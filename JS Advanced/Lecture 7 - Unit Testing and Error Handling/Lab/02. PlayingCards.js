function playingCards(card, suit) {
  // dictionary of cardSuites
  const dictCardSuites = {
    S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663'
  };
  // dictionary of validCards
  const validCards =['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q', 'K', 'A'];

  const isValidCard = validCards.includes(card);
  const isValidSuit = Object.keys(dictCardSuites).includes(suit);

  if (isValidCard && isValidSuit) {
    return {
      card,
      suit,
      toString() {
        return `${card}${dictCardSuites[suit]}`;
      }
    }
  } else{
    throw new Error ('Error')
  }

}

const card = playingCards('A', 'S');
card.toString();
const card2 = playingCards('10', 'H');
card2.toString();
const card3 = playingCards('1', 'C');
card3.toString();


// \u2660 – Spades (♠)
// \u2665 – Hearts (♥)
// \u2666 – Diamonds (♦)
// \u2663 – Clubs (♣)
