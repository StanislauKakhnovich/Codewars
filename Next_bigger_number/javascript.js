// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. 
// For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n){
  let copy = n;
  let arr = copy.toString().split('');
  let control = false;
  let strNumber = null;
  outer: for (let j=0; j<arr.length; j++){
    let rightDigit = arr[arr.length-1-j];
    for (let i=arr.length-1; i>0; i--){
      let leftDigit = arr[i-1];
      arr[i-1] = rightDigit;
      arr[i] = leftDigit;
      strNumber = +arr.join('');
      if(strNumber>n) {
        control=true;
        break outer;
      } 
    }
  }
  if (control) return strNumber;
  else return -1;
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(9));
console.log(nextBigger(111));