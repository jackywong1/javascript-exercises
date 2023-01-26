const findTheOldest = function(peopleArr) {
    let ageArr = [];

    // get current year if yearOfDeath doesn't exist
    const currentYear = new Date().getFullYear();

    // iterate through array of objects to get ages of each person
    for (let i = 0; i < peopleArr.length; i++) {
        if (!(peopleArr[i].hasOwnProperty("yearOfDeath"))) {
            ageArr[i] = currentYear - peopleArr[i].yearOfBirth;
        } else {
            ageArr[i] = peopleArr[i].yearOfDeath - peopleArr[i].yearOfBirth;
        }

    }
    // return index of max age of each person
    const indexOfMaxAge = ageArr.indexOf(Math.max(...ageArr));

    // return name of max age
    return peopleArr[indexOfMaxAge];
};

// Do not edit below this line
module.exports = findTheOldest;
