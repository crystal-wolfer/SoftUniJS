const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { nameFunc } = require("./fileName.js"); // imports the function I want to test


//test Cases
describe('name of the function', function () {
  describe('the scenario', function () {
    it('the test case', function () {
      assert.isUndefined(nameFunc(input));
    });
  });

  describe('the scenario', function () {
    it('the test case', function () {
      assert.isUndefined(nameFunc(input));
    });
  });
});