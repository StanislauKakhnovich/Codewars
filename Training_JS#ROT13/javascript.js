// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters 
// included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
// like in the original Rot13 "implementation".


function rot13(message){
  let arr = message.split('');
  let arr1 = [];
  arr.forEach(elem=>{
    let charCode = elem.charCodeAt();
    if((charCode >= 65) && (charCode <= 77)) {
      charCode=charCode+13;
    }
    else if (((charCode >= 97) && (charCode <= 109))) {
      charCode=charCode+13;
    }
    else if ((charCode >= 78) && (charCode <=90)) {
      charCode=charCode-13;
    }
    else if ((charCode >= 110) && (charCode <=122)) {
      charCode=charCode-13;
    }
    let charStr = String.fromCharCode(charCode);
    arr1.push(charStr);
  })
  return arr1.join('');
}

console.log(rot13('23TEST'));
var das = "e"
console.log(das.charCodeAt());
console.log(String.fromCharCode(114));
//65-90 97-122
