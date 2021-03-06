// The goal of this exercise is to convert a string to a new string where each character in the new string is
//  "(" if that character appears only once in the original string, or ")" if that character appears more than once
//   in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())" )())())
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", 
// the "XXX" is the expected result, not the input!

// function duplicateEncode(word){
  
//   let replaceFunction = (match)=>{
//     if (word.match(RegExp(match, 'gi')).length>1) return ")";
//     else return "(";
//   }
//   return word.replace(/./gi, replaceFunction);
// }

function duplicateEncode(word){
  let arr = word.toLowerCase().split('');
  let obj = {};
  arr.forEach(letter=>{
    if (!(letter in obj)) obj[letter] = 1;
    else if (letter in obj) obj[letter]++;
  });
  arr = arr.map(letter=>{
    if (obj[letter]>1) return letter = ")";
    else if (obj[letter]==1) return letter = "(";
  });
  return arr.join('') ;
}

// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }


console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode(" "));
console.log(duplicateEncode("(( @"));