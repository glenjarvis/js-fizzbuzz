let assert = require("assert");
let FizzBuzz = require("../index.js");

describe("FizzBuzz", function () {

  it("should know maximum amount ot count", function() {
    let fizzBuzz = new FizzBuzz(10);
    assert.strictEqual(fizzBuzz.MAX_COUNT, 10);
  });

  it("should have a default value of 1000 if no max given", function() {
    let fizzBuzz = new FizzBuzz();
    assert.strictEqual(fizzBuzz.MAX_COUNT, 1000);
  });

  describe("#say", function () {
    it("should say 1 when given 1", function() {
      let fizzBuzz = new FizzBuzz();
      assert.strictEqual(fizzBuzz.say(1), 1);
    });

    it("should say fizz when given 3", function() {
      let fizzBuzz = new FizzBuzz();
      assert.strictEqual(fizzBuzz.say(3), "fizz");
    });

    it("should say buzz when given 5", function() {
      let fizzBuzz = new FizzBuzz();
      assert.strictEqual(fizzBuzz.say(5), "buzz");
    });

    it("should say fizzbuzz when given 15", function() {
      let fizzBuzz = new FizzBuzz();
      assert.strictEqual(fizzBuzz.say(15), "fizzbuzz");
    });
  });

  describe("#divisible_by", function () {
    it("should always return false when asked to be divisible by 0", function() {
      let fizzBuzz = new FizzBuzz();
      assert(!fizzBuzz.divisible_by(3, 0));
    });

    it("should know that 9 is divisible by 3", function() {
      let fizzBuzz = new FizzBuzz();
      assert(fizzBuzz.divisible_by(9, 3));
    });

    it("should know that 9 is not divisible by 4", function() {
      let fizzBuzz = new FizzBuzz();
      assert(!fizzBuzz.divisible_by(9, 4));
    });
  });

});
