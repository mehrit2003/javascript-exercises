const reverseString = function(text) {
    let splitStr = text.split("");      //split the string argument into a new array
    let reversedSplitedArray = splitStr.reverse(); // reverse the array
    let finalReversedString = reversedSplitedArray.join(""); //join the reversedSplitedArray
    
    return finalReversedString;
};

// Do not edit below this line
module.exports = reverseString;
