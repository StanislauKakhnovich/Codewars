// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u 
// (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency

function dblLinear(n) {
  let arr = [1,3,4];
  let controlNum = 3*(2*n)+1;
  let y=0;
  let z=0;
  let i=1;
  let compare = (a,b)=>a-b;
  while(controlNum>z){
    y = 2*arr[i]+1
    z = 3*arr[i]+1;
    arr.push(y);
    arr.push(z);
    // y = 2*arr[i+1]+1;
    // z = 3*arr[i+1]+1;
    // arr.push(y);
    // arr.push(z);
    i++;
 
  arr.sort(compare);
  }
// for (let i=0; i<arr.length; i++){
//   if(arr[i]>(2*n+1)) return arr[i];
// }
   return arr;
}

console.log(dblLinear(20));



                      

