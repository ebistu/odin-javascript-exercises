const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        
    });
};

const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth; 
}
// Do not edit below this line
module.exports = findTheOldest;
