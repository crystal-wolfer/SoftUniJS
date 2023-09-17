function evenPositionEl(array){
  let result = [];

  array.forEach(el => {
    if (array.indexOf(el) % 2 === 0){
      result.push(el);
    }
  });

  console.log(result.join(' '));
}
evenPositionEl(['20', '30', '40', '50', '60']);