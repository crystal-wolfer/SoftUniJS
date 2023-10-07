const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { isOddOrEven } = require("./evenOdd.js"); // imports the function I want to test


//test Cases
describe('Tests for Odd or Even Function:', function () {
  describe('returning undefined', function () {
    it('input of array, obj and null', function () {
      assert.isUndefined(isOddOrEven([1]));
      assert.isUndefined(isOddOrEven({str: 'foo'}));
      assert.isUndefined(isOddOrEven(null));
    });

    it('input of number', function () {
      assert.isUndefined(isOddOrEven(3));
    });

  });

  describe('returning valid output', function () {
    it('valid argument: str with even length or empty str', function () {
      assert.equal(isOddOrEven('hell'), 'even');
      assert.equal(isOddOrEven(''), 'even');
    });

    it('valid argument: str with odd length', function () {
      assert.equal(isOddOrEven('hello'), 'odd');
    });
  });

  describe('returning valid output with multiple strings', function () {
    it('valid argument: multiple str with various odd lenth', function () {
      assert.equal(isOddOrEven('hejdsyfnbo '), 'odd');
      assert.equal(isOddOrEven('hejdsyfnbo as'), 'odd');
      assert.equal(isOddOrEven('hejdsyfnbo as shdyros'), 'odd');
    });

    it('valid argument: multiple str with various even lenth', function () {
      assert.equal(isOddOrEven('hejdsyfnbo'), 'even');
      assert.equal(isOddOrEven('hejdsyfnbos as'), 'even');
      assert.equal(isOddOrEven('hejdsyfnboas shdyros'), 'even');
    });
  });
});
