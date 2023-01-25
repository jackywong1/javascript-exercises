const repeatString = function(inputStr, value) {
    let repeatedStr = "";
    // return error if input value is less than 0 
    if (value < 0) {
        return 'ERROR';
    }
    for (let i = 1; i <= value; i++) {
        repeatedStr += inputStr;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
