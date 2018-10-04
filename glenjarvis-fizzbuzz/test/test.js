let assert = require("assert");
let FizzBuzz = require("../index.js");

describe("FizzBuzz", function () {
  it("should know maximum amount ot count", function() {
    let fizzBuzz = new FizzBuzz(10);
    assert.strictEqual(fizzBuzz.MAX_COUNT, 10);
  });

  //it("should say 1 when given 1", function() {
  //  assert.strictlyEqual(fizzBuzz.say(1), 1);
  //});
});
