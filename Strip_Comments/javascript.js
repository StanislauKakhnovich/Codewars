// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace 
// at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  var result = input.replace(new RegExp('\s*'+markers[0].replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&')+'.*'), '');
  result = result.replace(new RegExp('\s*'+markers[1].replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&')+'.*$'), '');
  //result = result.replace(/(\s)\2/g, '');
  result = result.replace(/\s$/gm, '');
 // result = result.split(' ');
  return result;
};

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));

// function solution(input, markers) {
//   return input.split('\n').map(
//     line => markers.reduce(
//       (line, marker) => line.split(marker)[0].trim(), line
//     )
//   ).join('\n')
// }

// function solution(input, markers){
//   return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
// }

// function solution(input, markers){
//   return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
// }