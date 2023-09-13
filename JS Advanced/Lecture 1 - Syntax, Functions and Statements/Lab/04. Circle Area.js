function circleArea (input){
  
  // check in input is number
  if (typeof(input) != 'number'){
    console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    return;
  } 
  else {
    let r = input;
    let area = Math.PI * r * r;
    console.log(area.toFixed(2));
  }
}
circleArea(5);
circleArea('name');