const repeatString = function(str, times) {
    if(times < 0){
        return "ERROR";
    }
    let returnStr = "";
    for(i = 0; i < times; i++){
        returnStr = returnStr + str; 
    }
    return returnStr; 
};

// Do not edit below this line
module.exports = repeatString;
