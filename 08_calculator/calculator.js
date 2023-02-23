//declare x and y numbers
const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

//TOP Solution: check MDN Array.prototype.reduce()

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
	
};
//TOP Solution
const multiply = function(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function(x, y) {
	return x ** y;
  //OR return Math.pow(x, y);
};

const factorial = function(n) {
  if(n === 0) return 1;
  let product = 1;
  for(let i = n; i > 0; i--){
    product *= i;
  }
	 return product;
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
