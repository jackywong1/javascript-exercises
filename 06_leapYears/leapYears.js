const leapYears = function(yearToBeTested) {
    let isLeapYear = false;
    if (yearToBeTested % 100 === 0 && yearToBeTested % 400 === 0) {
        isLeapYear = true;
    } else if (yearToBeTested % 100 !== 0 && yearToBeTested % 4 === 0) {
        isLeapYear = true;
    } else {
        //do nothing;
    }
    return isLeapYear;
};
// Do not edit below this line
module.exports = leapYears;
