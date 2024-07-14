const add = function(first, second) {
	return first + second; 
};

const subtract = function(first, second) {
	return first - second; 
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
};

const multiply = function(arr) {
  let multiplication = 1;
  arr.forEach((item) => {
    multiplication = multiplication * item;
  });
  return multiplication;
};

const power = function(number, power) {
  let result = 0; 
	for(i = 0; i <= power; i++){
    result = result + number * number;
  }
  return result;
};

const factorial = function(number) {
	if(number === 0){
    return 1; 
  }
  let result = number;
  for(i = 1; i < number; i++){
    result = result * (number - i);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
