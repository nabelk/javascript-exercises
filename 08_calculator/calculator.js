const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {	
  return a - b;
};

const sum = function(arr) {
  let initial = 0;
  const sum = arr.forEach(num => {
    initial += num;
  });

  return initial;
};

const multiply = function(arr) {
  let initial = 1;
  const sum = arr.forEach(num => initial *= num);
  return initial;
};

// console.log(multiply([2,4,6,8,10,12,14]));

const power = function(a,b) {
  return a ** b;
};

// console.log(power([4,3]));

const factorial = function(num) {
  let fact = 1;
  if (num === 0){
    return 1;
  } else if (num > 0){
    for (let i = 1; i <= num; i++ ){
      fact *= i;
    }
  }
	return fact;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
