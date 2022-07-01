// Texas Hold'em is a Poker variant in which each player is given two "hole cards". Players then proceed to make a series of bets
//  while five "community cards" are dealt. If there are more than one player remaining when the betting stops, a showdown takes 
//  place in which players reveal their cards. Each player makes the best poker hand possible using five of the seven available cards 
//  (community cards + the player's hole cards).

// Possible hands are, in descending order of value:

// Straight-flush (five consecutive ranks of the same suit). Higher rank is better.
// Four-of-a-kind (four cards with the same rank). Tiebreaker is first the rank, then the rank of the remaining card.
// Full house (three cards with the same rank, two with another). Tiebreaker is first the rank of the three cards, then rank of the 
// pair.
// Flush (five cards of the same suit). Higher ranks are better, compared from high to low rank.
// Straight (five consecutive ranks). Higher rank is better.
// Three-of-a-kind (three cards of the same rank). Tiebreaker is first the rank of the three cards, then the highest other rank, then 
// the second highest other rank.
// Two pair (two cards of the same rank, two cards of another rank). Tiebreaker is first the rank of the high pair, then the rank of 
// the low pair and then the rank of the remaining card.
// Pair (two cards of the same rank). Tiebreaker is first the rank of the two cards, then the three other ranks.
// Nothing. Tiebreaker is the rank of the cards from high to low.
// Given hole cards and community cards, complete the function hand to return the type of hand (as written above, 
//   you can ignore case) and a list of ranks in decreasing order of significance, to use for
//    comparison against other hands of the same type, of the best possible hand.

// hand(["A:♠", "A♦"], ["J♣", "5♥", "10♥", "2♥", "3♦"])
// // ...should return {type: "pair", ranks: ["A", "J", "10", "5"]}
// hand(["A♠", "K♦"], ["J♥", "5♥", "10♥", "Q♥", "3♥"])
// // ...should return {type: "flush", ranks: ["Q", "J", "10", "5", "3"]}
// EDIT: for Straights with an Ace, only the ace-high straight is accepted. An ace-low straight is invalid 
// (ie. A,2,3,4,5 is invalid). This is consistent with the author's reference solution. ~docgunthrop

function hand(holeCards, communityCards) {
  let arr = [...holeCards, ...communityCards];
  let imageToDigit=(image)=>{
    if(image=='J') return 11;
    else if(image=='Q') return 12;
    else if(image=='K') return 13;
    else if(image=='A') return 14;
  }
  arr=arr.map(card=> card.replace(/(J)|(Q)|(K)|(A)/, imageToDigit));
  let arrControl = [[],[],[],[]];
  arr.forEach(card=>{
    if(card[card.length-1]=='♠') card.length<3 ? arrControl[0].push(card[0]) : arrControl[0].push(card.substr(0,2));
    else if(card[card.length-1]=='♦') card.length<3 ? arrControl[1].push(card[0]) : arrControl[1].push(card.substr(0,2));
    else if(card[card.length-1]=='♣') card.length<3 ? arrControl[2].push(card[0]) : arrControl[2].push(card.substr(0,2));
    else if(card[card.length-1]=='♥') card.length<3 ? arrControl[3].push(card[0]) : arrControl[3].push(card.substr(0,2));
  });
  let arrStraightFlush=[];
  arrControl.forEach(arr=>{
    if(arr.length>4){
      arr.sort((a,b)=>b-a);
      console.log(arr);
      for (let i=0; i<arr.length; i++){
        if (arr[i]-arr[i+4] == 4) arrStraightFlush=arr.slice(i,i+5);
      }
    }
  })

  let digitToImage=(digit=>{
    if(digit==11) return 'J';
    else if(digit==12) return 'Q';
    else if(digit==13) return 'K';
    else if(digit==14) return 'A';
  })
  

  let arrResult = arrStraightFlush;
  arrResult=arrResult.map(card=> card.replace(/(11)|(12)|(13)|(14)/, digitToImage));

  let objResult={};
  if (arrStraightFlush.length==5) {
    objResult.type="straight-flush";
    objResult.ranks=arrResult;
  } 



   return objResult;
  // return {type:"TODO", ranks: []};
  
  // return communityCards[1].charCodeAt(1);
}


console.log(hand(['K♠','A♦'],['J♣','Q♥','9♥','2♥','3♦']));
console.log(hand(['K♥','Q♥'],['J♥','9♥','10♥','2♥','3♦']));
console.log(hand(['K♠','J♦'],['J♣','K♥','9♥','2♥','3♦']));

// ♠ - 9824
// ♦ - 9830
// ♣ - 9827
// ♥ - 9829

