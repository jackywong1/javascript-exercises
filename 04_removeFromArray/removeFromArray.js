const removeFromArray = function(originalArr, firstValueToRemove, secondValueToRemove,
    thirdValueToRemove, fourthValueToRemove) {
    
    
    for (let i = 0; i < originalArr.length; i++) {

        if (originalArr[i] === firstValueToRemove || originalArr[i] === secondValueToRemove
            || originalArr[i] === thirdValueToRemove || originalArr[i] === fourthValueToRemove) {
            originalArr.splice(i, 1);
            i--;
        }
    }
    return originalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
