// You are provided a 2 dimensional array. You must test if each value within the sub arrays is larger than the given test value n.

// Return true if so, false if not.

// Code length limit : *** 60 characters ***

// function everyEvery(a,n){
// return a.every(arr=>arr.every(num=>num>n));
// }
everyEvery=(a,n)=>a.every(m=>m.every(b=>b>n))


console.log(everyEvery([[66, 101], [99, 88], [77, 10]], 100));
console.log(everyEvery([[78, 117], [110, 99, 104], [117, 107, 115]], 8));

