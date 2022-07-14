// Build Tower Advanced
// Build Tower by the following given arguments:
// number of floors (integer and always greater than 0)
// block size (width, height) (integer pair and always greater than (0, 0))

// Tower block unit is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// Have fun!

// for example, a tower of 3 floors with block size = (2, 3) looks like below

// [
//   '    **    ',
//   '    **    ',
//   '    **    ',
//   '  ******  ',
//   '  ******  ',
//   '  ******  ',
//   '**********',
//   '**********',
//   '**********'
// ]
// and a tower of 6 floors with block size = (2, 1) looks like below

// [
//   '          **          ', 
//   '        ******        ', 
//   '      **********      ', 
//   '    **************    ', 
//   '  ******************  ', 
//   '**********************'
// ]


function towerBuilder(nFloors, nBlockSz) {
  let nfloors = nBlockSz[1];
  let block = nBlockSz[0];
    return Array.from({length: nFloors*nfloors}, function(v, k) {
    const spaces = ' '.repeat((nFloors-Math.floor(k/nfloors)-1)*block);
    return spaces + '*'.repeat(block*(2*Math.floor(k/nfloors)+1)) + spaces;
  });
}


console.log(towerBuilder(1, [1, 1]));
console.log(towerBuilder(3, [4, 2]));
