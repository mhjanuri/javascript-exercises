const add = function(a, b) {
  return a + b; 
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce(function (a, b) {
    return a + b;
  }, 0);
};

const multiply = function(array) {
  return array.reduce(function (a, b) {
    return a * b;
  });
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

// console.log(sum([1, 3, 5, 7, 9]));
// console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
// console.log(power(4, 3));


