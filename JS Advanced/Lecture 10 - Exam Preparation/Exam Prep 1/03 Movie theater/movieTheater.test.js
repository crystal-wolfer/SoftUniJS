//const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { movieTheater } = require("./03. Movie Theater"); // imports the function I want to test


//test Cases
describe('Movie Theater test cases', function () {
  describe('ageRestrictions(movieRating) function test', function () {
    it('should return: All ages admitted to watch the movie when passed rating G ', function () {
      assert.equal(movieTheater.ageRestrictions("G"), 'All ages admitted to watch the movie');
    });

    it('should return: PG warning when passed rating PG', function () {
      assert.equal(movieTheater.ageRestrictions("PG"), 'Parental guidance suggested! Some material may not be suitable for pre-teenagers');
    });

    it('should return: R warning when passed rating R', function () {
      assert.equal(movieTheater.ageRestrictions("R"), 'Restricted! Under 17 requires accompanying parent or adult guardian');
    });

    it('should return: NC-17 warning when passed rating NC-17', function () {
      assert.equal(movieTheater.ageRestrictions("NC-17"), 'No one under 17 admitted to watch the movie');
    });

    it('should return: no restrictions when passed any other rating & empt str', function () {
      assert.equal(movieTheater.ageRestrictions(""), 'There are no age restrictions for this movie');
      assert.equal(movieTheater.ageRestrictions("B"), 'There are no age restrictions for this movie');
      assert.equal(movieTheater.ageRestrictions("1"), 'There are no age restrictions for this movie');
    });    
  });

  describe('moneySpent(tickets, food, drinks) function test accepts num, arr, arr', function () {
    it('test if error is thrown with invalid input', function () {
      assert.throws(function() { movieTheater.moneySpent('3', ['Nachos', 'Popcorn'], ['Soda', 'Water']) }, Error, /Invalid input/);
      assert.throws(function() { movieTheater.moneySpent(3, 'Nachos', ['Soda', 'Water']) }, Error, /Invalid input/);
      assert.throws(function() { movieTheater.moneySpent(3, 'Nachos', {drinks: 'Soda'}) }, Error, /Invalid input/);
    });

    it('should return 22.50 and no discount when isitiated with input(1,[Nachos],[Water])', function () {
      assert.equal(movieTheater.moneySpent(1,['Nachos'], ['Water']), 'The total cost for the purchase is 22.50');
    });

    it('should return 76.40 with discount when isitiated with input(1,[Nachos],[Water])', function () {
      assert.equal(movieTheater.moneySpent(5,['Nachos', 'Popcorn', 'Nachos'], ['Water', 'Soda']), 'The total cost for the purchase with applied discount is 76.40');
    });
  });

  describe('reservation(rowsArray, neededSeatsCount) accepts arr and num function tests', function () {
    it('test if error is thrown with invalid input', function () {
      assert.throws(function() { movieTheater.reservation({ rowNumber: 2, freeSeats: 5 }, 5)}, Error, /Invalid input/);
      assert.throws(function() { movieTheater.reservation([{ rowNumber: 2, freeSeats: 5 }], '5')}, Error, /Invalid input/);
    });


    it('should return valid output with valid input', function () {
      assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5), 2);
      assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 0), 2);
      assert.equal(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7), 1);
    });    

  });
});
