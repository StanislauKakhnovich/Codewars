// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

// For example:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// What you need to think about is how to judge it correctly and effectively and don't forget isNaN().



/*
function whatNumberIsIt(n){
  if (n === Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  else if (n === Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  else if (isNaN(n)) return "Input number is Number.NaN";
  else if (n === Number.NEGATIVE_INFINITY) return "Input number is Number.NEGATIVE_INFINITY";
  else if (n === Number.POSITIVE_INFINITY) return "Input number is Number.POSITIVE_INFINITY";
  else return `Input number is ${n}`
  
}
*/

function whatNumberIsIt(n){
  if (isNaN(n)) return "Input number is Number.NaN";
  const possibilities = {
    [Number.MAX_VALUE]: "Input number is Number.MAX_VALUE",
    [Number.MIN_VALUE]: "Input number is Number.MIN_VALUE",
    //[Number.NaN]: "Input number is Number.NaN",
    [Number.NEGATIVE_INFINITY]: "Input number is Number.NEGATIVE_INFINITY",
    [Number.POSITIVE_INFINITY]: "Input number is Number.POSITIVE_INFINITY",
  }
  return possibilities[n] || `Input number is ${n}`
}


  console.log(whatNumberIsIt(5/0));