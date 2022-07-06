
// function closestPair(pS) {
//   console.time('Second');
//   var aLs=[];
//   var aC=[];
//   for (var i=0; i<pS.length; i++){
//     for (var j=i; j<pS.length; j++){
//       if (j==pS.length-1) break;
//       var x0 = (pS[i][0]-pS[j+1][0]);
//       var x1 = (pS[i][1]-pS[j+1][1]);
//       aLs.push(x0*x0+x1*x1);
//       aC.push([pS[i], pS[j+1]]);
//     }
//   }
//   var mL=aLs[0];
//   var iML=0
//   for (var i=0; i<aLs.length; i++) {
//     if (aLs[i]<mL) {
//       mL=aLs[i];
//       iML=i;
//     } 
//   }
//   console.log(aC[iML]) ;
//   console.time('Second');
// }

// console.time('Second');
// console.log(closestPair([[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9]]));
// console.timeEnd('Second');

// function closestPairThird() {

//   console.time('Third');
//   var pS = [[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9],[2,3],[2,7],[5,4],[6,5],[6,9],[7,5],[8,9]];
//   let map = new Map();
//   var mL=(pS[0][0]-pS[1][0])**2 + (pS[0][1]-pS[1][1])**2;
//   let distance;
//   for (var i=0; i<pS.length; i++){
//     for (var j=i; j<pS.length; j++){
//       if (j==pS.length-1) break;
//       var x0 = (pS[i][0]-pS[j+1][0]);
//       var x1 = (pS[i][1]-pS[j+1][1]);
//       distance = x0*x0+x1*x1;
//       map.set(distance, [pS[i], pS[j+1]]);
//       if (distance<mL) mL=distance;
//     }
//   }
//   console.log(map.get(mL)) ;
//   console.timeEnd('Third');

// }

// function closestPairSecond() {
//   console.time('Second');
//   var pS = [[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9],[2,3],[2,7],[5,4],[6,5],[6,9],[7,5],[8,9]];
//   var aLs=[];
//   var aC=[];
//   for (var i=0; i<pS.length; i++){
//     for (var j=i; j<pS.length; j++){
//       if (j==pS.length-1) break;
//       var x0 = (pS[i][0]-pS[j+1][0]);
//       var x1 = (pS[i][1]-pS[j+1][1]);
//       aLs.push(x0*x0+x1*x1);
//       aC.push([pS[i], pS[j+1]]);
//     }
//   }
//   var mL=aLs[0];
//   var iML=0
//   for (var i=0; i<aLs.length; i++) {
//     if (aLs[i]<mL) {
//       mL=aLs[i];
//       iML=i;
//     } 
//   }
//   console.log(aC[iML]) ;
//   console.timeEnd('Second');
// }

// function closestPairFirst() {
//   console.time('First');
//   let pointS = [[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9],[2,3],[2,7],[5,4],[6,5],[6,9],[7,5],[8,9]];
//   var arrLengths=[];
//   var arrConformity=[];
//   for (let i=0; i<pointS.length; i++){
//     for (let j=i; j<pointS.length; j++){
//       if (j==pointS.length-1) break;
//       let x = Math.pow((pointS[i][0]-pointS[j+1][0]), 2)+Math.pow((pointS[i][1]-pointS[j+1][1]), 2);
//       arrLengths.push(x);
//       let arrPairOfPoints=[pointS[i], pointS[j+1]];
//       arrConformity.push(arrPairOfPoints);
//     }
//   }
//   let minLength=Math.min.apply(null, arrLengths);
//   let indexMinLength=arrLengths.indexOf(minLength);
//   console.log(arrConformity[indexMinLength]);
//   console.timeEnd('First');
// }






// var btnS=document.getElementById('btnS');

//  btnS.addEventListener('click', closestPairFirst);
// btnS.addEventListener('click', closestPairSecond);
// btnS.addEventListener('click', closestPairThird);

// console.time('Second');
// console.log(closestPair([[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9]]));
// console.timeEnd('Second');

function closestPair(pointS) {
  pointS.sort((a,b)=>a[0]-b[0]);
  let middleX = Math.ceil(pointS[pointS.length-1][0]/2);
  let pointS1 = pointS.filter(arr=> arr[0]<middleX);
  let pointS2 = pointS.filter(arr=> arr[0]>middleX);

  var arrLengths1=[];
  var arrConformity1=[];
  var x;
  var arrPairOfPoints;
  for (let i=0; i<pointS1.length; i++){
    for (let j=i; j<pointS1.length; j++){
      if (j==pointS1.length-1) break;
      x = Math.pow((pointS1[i][0]-pointS1[j+1][0]), 2)+Math.pow((pointS1[i][1]-pointS1[j+1][1]), 2);
      arrLengths1.push(x);
      arrPairOfPoints=[pointS1[i], pointS1[j+1]];
      arrConformity1.push(arrPairOfPoints);
    }
  }
  let minLength1=Math.min.apply(null, arrLengths1);
 
  var arrLengths2=[];
  var arrConformity2=[];
  for (let i=0; i<pointS2.length; i++){
    for (let j=i; j<pointS2.length; j++){
      if (j==pointS2.length-1) break;
      x = Math.pow((pointS2[i][0]-pointS2[j+1][0]), 2)+Math.pow((pointS2[i][1]-pointS2[j+1][1]), 2);
      arrLengths2.push(x);
      arrPairOfPoints=[pointS2[i], pointS2[j+1]];
      arrConformity2.push(arrPairOfPoints);
    }
  }
  let minLength2=Math.min.apply(null, arrLengths2);

  let minLength;
  minLength1<minLength2 ? minLength=minLength1 : minLength=minLength2;

  let pointS3 = pointS.filter(arr=> arr[0]>(middleX-Math.ceil(minLength))&&arr[0]<(middleX+Math.ceil(minLength)));

  var arrLengths3=[];
  var arrConformity3=[];
  for (let i=0; i<pointS3.length; i++){
    for (let j=i; j<pointS3.length; j++){
      if (j==pointS3.length-1) break;
      x = Math.pow((pointS3[i][0]-pointS3[j+1][0]), 2)+Math.pow((pointS3[i][1]-pointS3[j+1][1]), 2);
      arrLengths3.push(x);
      arrPairOfPoints=[pointS3[i], pointS3[j+1]];
      arrConformity3.push(arrPairOfPoints);
    }
  }
  let minLength3=Math.min.apply(null, arrLengths3);

    if (minLength1<=minLength2&&minLength1<=minLength3){
      let indexMinLength1=arrLengths1.indexOf(minLength1);
      return arrConformity1[indexMinLength1];
    }
    else if (minLength1>=minLength2&&minLength2<=minLength3){
      let indexMinLength2=arrLengths2.indexOf(minLength2);
      return arrConformity2[indexMinLength2];
  }
  else if (minLength1>=minLength3&&minLength2>=minLength3){
    let indexMinLength3=arrLengths3.indexOf(minLength3);
    return arrConformity3[indexMinLength3];
  }
}

console.log(closestPair([[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9]]));




// function closestPair(pointS) {
//   pointS.sort((a,b)=>a[0]-b[0]);
//   let quatro1 = Math.ceil(pointS[pointS.length-1][0]/4);
//   let quatro2 = quatro1*2;
//   let quatro3 = quatro1*3;
//   let pointS1 = pointS.filter(arr=> arr[0]<quatro1);
//   let pointS2 = pointS.filter(arr=> arr[0]>quatro1&&arr[0]<quatro2);
//   let pointS3 = pointS.filter(arr=> arr[0]>quatro2&&arr[0]<quatro3);
//   let pointS4 = pointS.filter(arr=> arr[0]>quatro3);

//   var arrLengths1=[];
//   var arrConformity1=[];
//   var x;
//   var arrPairOfPoints;
//   for (let i=0; i<pointS1.length; i++){
//     for (let j=i; j<pointS1.length; j++){
//       if (j==pointS1.length-1) break;
//       x = Math.pow((pointS1[i][0]-pointS1[j+1][0]), 2)+Math.pow((pointS1[i][1]-pointS1[j+1][1]), 2);
//       arrLengths1.push(x);
//       arrPairOfPoints=[pointS1[i], pointS1[j+1]];
//       arrConformity1.push(arrPairOfPoints);
//     }
//   }
//   let minLength1=Math.min.apply(null, arrLengths1);
 
//   var arrLengths2=[];
//   var arrConformity2=[];
//   for (let i=0; i<pointS2.length; i++){
//     for (let j=i; j<pointS2.length; j++){
//       if (j==pointS2.length-1) break;
//       x = Math.pow((pointS2[i][0]-pointS2[j+1][0]), 2)+Math.pow((pointS2[i][1]-pointS2[j+1][1]), 2);
//       arrLengths2.push(x);
//       arrPairOfPoints=[pointS2[i], pointS2[j+1]];
//       arrConformity2.push(arrPairOfPoints);
//     }
//   }
//   let minLength2=Math.min.apply(null, arrLengths2);

//   var arrLengths3=[];
//   var arrConformity3=[];
//   for (let i=0; i<pointS3.length; i++){
//     for (let j=i; j<pointS3.length; j++){
//       if (j==pointS3.length-1) break;
//       x = Math.pow((pointS3[i][0]-pointS3[j+1][0]), 2)+Math.pow((pointS3[i][1]-pointS3[j+1][1]), 2);
//       arrLengths3.push(x);
//       arrPairOfPoints=[pointS3[i], pointS3[j+1]];
//       arrConformity3.push(arrPairOfPoints);
//     }
//   }
//   let minLength3=Math.min.apply(null, arrLengths3);

//   var arrLengths4=[];
//   var arrConformity4=[];
//   for (let i=0; i<pointS4.length; i++){
//     for (let j=i; j<pointS4.length; j++){
//       if (j==pointS4.length-1) break;
//       x = Math.pow((pointS4[i][0]-pointS4[j+1][0]), 2)+Math.pow((pointS4[i][1]-pointS4[j+1][1]), 2);
//       arrLengths4.push(x);
//       arrPairOfPoints=[pointS4[i], pointS4[j+1]];
//       arrConformity4.push(arrPairOfPoints);
//     }
//   }
//   let minLength4=Math.min.apply(null, arrLengths4);

//   let minLength12;
//   minLength1<minLength2 ? minLength12=minLength1 : minLength12=minLength2;

//   let pointS12 = pointS.filter(arr=> arr[0]>(quatro1-Math.ceil(minLength12))&&arr[0]<(arr[0]+Math.ceil(minLength12)));

//   var arrLengths12=[];
//   var arrConformity12=[];
//   for (let i=0; i<pointS12.length; i++){
//     for (let j=i; j<pointS12.length; j++){
//       if (j==pointS12.length-1) break;
//       x = Math.pow((pointS12[i][0]-pointS12[j+1][0]), 2)+Math.pow((pointS12[i][1]-pointS12[j+1][1]), 2);
//       arrLengths12.push(x);
//       arrPairOfPoints=[pointS12[i], pointS12[j+1]];
//       arrConformity12.push(arrPairOfPoints);
//     }
//   }
//   let minLength_12=Math.min.apply(null, arrLengths12);

// //   if (minLength1<=minLength2&&minLength1<=minLength3){
// //      let indexMinLength1=arrLengths1.indexOf(minLength1);
// //      return arrConformity1[indexMinLength1];
// //   }
// //   else if (minLength1>=minLength2&&minLength2<=minLength3){
// //     let indexMinLength2=arrLengths2.indexOf(minLength2);
// //     return arrConformity2[indexMinLength2];
// //  }
// //  else if (minLength1>=minLength3&&minLength2>=minLength3){
// //   let indexMinLength3=arrLengths3.indexOf(minLength3);
// //   return arrConformity3[indexMinLength3];
// // }

// return pointS2


// }

// console.log(closestPair([[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9]]));