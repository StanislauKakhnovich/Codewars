// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
//sumStrings('123','456') => 579
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


function sumStrings(a,b) { 
  return (BigInt(a)+BigInt(b)).toString();
}

console.log(sumStrings('1', '2'));
console.log(sumStrings('123', '456'));
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));


// function sumStrings(a, b) {
//   var res = '', c = 0;
//   a = a.split('');
//   b = b.split('');
//   while (a.length || b.length || c) {
//     c += ~~a.pop() + ~~b.pop();
//     res = c % 10 + res;
//     c = c > 9;
//   }
//   return res.replace(/^0+/, '');
// }

// function sumStrings(a,b) { 
//   const sum = (Number(a) + Number(b)).toString();
//   if (sum.includes('.') === false) return sum;
//   const parts = sum.split(/\.|e\+/);
//   parts[1] = parts[1].slice(0, -1);
//   const len = Number(parts[2]) - parts[1].length;
//   parts[2] = Number(a.slice(-len)) + Number(b.slice(-len));
//   return parts.join('');
// }
