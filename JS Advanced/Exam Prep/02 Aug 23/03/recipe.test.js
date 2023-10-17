const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { recipeSelection } = require("./recipe"); // imports the function I want to test


//test Cases
describe('recipeSelection', function () {
  describe('isTypeSuitable(type, dietaryRestriction) - str,str', function () {
    it('returns message when dietaryRestriction = Vegetarian & type = Meat', function () {
      assert.equal(recipeSelection.isTypeSuitable("Meat","Vegetarian"), "This recipe is not suitable for vegetarians");
    });

    it('returns message not suitable for vegans', function () {
      assert.equal(recipeSelection.isTypeSuitable("Meat","Vegan"), "This recipe is not suitable for vegans");
      assert.equal(recipeSelection.isTypeSuitable("Dairy","Vegan"), "This recipe is not suitable for vegans");
    });

    it('returns message not suitable for your restrictions', function () {
      assert.equal(recipeSelection.isTypeSuitable("Meat","None"),"This recipe is suitable for your dietary restriction");
      assert.equal(recipeSelection.isTypeSuitable("Dairy","Keto"),"This recipe is suitable for your dietary restriction");
      assert.equal(recipeSelection.isTypeSuitable("Eggs","Paleo"),"This recipe is suitable for your dietary restriction");
      assert.equal(recipeSelection.isTypeSuitable("Fish","Danov"),"This recipe is suitable for your dietary restriction");
    });

    it('throw error when input is invalid', function () {
      assert.throws(function() { recipeSelection.isTypeSuitable(25, {n:true}) }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.isTypeSuitable("Eggs", [true]) }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.isTypeSuitable("Eggs", null) }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.isTypeSuitable("Eggs", false) }, Error, /Invalid input/);
    });
    
  });

  describe('isItAffordable (price, budget) - num,num', function () {
    it('If the remaining budget is less than 0, it returns message', function () {
      assert.equal(recipeSelection.isItAffordable(10,9),"You don't have enough budget to afford this recipe");
      assert.equal(recipeSelection.isItAffordable(12,10),"You don't have enough budget to afford this recipe");
    });

    it('returns valid message output with valid input', function () {
      assert.equal(recipeSelection.isItAffordable(10,10),"Recipe ingredients bought. You have 0$ left");
      assert.equal(recipeSelection.isItAffordable(12,17),"Recipe ingredients bought. You have 5$ left");
      assert.equal(recipeSelection.isItAffordable(4.5,10),"Recipe ingredients bought. You have 5.5$ left");
    });

    it('throw error when input is invalid', function () {
      assert.throws(function() { recipeSelection.isItAffordable(25, {n:true}) }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.isItAffordable(2, [true]) }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.isItAffordable(10, null) }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.isItAffordable("Eggs", 42) }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.isItAffordable('52', 42) }, Error, /Invalid input/);
    });
  });

  describe('getRecipesByCategory(recipes, category) - array,str', function () {
    it('invalid input', function () {
      assert.throws(function() { recipeSelection.getRecipesByCategory('52', 42) }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.getRecipesByCategory(57, "asian") }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.getRecipesByCategory(false, "asian") }, Error, /Invalid input/);
      assert.throws(function() { recipeSelection.getRecipesByCategory(() => df, 12) }, Error, /Invalid input/);
    });

    it('valid input', function () {
      let input = [
        {title: "Spicy Tofu Stir-Fry", category: "Asian"}, 
        {title: "Spicy Tuna", category: "Asian"},
        {title: "Eggs", category: "Bulgarian"}
      ];
      assert.equal(recipeSelection.getRecipesByCategory(input, "Bulgarian").join(''),"Eggs");
    });
  });
});