const reverseString = function(text) {
    let splitStr = text.split("");
    let reversedSplitedArray = splitStr.reverse();
    let finalReversedString = reversedSplitedArray.join();
    
    return finalReversedString;
};

// Do not edit below this line
module.exports = reverseString;
