const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { createCalculator } = require("./addSubtract"); // imports the function I want to test


//test Cases
describe('name of the function', function () {
  describe('test cases', function () {
    let calcReturn = createCalculator();

    it('should return 0 when .get', function () {
      assert.equal(calcReturn.get(), 0);
    });

    it('should return 1 when .add(1)', function () {
      calcReturn = createCalculator() // starting from 0 because func keeps the previous values
      calcReturn.add(1);
      assert.equal(calcReturn.get(), 1);
    });

    it('should return -5 when .add(-5)', function () {
      calcReturn = createCalculator() // starting from 0 because func keeps the previous values
      calcReturn.add('-5');
      assert.equal(calcReturn.get(), -5);
    });
  });
});