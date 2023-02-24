/*FCC Solution: Check RegExp
https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
*/

const palindromes = function (str) {
    // str.tolowerCase and replace() any non alphabetic character with empry string "":RegExp
    const processedStr = str.toLowerCase().replace(/[^a-z]/g,"");
    if(processedStr.split("").reverse().join("") === processedStr){
        return true;
    }else{
        return false;
    }
   //split() reverse() and join() the new string
    console.log(processedStr);
};

// Do not edit below this line
module.exports = palindromes;
