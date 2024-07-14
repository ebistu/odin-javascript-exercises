const fibonacci = function(nthNumber) {
    if(nthNumber < 0){
        return "OOPS";
    }
    nthNumber = Number(nthNumber);
    if(nthNumber === 1){
        return 1; 
    }
    let result = 0;
    let previousNumber = 1;
    let previousPreviousNumber = 0;
    for(i = 1; i < nthNumber; i++){
        result = previousNumber + previousPreviousNumber;
        previousPreviousNumber = previousNumber;
        previousNumber = result; 
    }
    return result; 
};

// Do not edit below this line
module.exports = fibonacci;
