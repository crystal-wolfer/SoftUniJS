function storeCatalogue(array){
  const sorterArray = array.sort((a, b) => a.localeCompare(b));
  
  // creating obj that keepa all elements with the same letters in followinf format char : [ {Apricot : 20.4}]
  const catalogue = {};
  for(let i = 0; i < sorterArray.length; i++){
    const element = sorterArray[i].split(' : ').join(': ');
    const firstLetter = element[0];

    if (catalogue[firstLetter] === undefined){
      catalogue[firstLetter] = [];
    }

    catalogue[firstLetter].push(`  ${element}`);
  }

  let result = [];
  for (const key in catalogue) {
    const element = catalogue[key];
    result = [...result, key, ...element];
  }

  console.log(result.join('\n'));
}
storeCatalogue(
  ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);