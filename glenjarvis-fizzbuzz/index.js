
module.exports = FizzBuzz;

function FizzBuzz(max_count) {
  if (max_count) {
    this.MAX_COUNT = max_count;
  } else {
    this.MAX_COUNT = 1000;
  }

  this.say = function say() {
    return 1;
  }

  //for (let i=0; i<=MAX_COUNT; i++) {
  //  console.log(i);
  //}
}
