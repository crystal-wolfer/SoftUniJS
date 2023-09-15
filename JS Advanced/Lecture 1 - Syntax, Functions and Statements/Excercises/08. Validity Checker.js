function validityCheck(x1, y1, x2, y2) {
  // x1, y1 to  0,0
  let d1 = Math.sqrt(x1**2 + y1**2);
  // x2, y2 to 0,0
  let d2 = Math.sqrt(x2**2 + y2**2);
  // x1, y1 to x2, y2
  let d3 = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

  let d1isValid = Number.isInteger(d1);
  let d2isValid = Number.isInteger(d2);
  let d3isValid = Number.isInteger(d3);

  console.log(`{${x1}, ${y1}} to {0, 0} is ${d1isValid ? 'valid' : 'invalid'}`);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${d2isValid ? 'valid' : 'invalid'}`);
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${d3isValid ? 'valid' : 'invalid'}`);

}
validityCheck(3, 0, 0, 4);
validityCheck(2, 1, 1, 1);