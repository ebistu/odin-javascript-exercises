const palindromes = function (str) {

    str = str.toLowerCase();
    let tempStr = "";
    for(i = 0; i <= str.length; i++){
        if(str.charAt(i) === ' ' | str.charAt(i) === '.' | str.charAt(i) === ',' | str.charAt(i) === '!'){
            continue;
        }
        tempStr += str.charAt(i);
    }
    let reversedStr = ""; 
    for(i = 0; i <= tempStr.length; i++){
        reversedStr += tempStr.charAt(tempStr.length - i);
    }
    return tempStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
