const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { lottery } = require("./lottery"); // imports the function I want to test


//test Cases
describe('Loterry', function () {
  describe('buyLotteryTicket (ticketPrice,ticketCount,buy) - num,num,bool ', function () {
    it('should throw error with invalid input', function () {
      assert.throws(function() { lottery.buyLotteryTicket('25', '48', [true]) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.buyLotteryTicket('25', 48, [true]) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.buyLotteryTicket(25, '48', true) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.buyLotteryTicket(25, 48, {n:true}) }, Error, /Invalid input!/);
    });

    it('should throw error when bool is false', function () {
      assert.throws(function() { lottery.buyLotteryTicket(25, 48, false) }, Error, /Unable to buy lottery ticket!/);
    });

    it('should return result with valid input', function () {
      assert.equal(lottery.buyLotteryTicket(1, 1, true), 'You bought 1 tickets for 1$.');
      assert.equal(lottery.buyLotteryTicket(1, 5, true), 'You bought 5 tickets for 5$.');
    });
  });

  describe('checkTicket (ticketNumbers,luckyNumbers) - array, array', function () {
    it('should throw error with invalid input', function () {
      assert.throws(function() { lottery.checkTicket('58', [5,2,1]) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.checkTicket([5,2,1], '3,3,5') }, Error, /Invalid input!/);
      assert.throws(function() { lottery.checkTicket({n:1,n:2}, '3,3,5') }, Error, /Invalid input!/);
      assert.throws(function() { lottery.checkTicket(false, [1,6,5,5]) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.checkTicket([1,6,5,5],[4,5,9,7,2,3]) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.checkTicket([1,6,5,5,5],[4,5,9,7,3]) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.checkTicket([1,6,5,5,5],[4,5,9,7,'3',8]) }, Error, /Invalid input!/);      
    });

    it('should return result with valid input', function () {
      assert.equal(lottery.checkTicket([1,6,5,5,5,6],[4,5,6,7,1,0]), 'Congratulations you win, check your reward!');
      assert.equal(lottery.checkTicket([1,6,5,4,5,6],[4,5,6,7,1,0]), 'Congratulations you win, check your reward!');
      assert.equal(lottery.checkTicket([1,6,5,4,0,6],[4,5,6,7,1,0]), 'Congratulations you win, check your reward!');
      assert.equal(lottery.checkTicket([1,2,3,4,5,6],[6,5,4,3,2,1]), 'You win the JACKPOT!!!');
    });
  });

  describe('secondChance (ticketID, secondChanceWinningIDs) - num,array', function () {
    it('should throw error with invalid input', function () {
      assert.throws(function() { lottery.secondChance([1],"633") }, Error, /Invalid input!/);
      assert.throws(function() { lottery.secondChance([1],[1,5,6]) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.secondChance('6',[1,5,6]) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.secondChance(6,false) }, Error, /Invalid input!/);
      assert.throws(function() { lottery.secondChance(6,{n:false}) }, Error, /Invalid input!/);
    });

    it('should return winning message with winning and valid input', function () {
      assert.equal(lottery.secondChance(3,[6,5,4,3,2,1]), 'You win our second chance prize!');
    });

    it('should return losing message with losing but valid input', function () {
      assert.equal(lottery.secondChance(8,[6,5,4,3,2,1]), "Sorry, your ticket didn't win!");
    });
  });
});

// 26min