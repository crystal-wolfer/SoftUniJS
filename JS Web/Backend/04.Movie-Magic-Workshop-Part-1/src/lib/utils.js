// FUNCTION THAT GENERETES THE DIFFICULTY LEVER OPTIONS
exports.generateRating = (rating) => {

  const options = [];

  for (let i = 1; i <=5; i+1) {
    title = '★'.repeat(i),
    value = i,
    selected = Number(rating) === Number(i);
    options.push({ title: title, value: value, selected: selected });
    i++;
  }

  return options;
}


