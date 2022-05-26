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
  let arr1 = [];
  let arr = copy.toString().split('');
  for (let i=arr.length-1; i>=0; i--) {
    let control = arr.pop();
    if (arr[i-1]>=control){
      arr1.unshift(control);
    }
     else if(arr[i-1]<control) {
      arr1.push(arr[i-1]);
      arr[i-1]=control;
      break;
    }
  }
  arr1.sort();
  let arr2=arr.concat(arr1);
  copy=+arr2.join('');
  if (copy>n) return copy;
  else return -1;
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(9));

console.log(nextBigger(6405974321));
//  6407123459

 701001726021872

//172602710817200
  //if (rightDigit>0) {}

        // console.log(rightDigit);
        // console.log(leftDigit);
        // console.log(counter);
        // console.log(strNumber);
        // console.log(arr);

 //       46849585  46849855

//  if(strNumber>n) {
//   control=true;
//   break outer;
// } 