// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  return +num.toString() .split('').reduce((sum, n)=>sum+n**2, '');
}




console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
