const removeFromArray = function(arr, ...args) {
    returnArr = [];
    arr.forEach((item) => {
        if(!args.includes(item)){
            returnArr.push(item);
        }
    })
    return returnArr;

};

// Do not edit below this line
module.exports = removeFromArray;
