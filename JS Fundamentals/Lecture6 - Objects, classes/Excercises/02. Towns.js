function solve(inputArray) {

  for (const townInput of inputArray) {
    let [townName, latitude, longitude] = townInput.split(' | ');

    let town = {
      town: townName,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };

    console.log(town);
  }
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);