// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a 
// hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of 
// that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
  let red = (r>255?255:r<0?0:r).toString(16).toUpperCase();
  let green = (g>255?255:g<0?0:g).toString(16).toUpperCase();
  let blue = (b>255?255:b<0?0:b).toString(16).toUpperCase();
  let hex = `${red.length == 1?0+red:red}${green.length == 1?0+green:green}${blue.length == 1?0+blue:blue}`
  return hex;
}

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0,0,0));
console.log(rgb(148, 0, 211));
console.log(rgb(0, 0, -20));

// function rgb(r, g, b){
//   return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }