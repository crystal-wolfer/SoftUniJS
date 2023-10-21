const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { onlineStore } = require("./onlineStore"); // imports the function I want to test


//test Cases
describe('onlineStore', function () {
  describe('isProductAvailable(product, stockQuantity) - str, num', function () {
    it('should throw error with invalid input', function () {
      assert.throws(function () { onlineStore.isProductAvailable('48', [45]) }, Error, /Invalid input./);
      assert.throws(function () { onlineStore.isProductAvailable('str', "56") }, Error, /Invalid input./);
      assert.throws(function () { onlineStore.isProductAvailable(["str"], 56) }, Error, /Invalid input./);
      assert.throws(function () { onlineStore.isProductAvailable({ i: "string" }, "56") }, Error, /Invalid input./);
    });

    it('should return message If the stockQuantity is less than or equal to 0', function () {
      assert.equal(onlineStore.isProductAvailable("beans", 0), 'Sorry, beans is currently out of stock.');
      assert.equal(onlineStore.isProductAvailable("eggs", -5), 'Sorry, eggs is currently out of stock.');
    });

    it('should return message If the stockQuantity is greater than 0, the product is available', function () {
      assert.equal(onlineStore.isProductAvailable("beans", 2), 'Great! beans is available for purchase.');
      assert.equal(onlineStore.isProductAvailable("eggs", 5), 'Great! eggs is available for purchase.');
    });
  });

  describe('canAffordProduct(productPrice, accountBalance) - num, num', function () {
    it('should throw error with invalid input', function () {
      assert.throws(function () { onlineStore.canAffordProduct('48', [45]) }, Error, /Invalid input./);
      assert.throws(function () { onlineStore.canAffordProduct('str', "56") }, Error, /Invalid input./);
      assert.throws(function () { onlineStore.canAffordProduct(["str"], 56) }, Error, /Invalid input./);
      assert.throws(function () { onlineStore.canAffordProduct({ i: "string" }, "56") }, Error, /Invalid input./);
    });

    it('should return message If the result is less than 0, the user doesnt have enough funds', function () {
      assert.equal(onlineStore.canAffordProduct(3, 2), "You don't have sufficient funds to buy this product.");
      assert.equal(onlineStore.canAffordProduct(10, 5), "You don't have sufficient funds to buy this product.");
    });

    it('should return message If the result is greater than or equal to 0, the purchase is successful', function () {
      assert.equal(onlineStore.canAffordProduct(3, 5), "Product purchased. Your remaining balance is $2.");
      assert.equal(onlineStore.canAffordProduct(10, 10), "Product purchased. Your remaining balance is $0.");
    });
  });


  describe('getRecommendedProducts(productList, category) - arr of objs, str', function () {
    it('should throw error with invalid input', function () {
      assert.throws(function () { onlineStore.getRecommendedProducts('48', [45]) }, Error, /Invalid input/);
      assert.throws(function () { onlineStore.getRecommendedProducts('str', "56") }, Error, /Invalid input/);
      assert.throws(function () { onlineStore.getRecommendedProducts(["str"], 56) }, Error, /Invalid input/);
      assert.throws(function () { onlineStore.getRecommendedProducts({ i: "string" }, "56") }, Error, /Invalid input/);
    });

    it('should return message If there are no recommended products in the specified category', function () {
      let arr = [
        { name: "Camera", category: "Photography" },
        { name: "Phone", category: "Mobile" },
        { name: "Candle", category: "Home" },
      ];
      assert.equal(onlineStore.getRecommendedProducts(arr, "Kitchen"), "Sorry, we currently have no recommended products in the Kitchen category.");
      assert.equal(onlineStore.getRecommendedProducts(arr, "home"), "Sorry, we currently have no recommended products in the home category.");
    });

    it('should find and return product names that match the specified category', function () {
      let arr = [
        { name: "Camera", category: "Photography" },
        { name: "Phone", category: "Mobile" },
        { name: "Tablet", category: "Mobile" },
        { name: "Candle", category: "Home" },
      ];
      assert.equal(onlineStore.getRecommendedProducts(arr, "Mobile"), "Recommended products in the Mobile category: Phone, Tablet");
      assert.equal(onlineStore.getRecommendedProducts(arr, "Home"), "Recommended products in the Home category: Candle");
    });
  });
});

//20min