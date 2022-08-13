// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace,
//  while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part
//   of the word in this kata.

function reverse(str){

    let arr = str.split(' ');
    arr = arr.map((word, i)=>{
        if(i%2!=0) return word.split('').reverse().join('');
        else return word;
    })
    return arr.join(' ').trim();

}


console.log(reverse("Reverse this string, please!"));
console.log(reverse("I really don't like reversing strings!"));
console.log(reverse(""));