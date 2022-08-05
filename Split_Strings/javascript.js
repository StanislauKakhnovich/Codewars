// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final
//  pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  if(str.length%2!=0) str = str+"_";
  if(str === '') return [];
  else return str.replace(/.{2}/g, '$& ').trim().split(' ');
}


console.log(solution('abc'));
console.log(solution('abcdef'));
console.log(solution(''));

// function solution(s){
//   return (s+"_").match(/.{2}/g)||[]
// }
