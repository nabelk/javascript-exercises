  // Convert fahrenheit to celsius
const ftoc = function(fahrValue) {
  let result = (fahrValue - 32) * 5/9;

  if (Number.isInteger(result) === true){
    return result;
  } else {
    return Number(result.toFixed(1));
  }
};

// Convert celsius to fahrenheit
const ctof = function(celsValue) {
  let result = (celsValue * 9/5) + 32;

  if (Number.isInteger(result) === true){
    return result;
  } else {
    return Number(result.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
