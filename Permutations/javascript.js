// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, 
// you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.



function permutations(string){
  let arr = string.split('');
  let arrCopy = [...arr];

  let numeratorF = 1;
  let lengthF = arr.length;
  for (let i=lengthF; i>=1; i--){
    numeratorF=numeratorF*i;
  }

  let arrBig = [];
  while (arr.length>0) {
    let arrControl=[...arr];
    let arrMiddle=arrControl.filter(elem=>elem==arr[0]);
    arr=arr.filter(elem=>elem!=arr[0]);
    arrBig.push(arrMiddle);
  }
  let arrLengths = arrBig.map(elem => elem=elem.length);
  let arrFactorials = arrLengths.map(elem => {
    let factorial = 1;
    for (let i=elem; i>=1; i--){
      factorial=factorial*i;
    }
    return elem=factorial;
  });
let denomiratorF = arrFactorials.reduce((result,elem)=>result*elem, 1)

let numberCombinations = numeratorF/denomiratorF;

let arrResult=[];
while(arrResult.length<numberCombinations){
  let i=Math.floor(Math.random()*(lengthF+1));
  let j=Math.floor(Math.random()*(lengthF+1));
  let leftNumber=arrCopy[i];
  let rightNumber=arrCopy[j];
  arrCopy[i]=rightNumber;
  arrCopy[j]=leftNumber;
  let arrControl = [...arrCopy];
  let str = arrControl.join('');
    if(!arrResult.includes(str)){
        arrResult.push(str);
    }
}
return arrResult;
}

console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('aabb'));
console.log(permutations('abcd'));



// function permutations(str) {
//   return (str.length <= 1) ? [str] :
//           Array.from(new Set(
//             str.split('')
//                .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
//                .reduce((r, x) => r.concat(x), [])
//           ));
//  }

// const unique = xs => [ ...new Set(xs) ]
// const concat = (a, b) => [ ...a, ...b ] 
// const drop = i => xs => [ ...xs.slice(0, i), ...xs.slice(i + 1) ]

// const permute = (x, i, xs) => 
//   combinations(drop(i)(xs)).map(y => x + y)

// const combinations = s =>
//   s.length === 1 ? [ s ] : [ ...s ].map(permute).reduce(concat)

// const permutations = s => unique(combinations(s))

// function permutations(string) {
//   var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
//   if(string.length == 1) return [string];
//   arr.forEach(function(v, i, arr) {
//     if(heads.indexOf(v) == -1) {
//       heads.push(v);
//       tmp.splice(tmp.indexOf(v), 1);
//       permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
//       tmp.push(v);
//     }
//   });
//   return out;
// }

// function permutations(string) {
//   return (string.length == 1) ? [string] : string.split('').map(
//      (e, i) => permutations(string.slice(0,i) + string.slice(i+1)).map((e2) => e+e2)
//   ).reduce((r,e) => r.concat(e)).sort().filter((e,i,a) => (i==0) || a[i-1] != e);
// }

// function permutations(string) {
//   if (string.length <= 1) {
//     return [string];
//   }
//   var perms = [];
//   for (var i = 0; i < string.length; i++) {
//     perms = perms.concat(permutations(string.substring(0, i) + string.substring(i + 1)).map(function(e) {
//       return string[i] + e;
//     }).filter(function(e) {
//       return perms.indexOf(e) === -1;
//     }));
//   }
//   return perms;
// }