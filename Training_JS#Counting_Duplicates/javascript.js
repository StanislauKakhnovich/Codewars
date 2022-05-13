// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that 
// occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
// and numeric digits.


function getCount(text){
  let arr = text.toLowerCase().split('').sort();
  let arrResult = [];

  for (let i=0; i<arr.length; i++) {
    if(arr[i]==arr[i+1]){
      if(!arrResult.some(elem=>elem==arr[i])){
        arrResult.push(arr[i]);
      }
    }
  }
return arrResult.length





}

console.log(getCount('aasd111'));
console.log(getCount("Indivisibility"));
console.log(getCount("Indivisibilities"));

