function createCalculator() {
  let value = 0;
  return {
      add: function(num) { value += Number(num); },
      subtract: function(num) { value -= Number(num); },
      get: function() { return value; }
  }
}
// let res = createCalculator();
// res.add(0)
// console.log(res.get());
module.exports = {createCalculator}