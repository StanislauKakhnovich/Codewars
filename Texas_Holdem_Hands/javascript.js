// Texas Hold'em is a Poker variant in which each player is given two "hole cards". Players then proceed to make a series of bets
//  while five "community cards" are dealt. If there are more than one player remaining when the betting stops, a showdown takes 
//  place in which players reveal their cards. Each player makes the best poker hand possible using five of the seven available cards 
//  (community cards + the player's hole cards).

// Possible hands are, in descending order of value:

// Straight-flush (five consecutive ranks of the same suit). Higher rank is better.
// Four-of-a-kind (four cards with the same rank). Tiebreaker is first the rank, then the rank of the remaining card.
// Full house (three cards with the same rank, two with another). Tiebreaker is first the rank of the three cards, then rank 
//of the  pair.
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
  let digitToImage=(digit=>{
    if(digit==11) return 'J';
    else if(digit==12) return 'Q';
    else if(digit==13) return 'K';
    else if(digit==14) return 'A';
  })

  arr=arr.map(card=> card.replace(/(J)|(Q)|(K)|(A)/, imageToDigit));

  let objResult={};
  let arrResult=[];

  let straightFlush = () =>{
    let arrControl = [[],[],[],[]];
    let arrStraightFlush=[];
    arr.forEach(card=>{
      if(card[card.length-1]=='♠') card.length<3 ? arrControl[0].push(card[0]) : arrControl[0].push(card.substr(0,2));
      else if(card[card.length-1]=='♦') card.length<3 ? arrControl[1].push(card[0]) : arrControl[1].push(card.substr(0,2));
      else if(card[card.length-1]=='♣') card.length<3 ? arrControl[2].push(card[0]) : arrControl[2].push(card.substr(0,2));
      else if(card[card.length-1]=='♥') card.length<3 ? arrControl[3].push(card[0]) : arrControl[3].push(card.substr(0,2));
    });
    arrControl.forEach(arr=>{
      if(arr.length>4){
        arr.sort((a,b)=>b-a);
        for (let i=0; i<arr.length; i++){
          if (arr[i]-arr[i+4] == 4) {
            arrStraightFlush=arr.slice(i,i+5);
          } 
        }
      }
    })
    if (arrStraightFlush.length==5 && arrStraightFlush[0]-arrStraightFlush[4]==4) {
      objResult.type="straight-flush";
      arrResult = arrStraightFlush;
      return true;
    } 
  }

  let fourOfAKind = () =>{
    let arrControl = [];
    let arrFourOfAKind=[];
    arr.forEach(card=>{
      card.length<3 ? arrControl.push(card[0]) : arrControl.push(card.substr(0,2));
    });
    arrControl.sort((a,b)=>b-a);
    for (let i=0; i<arrControl.length; i++){
      if (arrControl[i]-arrControl[i+3] == 0) {
        arrFourOfAKind=[...arrFourOfAKind, arrControl[i], arrControl[i+4]];
        objResult.type="four-of-a-kind";
        arrResult = arrFourOfAKind;
        return true;
      } 
    }
  }

  let fullHouse = () =>{
    let arrControl = [];
    let arrFullHouse=[];
    arr.forEach(card=>{
      card.length<3 ? arrControl.push(card[0]) : arrControl.push(card.substr(0,2));
    });
    arrControl.sort((a,b)=>b-a);
    for (let i=0; i<arrControl.length; i++){
      if (arrControl[i]-arrControl[i+2] == 0) {
        arrFullHouse=[...arrFullHouse, arrControl[i]];
        arrControl.splice(i,i+3);
      }
    }
    for (let i=0; i<arrControl.length; i++){
      if (arrControl[i]-arrControl[i+1] == 0) {
        arrFullHouse=[...arrFullHouse, arrControl[i]];
        break;
      }
    }
    if (arrFullHouse.length==2){
      objResult.type="full house";
      arrResult = arrFullHouse;
      return true;
    } 
  }

  let flush = () =>{
    let arrControl = [[],[],[],[]];
    let arrFlush=[];
    arr.forEach(card=>{
      if(card[card.length-1]=='♠') card.length<3 ? arrControl[0].push(card[0]) : arrControl[0].push(card.substr(0,2));
      else if(card[card.length-1]=='♦') card.length<3 ? arrControl[1].push(card[0]) : arrControl[1].push(card.substr(0,2));
      else if(card[card.length-1]=='♣') card.length<3 ? arrControl[2].push(card[0]) : arrControl[2].push(card.substr(0,2));
      else if(card[card.length-1]=='♥') card.length<3 ? arrControl[3].push(card[0]) : arrControl[3].push(card.substr(0,2));
    });
    arrControl.forEach(arr=>{
      if(arr.length>4){
        arr.sort((a,b)=>b-a);
        arrFlush=arr.slice(0,5);
      }
    })
    if (arrFlush.length>4 && arrFlush[0]-arrFlush[4]!=4) {
      objResult.type="flush";
      arrResult = arrFlush;
      return true;
    } 
  }

  let straight = () => {
    let arrControl = [];
    let arrStraight=[];
    arr.forEach(card=>{
      card.length<3 ? arrControl.push(card[0]) : arrControl.push(card.substr(0,2));
    });
    arrControl.sort((a,b)=>b-a);
    for (let i=0; i<arrControl.length; i++){
      if (arrControl[i]-arrControl[i+4] == 4) {
        arrStraight=arrControl.slice(i,i+5);
      } 
    }
    if (arrStraight.length>4 && arrStraight[0]-arrStraight[4]==4) {
      objResult.type="straight";
      arrResult = arrStraight;
      return true;
    } 
  }

  let threeOfAKind = () =>{
    let arrControl = [];
    let arrThreeOfAKind=[];
    arr.forEach(card=>{
      card.length<3 ? arrControl.push(card[0]) : arrControl.push(card.substr(0,2));
    });
    arrControl.sort((a,b)=>b-a);
    for (let i=0; i<arrControl.length; i++){
      if (arrControl[i]-arrControl[i+2] == 0) {
        arrThreeOfAKind=[...arrThreeOfAKind, arrControl[i], arrControl[i+3], arrControl[i+4]];
        objResult.type="three-of-a-kind";
        arrResult = arrThreeOfAKind;
        return true;
      } 
    }
  }

  let twoPair = () =>{
    let arrControl = [];
    let arrTwoPair=[];
    arr.forEach(card=>{
      card.length<3 ? arrControl.push(card[0]) : arrControl.push(card.substr(0,2));
    });
    arrControl.sort((a,b)=>b-a);
    for (let i=0; i<arrControl.length; i++){
      if (arrControl[i]-arrControl[i+1] == 0) {
        arrTwoPair=[...arrTwoPair, arrControl[i]];
        arrControl.splice(i,i+2);
      }
    }

    if (arrTwoPair.length==2){
      arrTwoPair=[...arrTwoPair, arrControl[0]];
      objResult.type="two pair";
      arrResult = arrTwoPair;
      return true;
    } 
  }

  let pair = () =>{
    let arrControl = [];
    let arrPair=[];
    arr.forEach(card=>{
      card.length<3 ? arrControl.push(card[0]) : arrControl.push(card.substr(0,2));
    });
    arrControl.sort((a,b)=>b-a);
    for (let i=0; i<arrControl.length; i++){
      if (arrControl[i]-arrControl[i+1] == 0) {
        arrPair=[...arrPair, arrControl[i]];
        arrControl.splice(i,i+2);
      }
    }

    if (arrPair.length==1){
      arrPair=[...arrPair, arrControl[0], arrControl[1], arrControl[2]];
      objResult.type="pair";
      arrResult = arrPair;
      return true;
    } 
  }



  let arrFunc = [straightFlush, fourOfAKind, fullHouse, flush, straight, threeOfAKind, twoPair, pair];

  arrFunc.find(f=>f()==true);
  arrResult=arrResult.map(card=> card.replace(/(11)|(12)|(13)|(14)/, digitToImage));
  objResult.ranks=arrResult;

   return objResult;
}

console.log(hand(['6♥','A♥'],['J♣','5♥','4♥','2♥','3♥']));
console.log(hand(['K♥','Q♥'],['J♥','9♥','10♥','2♥','3♦']));
console.log(hand(['J♠','J♦'],['J♣','J♥','9♥','2♥','3♦']));
console.log(hand(['7♠','7♦'],['7♣','9♥','9♥','8♥','3♦']));
console.log(hand(['6♥','A♥'],['J♣','5♥','10♥','2♥','3♥']));
console.log(hand(['6♥','A♥'],['J♣','5♥','4♦','2♥','3♠']));
console.log(hand(['J♠','J♦'],['J♣','8♥','9♥','2♥','3♦']));
console.log(hand(['J♠','J♦'],['3♣','10♥','9♥','2♥','3♦']));
console.log(hand(["A:♠", "A♦"], ["J♣", "5♥", "10♥", "2♥", "3♦"]));
// ♠ - 9824
// ♦ - 9830
// ♣ - 9827
// ♥ - 9829

