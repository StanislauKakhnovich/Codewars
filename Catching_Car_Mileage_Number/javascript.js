// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and 
// then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up 
// that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 
// or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns 
// a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number
//  is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// // "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// // progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// // nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers 
//   spell funny words...)
// You should only ever output 0, 1, or 2.

function isInteresting(number, awesomePhrases) {
  
  let controlIncrease = number =>{
    let arr = (+number.toString().split('').reverse().join('')).toString().split('').reverse();
    let counter=0;
    for (let i=0; i<arr.length-1; i++) {
      if (arr[i]==(arr[i+1]-1)) counter++;
    }
    if (counter==arr.length-1 && arr.length>2) return true; 
    else return false;
  }

  let controlDecrease = number =>{
    let arr = number.toString().split('').reverse();
    let counter=0;
    for (let i=0; i<arr.length-1; i++) {
      if (arr[i]==(arr[i+1]-1)) counter++;
    }
    if (counter==arr.length-1 && arr.length>2) return true; 
    else return false;
  }

  let isPalindrome = number => {
    let arr = number.toString().split('');
    let counter=0;
    for (let i=0; i<~~(arr.length/2); i++){
      if (arr[i]==arr[arr.length-1-i]) {
        counter++;
      }
    }
    if (counter==~~(arr.length/2)&& arr.length>2) return true;
    else return false;
  }

  let result=0;
  if(number<98) result=0;
  else {
    
    if (awesomePhrases.some(elem=>(elem==number+1)||(elem==number+2))) result=1;
    if (/^[1-9]{1}0{2,}/.test((number+1).toString())||/^[1-9]{1}0{2,}/.test((number+2).toString())) result=1;
    if (/^([1-9]){1}\1{2,}\b/.test((number+1).toString())||/^([1-9]){1}\1{2,}\b/.test((number+2).toString())) result=1;
    if (controlIncrease(number+1)||controlIncrease(number+2)) result = 1;
    if (controlDecrease(number+1)||controlDecrease(number+2)) result = 1;
    if (isPalindrome(number+1)||isPalindrome(number+2)) result = 1;

    if (awesomePhrases.some(elem=>elem==number)) result=2;
    if (/^[1-9]{1}0{2,}\b/.test(number.toString())) result=2;
    if (/^([1-9]){1}\1{2,}\b/.test(number.toString())) result=2;
    if (controlIncrease(number)&& number>98) result = 2;
    if (controlDecrease(number)) result = 2;
    if (isPalindrome(number)) result = 2;

    
  }
  return result;
}

// function isInteresting(number, awesomePhrases) {
//   var tests = [
//     function(n) { return /^\d00+$/.test(n); },
//     function(n) { return /^(\d)\1+$/.test(n); },
//     function(n) { return RegExp(n).test(1234567890); },
//     function(n) { return RegExp(n).test(9876543210); },
//     function(n) { return n + '' == (n + '').split('').reverse().join(''); },
//     function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
//   ];
  
//   var interesting = 0;
//   tests.some(function(test) {
//     if (number > 99 && test(number))
//       return interesting = 2;
//     else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
//       interesting = 1;
//   });
//   return interesting;
// }


console.log(isInteresting(987654320, [1337, 256]));
console.log(isInteresting(80083, [1337, 256]));
console.log(isInteresting(998, []));
console.log(isInteresting(999, []));
console.log(isInteresting(1234565, []));
console.log(isInteresting(875, []));
console.log(isInteresting(1132309, []));
console.log(isInteresting(1335, [1337, 256]));
console.log(isInteresting(1336, [1337, 256]));
console.log(isInteresting(1337, [1337, 256]));

