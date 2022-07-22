// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let arrZero = [];
  arr.forEach(e=>{if(e===0) arrZero.push(0)});
  arr = arr.filter(e=>e!==0);
  return arr.concat(arrZero);
}


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }