const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const {isSymmetric} = require("./isSymetric"); // imports the function I want to test


//test Cases
describe('Is Symmetric', function(){
  it('should take an array as an argument', function () {
    assert.isNotArray(isSymmetric('sdsds')); // check if it fails on non array input
    assert.isNotArray(isSymmetric(4, 5, 6)); // check if it fails on non array input
    assert.isNotArray(isSymmetric({num1: 4, num2: 5})); // check if it fails on non array input
    assert.isNotArray(isSymmetric(true)); // check if it fails on non array input
  });

  it('should return false for any input that isn’t of the correct type', function () {
    assert.isFalse(isSymmetric('sdsds')); 
    assert.isFalse(isSymmetric(4, 5, 6)); 
    assert.isFalse(isSymmetric({num1: 4, num2: 5})); 
    assert.isFalse(isSymmetric(true)); 
  });

  it('should return true if the input array is symmetric', function () {
    assert.isTrue(isSymmetric([1,2,3,2,1]));
  });

  it('should return true if the input array is symmetric', function () {
    assert.isTrue(isSymmetric(['str1', 'str2', 'str1']));
  });

  it('should return false if the input is not array', function () {
    assert.isFalse(isSymmetric('asdsa')); 
  });

  it('should return false if the input is empty', function () {
    assert.isEmpty([]);
    assert.isTrue(isSymmetric([]));
  });

  it('should return false if the array is non-sym', function () {
    assert.isFalse(isSymmetric([1, 2, 3]));
  });

  it('should return true with diff type of inputs', function () {
    let input = [true, 'true', 0 , 'true', true]
    assert.isTrue(isSymmetric(input));
  });

  it('should return string as result', function () {
    let input = [1, 2, 3, 2, 1]
    let res = isSymmetric(input);
    assert.isTrue(res);
  });

  it('should return false if the input has negative num', function () {
    assert.isFalse(isSymmetric([-1, 2, 3, 2, 1]));
    assert.isTrue(isSymmetric([-1, 2, 3, 2, -1]));
  });

  it('should return string as result', function () {
    let input = [1, 'string', true, [], {}, () => {},{},[], true,'string', 1]
    let res = isSymmetric(input);
    assert.isTrue(res);
  });
});