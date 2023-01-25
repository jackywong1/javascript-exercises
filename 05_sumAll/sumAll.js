const sumAll = function(startVal, endVal) {
    let sumAllVal = 0;
    // test for invalid inputs 
    if (typeof(startVal) != "number" || typeof(endVal) != "number") {
        return 'ERROR';
    }
    // return error if input values are negative
    if (startVal < 0 || endVal < 0) {
        return 'ERROR';
    }

    if (endVal > startVal) {
        for (let i = startVal; i <= endVal; i++) {
            sumAllVal += i;
        }
    } else if (startVal > endVal) {
        for (let i = endVal; i <= startVal; i++) {
            sumAllVal += i;
        }    
    } else {
        //do nothing;
    }
    return sumAllVal;
};

// Do not edit below this line
module.exports = sumAll;
