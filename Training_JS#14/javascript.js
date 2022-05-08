//rgb to hex

function colorOf(r,g,b){
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);
  let hex = `#${red.length == 1?0+red:red}${green.length == 1?0+green:green}${blue.length == 1?0+blue:blue}`
  return hex;
}

  console.log(colorOf(255,10,0));
