const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { lookupChar } = require("./charLookup"); // imports the function I want to test


//test Cases
describe('Char Lookup test cases', function () {
  describe('Returns undefined', function () {
    it('first param is not a string', function () {
      assert.isUndefined(lookupChar(['string'], 1));
    });

    it('second param is not a number', function () {
      assert.isUndefined(lookupChar('input', '3'));
      assert.isUndefined(lookupChar('input', 0.5));
    });

    it('returns "Incorrect index" when given index is incorrect', function () {
      assert.equal(lookupChar('input', 5), 'Incorrect index');
      assert.equal(lookupChar('input', -5), 'Incorrect index');
    });
  });

  describe('Returns valid output', function () {
    it('Passing str: input and num 2 should return p', function () {
      assert.equal(lookupChar('input', 2), 'p');
    });

    it('Passing str: string and num 0 should return s', function () {
      assert.equal(lookupChar('string', 0), 's');
    });

    it('Passing str: input string and num 5 should return /space/', function () {
      assert.equal(lookupChar('input string', 5), ' ');
    });
  });
});