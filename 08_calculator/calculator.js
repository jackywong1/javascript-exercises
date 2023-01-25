const add = function(val1, val2) {
  return val1 + val2;
};

const subtract = function(val1, val2) {
	return val1 - val2;
};

const sum = function(inputArr) {
	let summedVal = 0;
  for (let i = 0; i < inputArr.length; i++) {
    summedVal += inputArr[i];
  }
  return summedVal;
};

const multiply = function(inputArr) {
  let multipliedVal = 1;
  for (let i = 0; i < inputArr.length; i++) {
    multipliedVal *= inputArr[i];
  }
  return multipliedVal;
};

const power = function(val1, powerVal) {
	val1 = Math.pow(val1, powerVal);
  return val1;
};

const factorial = function(val1) {
  let factVal = val1;
  if (val1 === 0 || val1 === 1) {
    return 1;
  }
	for (let i = val1 - 1; i > 0; i--) {
    factVal *= i; 
  }
  return factVal;
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
