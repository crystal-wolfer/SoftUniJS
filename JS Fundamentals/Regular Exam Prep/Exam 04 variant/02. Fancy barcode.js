function solve(input){
  let n = Number(input.shift());
  let pattern = /([@]#+)([A-Z]([A-Za-z0-9]){4,}[A-Z])([@]#+)/g;
  //let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g


  // extracting all matches
  while (n > 0){
    let barcode = input.shift();
    let match = barcode.match(pattern);
    let productGroup = '';

    if (match){
      let matchClean = match.join().split(/[\W]+/).slice(1,-1); //removing the weird characters and keeping a clean array with the names only by deleting the first and last elements

      let splitByNum = matchClean.join().split(/[\D]+/).slice(1,-1); // removing everything that is not a digit
  
      if (splitByNum.length == 0){
        productGroup = '00';
      };

      for (let el of splitByNum) {
        productGroup += el;
      }

      console.log(`Product group: ${productGroup}`);
    } else{
      console.log(`Invalid barcode`);
    }
    n--;
  }


}
solve(
  ["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]
);