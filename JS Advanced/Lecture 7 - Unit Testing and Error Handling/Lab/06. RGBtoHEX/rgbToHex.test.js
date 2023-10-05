const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const {rgbToHexColor} = require("./rgbToHex.js"); // imports the function I want to test


//test Cases
  describe('Function rgbToHexColor test cases:', function(){
    describe('should take three integer numbers within the range [0-255]', function(){
      it('should return undefined when red is not in the range' ,function(){
        assert.isUndefined(rgbToHexColor(-1, 20, 255));
        assert.isUndefined(rgbToHexColor(265, 20, 255));
        assert.isUndefined(rgbToHexColor(2.4, 20, 255));
      });

      it('should return undefined when green is not in the range' ,function(){
        assert.isUndefined(rgbToHexColor(0, 5.4, 210));
        assert.isUndefined(rgbToHexColor(0, 285, 210));
        assert.isUndefined(rgbToHexColor(0, -5, 210));

      });

      it('should return undefined when blue is not in the range', function () {
        assert.isUndefined(rgbToHexColor(0, 0, 351));
        assert.isUndefined(rgbToHexColor(0, 0, -5));
        assert.isUndefined(rgbToHexColor(0, 0, 4.5));
      });

      it('should return undefined when all inputs are not in the range', function () {
        assert.isUndefined(rgbToHexColor(-2, -5, 351));
        assert.isUndefined(rgbToHexColor(-2, -5, -3));
        assert.isUndefined(rgbToHexColor(289, 595, 256));
      });
    })

    describe('should return the same color in hexadecimal format as a string', function () {
      it('input 255, 255, 255 should return #FFFFFF', function () {
        assert.strictEqual(rgbToHexColor(255, 255, 255), '#FFFFFF');
      });

      it('input 0, 0, 0 should return #000000', function () {
        assert.strictEqual(rgbToHexColor(0, 0, 0), '#000000');
      });

      it('input 0, 0, 0 should return #000000', function () {
        assert.strictEqual(rgbToHexColor(15, 24, 145), '#0F1891');
      });

      it('test if output is string', function () {
        let output = rgbToHexColor(255, 255, 255);
        assert.isString(output);
      });
    });

    describe('should return invalid when invalid input is given', function () {
      it('test with string, array and object', function () {
        assert.isUndefined(rgbToHexColor("255", "0", "255"));
        assert.isUndefined(rgbToHexColor([0, 25, 0]));
        assert.isUndefined(rgbToHexColor({red: 0, green: 0, blue: 25}));
      });
    });

    describe('should return invalid when receiving less than 3 inputs', function () {
      it('test with 2 inputs and empty', function () {
        assert.isUndefined(rgbToHexColor(255));
        assert.isUndefined(rgbToHexColor(255, 4));
        assert.isUndefined(rgbToHexColor());
        assert.isUndefined(rgbToHexColor('name'));

      });

      it('test with non integer inputs', function () {
        assert.isUndefined(rgbToHexColor(250.5, 20.5, 255.1));
        assert.isUndefined(rgbToHexColor({1:1},{1:1},{1:1}));
        assert.isUndefined(rgbToHexColor(true, true , true));
        assert.isUndefined(rgbToHexColor([1], [1] , [2]));
        assert.isUndefined(rgbToHexColor('1', '2', '1'));
        assert.isUndefined(rgbToHexColor(() => {}, () => {}, () => {}));
        assert.isUndefined(rgbToHexColor(null, undefined, null));
        assert.isUndefined(rgbToHexColor(null));
      });
    });
    
  });

//Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
//Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//Return undefined if any of the input parameters are of an invalid type or not in the expected range
