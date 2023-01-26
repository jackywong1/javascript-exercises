const caesar = function(inputStr, shiftNum) {

    let result = '';
    let charCode = 0;
    const numOfAlphaChars = 26;
    const asciiValueUpperCaseA = 65;
    const asciiValueUpperCaseZ = 90;
    const asciiValueLowerCaseA = 97;
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?' ']/;

    for (let i = 0; i < inputStr.length; i++) {
        if (specialChars.test(inputStr[i])) {
            result += inputStr[i];
            continue;
        }
        charCode = (inputStr[i].charCodeAt()) + shiftNum;
        if (charCode < asciiValueUpperCaseA) {
            charCode = 
                ((((inputStr[i].charCodeAt()) - asciiValueUpperCaseA) + shiftNum) % numOfAlphaChars) 
                + asciiValueUpperCaseZ + 1;
        } else if (charCode > asciiValueUpperCaseZ && charCode < asciiValueLowerCaseA) {
            charCode = 
                ((((inputStr[i].charCodeAt()) - asciiValueUpperCaseA) + shiftNum) % numOfAlphaChars) 
                + asciiValueUpperCaseA;
        } else if (shiftNum > numOfAlphaChars) {
            let newShiftVal = numOfAlphaChars - (shiftNum % numOfAlphaChars);
            charCode = (inputStr[i].charCodeAt()) - newShiftVal;
        } else if (shiftNum < numOfAlphaChars) {
            let newShiftVal = shiftNum % numOfAlphaChars;
            charCode = (inputStr[i].charCodeAt()) + newShiftVal;
        }
        result += String.fromCharCode(charCode);
    }

    return result;

};

// Do not edit below this line
module.exports = caesar;
