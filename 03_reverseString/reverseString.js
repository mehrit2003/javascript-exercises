const reverseString = function(text) {
    let splitStr = text.split("");      //split the string argument into a new array
    let reversedSplitedArray = splitStr.reverse(); // reverse the array
    let finalReversedString = reversedSplitedArray.join(""); //join the reversedSplitedArray
    
    return finalReversedString;
};

// Do not edit below this line
module.exports = reverseString;


//TOP Solution:
/*
const reverseString = function(string) {
 return string.split('').reverse().join('');
};

module.exports = reverseString;
*/