// Given a number of points on a plane, your task is to find two points with the smallest distance between them in 
// linearithmic O(n log n) time.

// Example
//   1  2  3  4  5  6  7  8  9
// 1  
// 2    . A
// 3                . D
// 4                   . F       
// 5             . C
// 6              
// 7                . E
// 8    . B
// 9                   . G
// For the plane above, the input will be:

// [
//   [2,2], // A
//   [2,8], // B
//   [5,5], // C
//   [6,3], // D
//   [6,7], // E
//   [7,4], // F
//   [7,9]  // G
// ]
// => closest pair is: [[6,3],[7,4]] or [[7,4],[6,3]]
// (both answers are valid)
// The two points that are closest to each other are D and F.
// Expected answer should be an array with both points in any order.

// Goal
// The goal is to come up with a function that can find two closest points for any arbitrary array of points, in a linearithmic time.

// Note: for compatibility reasons, your function will be called with one additional parameter, a distance calculation function. 
// However you can completely ignore it, and you do not have to account for it - it's there only to keep compatibility with old 
// solutions.





// Calculate a pair of closest points in linearithmic time
function closestPair(pointS) {
  var arrLengths=[];
  var arrConformity=[];
  for (let i=0; i<pointS.length; i++){
    for (let j=i; j<pointS.length; j++){
      if (j==pointS.length-1) break;
      let x = Math.pow((pointS[i][0]-pointS[j+1][0]), 2)+Math.pow((pointS[i][1]-pointS[j+1][1]), 2);
      let lengthPoint=Math.sqrt(x);
      arrLengths.push(lengthPoint);
      let arrPairOfPoints=[pointS[i], pointS[j+1]];
      arrConformity.push(arrPairOfPoints);
    }
  }
  let minLength=Math.min.apply(null, arrLengths);
  let indexMinLength=arrLengths.indexOf(minLength);
 
  return arrConformity[indexMinLength];
}


//var points = ;

console.log(closestPair([[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9]]));

