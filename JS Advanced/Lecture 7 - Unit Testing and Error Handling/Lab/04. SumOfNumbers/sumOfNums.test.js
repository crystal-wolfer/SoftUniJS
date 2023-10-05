const expect = require('chai').expect; // adds chai expect method
const {sum} = require("./04.SumOfNums.js"); // imports the function I want to test

//tests
describe('SumOfNums', function(){
  it('should sum numbers from array', function () {
    expect(sum([1, 2, 3])).to.equal(6);
  });

  it('should return 0 if given empty array', function () {
    expect(sum([])).to.equal(0);
  });

  it('should return NaN if given a str element', function () {
    expect(sum([1, 2, 'sd', 3])).to.be.NaN; // check for NaN result
  });
});
