const fibonacci = function(nthFibNum) {
    let fibArr = [1,1];

    if (nthFibNum < 0) {
        return "OOPS";
    }
    if (nthFibNum === 1 || nthFibNum === 2) {
        return 1;
    }

    for (let i = 2; i < nthFibNum; i++) {
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }

    return fibArr[nthFibNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;
