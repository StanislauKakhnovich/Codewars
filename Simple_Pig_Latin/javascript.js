// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
 let arr = str.split(' ');
 for (let i=0; i<arr.length; i++){
   if (arr[i]!='!'&&arr[i]!='?') {
    let firstLetter=arr[i][0];
   arr[i]=arr[i].slice(1)+firstLetter+'ay';
   }
   
 }
 return arr.join(' ');
}

// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));

