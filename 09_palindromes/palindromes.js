const palindromes = function (inputStr) {
    // strip the string of any special characters, leave only lowercase characters
    const punctuationLess = inputStr.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, "").toLowerCase();
    const spaceLess = punctuationLess.replace(/\s+/g,"");
    let startIndex = 0,
        endIndex = spaceLess.length - 1;
    while ((startIndex <= inputStr.length / 2) && (endIndex >= inputStr.length / 2)) {
        if (spaceLess[startIndex] !== spaceLess[endIndex]) {

            return false;
        }
        startIndex++;
        endIndex--;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
