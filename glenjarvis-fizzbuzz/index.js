
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

  this.divisable_by_both = function divisable_by_both(dividend) {
    return this.divisable_by(dividend, 3) && this.divisable_by(dividend, 5)
  };

  this.say = function say(number) {
    if (this.divisable_by_both(number)) {
      return "fizzbuzz";
    } else if (this.divisable_by(number, 3)) {
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

