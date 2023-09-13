function stringLength(string1, string2, string3) {
  let sumLength = string1.length + string2.length + string3.length;
  let avarageLength = Math.floor(sumLength / 3);

  console.log(sumLength);
  console.log(avarageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');