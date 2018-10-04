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

  it("should say 1 when given 1", function() {
    let fizzBuzz = new FizzBuzz();
    assert.strictEqual(fizzBuzz.say(1), 1);
  });

  it("should say fizz when given 3", function() {
    let fizzBuzz = new FizzBuzz();
    assert.strictEqual(fizzBuzz.say(3), "fizz");
  });

  describe("#divisable_by", function () {
    it("should always return false when asked to be divisable by 0", function() {
      let fizzBuzz = new FizzBuzz();
      assert(!fizzBuzz.divisable_by(3, 0));
    });

    it("should know that 9 is divisable by 3", function() {
      let fizzBuzz = new FizzBuzz();
      assert(fizzBuzz.divisable_by(9, 3));
    });

    it("should know that 9 is not divisable by 4", function() {
      let fizzBuzz = new FizzBuzz();
      assert(!fizzBuzz.divisable_by(9, 4));
    });
  });

});
