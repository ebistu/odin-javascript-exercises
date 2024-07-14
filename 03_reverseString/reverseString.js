const reverseString = function(str) {
    let returnStr = "";
    for(i = 0; i <= str.length; i++){
        returnStr += str.charAt(str.length - i);
    }
    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
