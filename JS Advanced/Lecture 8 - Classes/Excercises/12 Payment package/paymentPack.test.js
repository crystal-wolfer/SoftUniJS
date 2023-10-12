const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { PaymentPackage } = require("./paymentPack"); // imports the function I want to test


//test Cases
describe('Testing PaymentPackage', function () {
  describe('Instancing the class', function () {
    it('instance with 2 valid params: str and num', function () {
      let newPack = new PaymentPackage('NewName', 150)
      assert.equal(newPack.name,'NewName');
      assert.equal(newPack.value, 150);
    });

    it('should throw an error when name is empty or non string', function () {
      assert.throws(function() { new PaymentPackage('', 150) }, Error, /Name must be a non-empty string/);
      assert.throws(function() { new PaymentPackage([], 150) }, Error, /Name must be a non-empty string/);
      assert.throws(function() { new PaymentPackage({}, 150) }, Error, /Name must be a non-empty string/);
      assert.throws(function() { new PaymentPackage(3, 150) }, Error, /Name must be a non-empty string/);
      assert.throws(function() { new PaymentPackage(false, 150) }, Error, /Name must be a non-empty string/);
      
    });

    it('should throw an error when value is negative or not a num', function () {
      assert.throws(function() { new PaymentPackage('NewName', -150) }, Error, /Value must be a non-negative number/);
      assert.throws(function() { new PaymentPackage('NewName', '1528') }, Error, /Value must be a non-negative number/);
      assert.throws(function() { new PaymentPackage('NewName', {}) }, Error, /Value must be a non-negative number/);
      assert.throws(function() { new PaymentPackage('NewName', []) }, Error, /Value must be a non-negative number/);
      assert.throws(function() { new PaymentPackage('NewName', true) }, Error, /Value must be a non-negative number/);
    });

    it('should change the value of the property value when set is called', function () {
      let newPack = new PaymentPackage('Depatment', 1000);
      newPack.value = 1500;
      assert.equal(newPack.value, 1500);
    });

    it('should change the value of the property name when set is called', function () {
      let newPack = new PaymentPackage('Depatment', 1000);
      newPack.name = 'Development';
      assert.equal(newPack.name, 'Development');
    });

    it('should change the value of the property VAT when set is called with valid arg', function () {
      let newPack = new PaymentPackage('Depatment', 1000);
      newPack.VAT = 25;
      assert.equal(newPack.VAT, 25);
    });

    it('should throw error when passed VAT arg is negaive or not a num', function () {
      let newPack = new PaymentPackage('Depatment', 1000);      
      assert.throws(function() { newPack.VAT = '15' }, Error, /VAT must be a non-negative number/);
      assert.throws(function() { newPack.VAT = -15 }, Error, /VAT must be a non-negative number/);
      assert.throws(function() { newPack.VAT = {} }, Error, /VAT must be a non-negative number/);
    });

    it('should get the status of .active as true', function () {
      let newPack = new PaymentPackage('Depatment', 1000);
      assert.equal(newPack.active, true);
    });

    it('should change the status of .active accessor to false', function () {
      let newPack = new PaymentPackage('Depatment', 1000);
      newPack.active = false;
      assert.equal(newPack.active, false);
    });

    it('should throw errow when .active is passed a non bool param', function () {
      let newPack = new PaymentPackage('Depatment', 1000);
      assert.throws(function() { newPack.active = {} }, Error, /Active status must be a boolean/);
      assert.throws(function() { newPack.active = 'false' }, Error, /Active status must be a boolean/);
      assert.throws(function() { newPack.active = null }, Error, /Active status must be a boolean/);
      assert.throws(function() { newPack.active = 2 }, Error, /Active status must be a boolean/);
    });

    it('should return proper toString when .active is true', function () {
      let newPack = new PaymentPackage('Department', 800);
      let output = [
        `Package: Department`,
        `- Value (excl. VAT): 800`,
        `- Value (VAT 20%): 960`       
      ]
      const res = output.join('\n');
      assert.equal(newPack.toString(), res);     
    });

    it('should return proper toString when .active is false with (inactive) label', function () {
      let newPack = new PaymentPackage('Department', 800);
      newPack.active = false;
      let output = [
        `Package: Department (inactive)`,
        `- Value (excl. VAT): 800`,
        `- Value (VAT 20%): 960`       
      ]
      const res = output.join('\n');
      assert.equal(newPack.toString(), res);     
    });

    it('should return proper toString when .VAT is 0 and value is 0', function () {
      let newPack = new PaymentPackage('Department', 0);
      newPack.VAT = 0;
      let output = [
        `Package: Department`,
        `- Value (excl. VAT): 0`,
        `- Value (VAT 0%): 0`       
      ]
      const res = output.join('\n');
      assert.equal(newPack.toString(), res);     
    });
  });
});