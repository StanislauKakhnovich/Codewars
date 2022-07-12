// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
  let tower = [];
  let star = "*";
  for (let i=0; i<nFloors; i++){
    let space = "";
    for (let j=i; j<nFloors-1; j++){
      space+=" ";
    }
    let floor = space+star+space;
    tower.push(floor);
    star = "*"+star+"*";
    
  }
  return tower;
}


console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(10));


// function towerBuilder(n) {
//   return Array.from({length: n}, function(v, k) {
//     const spaces = ' '.repeat(n - k - 1);
//     return spaces + '*'.repeat(k + k + 1) + spaces;
//   });
// }