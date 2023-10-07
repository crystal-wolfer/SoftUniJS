const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { mathEnforcer } = require("./mathEnforcer"); // imports the function I want to test


//test Cases
describe('Math Enforcer test cases', function () {
  describe('testing addFive', function () {
    it('should return undefined when param is NOT a num', function () {
      assert.isUndefined(mathEnforcer.addFive('input'));
      assert.isUndefined(mathEnforcer.addFive());
    });

    it('should return 10 when param is 5', function () {
      assert.equal(mathEnforcer.addFive(5), 10);
    });

    it('should return 10.23 when param is 5.23', function () {
      assert.closeTo(mathEnforcer.addFive(5.23), 10.23, 0.01)
    });

    it('should return -10 when param is -15', function () {
      assert.equal(mathEnforcer.addFive(-15), -10);
    });
  });

  describe('testing subtractTen', function () {
    it('should return undefined when param is NOT a num', function () {
      assert.isUndefined(mathEnforcer.subtractTen('input'));
      assert.isUndefined(mathEnforcer.subtractTen());
    });

    it('should return 0 when param is 10', function () {
      assert.equal(mathEnforcer.subtractTen(10), 0);
    });

    it('should return 10.12 when param is 20.12', function () {
      assert.closeTo(mathEnforcer.subtractTen(20.12), 10.12, 0.01)
    });

    it('should return -25 when param is -15', function () {
      assert.equal(mathEnforcer.subtractTen(-15), -25);
    });
  });

  describe('testing sum', function () {
    it('should return undefined when 1 or 2 params are NOT a num', function () {
      assert.isUndefined(mathEnforcer.sum('input', 5));
      assert.isUndefined(mathEnforcer.sum(true, 5));
      assert.isUndefined(mathEnforcer.sum(true, 'sre'));
      assert.isUndefined(mathEnforcer.sum(2, 'sre'));
      assert.isUndefined(mathEnforcer.sum());
    });

    it('should return 0 when params are 5, -5', function () {
      assert.equal(mathEnforcer.sum(5, -5), 0);
      assert.equal(mathEnforcer.sum(5, 5), 10);      
    });

    it('should return 10.28 when params are 5, 5.28', function () {
      assert.closeTo(mathEnforcer.sum(5, 5.28), 10.28, 0.01)
      assert.closeTo(mathEnforcer.sum(5.22, 5.28), 10.5, 0.01)
    });

    it('should return -20 when params are 5, -25', function () {
      assert.equal(mathEnforcer.sum(5, -25), -20);
    });
  });
});