const convertToCelsius = function(tempVal) {
  // Math.round(number * 10) / 10 converts the value to 1 decimal point
  let convertedVal = Math.round(((tempVal - 32) * 5/9) * 10)/10;
  return convertedVal;
};

const convertToFahrenheit = function(tempVal) {
  let convertedVal = Math.round(((tempVal * (9/5)) + 32) * 10)/10;
  return convertedVal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
