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
});
