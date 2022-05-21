// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
//sumStrings('123','456') => 579
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


// function sumStrings(a,b) { 
//   return (BigInt(a)+BigInt(b)).toString();
// }

// console.log(sumStrings('1', '2'));
// console.log(sumStrings('123', '456'));
// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));


function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}

console.log(sumStrings('1', '2'));
console.log(sumStrings('123', '456'));
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));

// function sumStrings(a,b) { 
//   let sum = (Number(a) + Number(b)).toString();
//   if (!sum.includes('.')) return sum;
//   let arrParts = sum.split(/\.|e\+/);
//   arrParts[1] = arrParts[1].slice(0, -1);
//   const section = Number(arrParts[2]) - arrParts[1].length;
//   arrParts[2] = Number(a.slice(-section)) + Number(b.slice(-section));
//   return arrParts.join('');
// }

// console.log(sumStrings('1', '2'));
// console.log(sumStrings('123', '456'));
// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));


// let c=3
// console.log("395"%10);

// let c=false;
// c+=1+2;

// console.log(c);

// let arr=[1,2,3,4,5,6,7,8,'9'];
// let arr1=[1,2,3,4,'5'];
// let c=3;
// c+=arr.pop()+arr1.pop()

// console.log(c);