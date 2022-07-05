
// function closestPair(pointS) {
  // var arrLengths=[];
  // var arrConformity=[];
  // for (let i=0; i<pointS.length; i++){
  //   for (let j=i; j<pointS.length; j++){
  //     if (j==pointS.length-1) break;
  //     let x = Math.pow((pointS[i][0]-pointS[j+1][0]), 2)+Math.pow((pointS[i][1]-pointS[j+1][1]), 2);
  //     let lengthPoint=Math.sqrt(x);
  //     arrLengths.push(lengthPoint);
  //     let arrPairOfPoints=[pointS[i], pointS[j+1]];
  //     arrConformity.push(arrPairOfPoints);
  //   }
  // }
  // let minLength=Math.min.apply(null, arrLengths);
  // let indexMinLength=arrLengths.indexOf(minLength);
  // return arrConformity[indexMinLength];
  
// }

// console.time('First');
// console.log(closestPair([[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9]]));
// console.timeEnd('First');

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

function closestPairThird() {

  console.time('Third');
  var pS = [[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9],[2,3],[2,7],[5,4],[6,5],[6,9],[7,5],[8,9]];
  let map = new Map();
  var mL=(pS[0][0]-pS[1][0])**2 + (pS[0][1]-pS[1][1])**2;
  let distance;
  for (var i=0; i<pS.length; i++){
    for (var j=i; j<pS.length; j++){
      if (j==pS.length-1) break;
      var x0 = (pS[i][0]-pS[j+1][0]);
      var x1 = (pS[i][1]-pS[j+1][1]);
      distance = x0*x0+x1*x1;
      map.set(distance, [pS[i], pS[j+1]]);
      if (distance<mL) mL=distance;
    }
  }
  console.log(map.get(mL)) ;
  console.timeEnd('Third');

}

function closestPairSecond() {
  console.time('Second');
  var pS = [[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9],[2,3],[2,7],[5,4],[6,5],[6,9],[7,5],[8,9]];
  var aLs=[];
  var aC=[];
  for (var i=0; i<pS.length; i++){
    for (var j=i; j<pS.length; j++){
      if (j==pS.length-1) break;
      var x0 = (pS[i][0]-pS[j+1][0]);
      var x1 = (pS[i][1]-pS[j+1][1]);
      aLs.push(x0*x0+x1*x1);
      aC.push([pS[i], pS[j+1]]);
    }
  }
  var mL=aLs[0];
  var iML=0
  for (var i=0; i<aLs.length; i++) {
    if (aLs[i]<mL) {
      mL=aLs[i];
      iML=i;
    } 
  }
  console.log(aC[iML]) ;
  console.timeEnd('Second');
}

function closestPairFirst() {
  console.time('First');
  let pointS = [[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9],[2,3],[2,7],[5,4],[6,5],[6,9],[7,5],[8,9]];
  var arrLengths=[];
  var arrConformity=[];
  for (let i=0; i<pointS.length; i++){
    for (let j=i; j<pointS.length; j++){
      if (j==pointS.length-1) break;
      let x = Math.pow((pointS[i][0]-pointS[j+1][0]), 2)+Math.pow((pointS[i][1]-pointS[j+1][1]), 2);
      arrLengths.push(x);
      let arrPairOfPoints=[pointS[i], pointS[j+1]];
      arrConformity.push(arrPairOfPoints);
    }
  }
  let minLength=Math.min.apply(null, arrLengths);
  let indexMinLength=arrLengths.indexOf(minLength);
  console.log(arrConformity[indexMinLength]);
  console.timeEnd('First');
}






var btnS=document.getElementById('btnS');

//  btnS.addEventListener('click', closestPairFirst);
// btnS.addEventListener('click', closestPairSecond);
btnS.addEventListener('click', closestPairThird);

// console.time('Second');
// console.log(closestPair([[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,9]]));
// console.timeEnd('Second');