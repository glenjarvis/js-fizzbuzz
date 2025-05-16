
module.exports = FizzBuzz;

function FizzBuzz(max_count) {
  if (max_count) {
    this.MAX_COUNT = max_count;
  } else {
    this.MAX_COUNT = 1000;
  }

  this.divisible_by = function divisible_by(dividend, divisor) {
    if  (divisor) {
      return !(dividend % divisor)
    } else {
      return false
    }
  }

  this.divisible_by_both = function divisible_by_both(dividend) {
    return this.divisible_by(dividend, 3) && this.divisible_by(dividend, 5)
  };

  this.say = function say(number) {
    if (this.divisible_by_both(number)) {
      return "fizzbuzz";
    } else if (this.divisible_by(number, 3)) {
      return "fizz";
    } else if (this.divisible_by(number, 5)) {
      return "buzz";
    } else {
      return number;
    }
  }

  //for (let i=0; i<=MAX_COUNT; i++) {
  //  console.log(i);
  //}
}

