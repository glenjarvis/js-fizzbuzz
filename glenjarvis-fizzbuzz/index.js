
module.exports = FizzBuzz;

function FizzBuzz(max_count) {
  if (max_count) {
    this.MAX_COUNT = max_count;
  } else {
    this.MAX_COUNT = 1000;
  }

  this.divisable_by = function divisable_by(dividend, divisor) {
    if  (divisor) {
      return !(dividend % divisor)
    } else {
      return false
    }
  }

  this.say = function say(number) {
    if (this.divisable_by(number, 3)) {
      return "fizz";
    } else if (this.divisable_by(number, 5)) {
      return "buzz";
    } else {
      return number;
    }
  }

  //for (let i=0; i<=MAX_COUNT; i++) {
  //  console.log(i);
  //}
}

