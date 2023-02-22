/* Formula  Fahrenheit to Celsius: (32°F − 32) × 5/9 = 0°C
   Formula  Celsius to Fahrenheit: (32°C × 9/5) + 32 = 89.6°F 

  using Math.round()

*/


/*const convertToCelsius = function(fehr) {
  return Math.round((fehr - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(cels) {
  return (((cels * 9/5) + 32) * 10) / 10;
};*/

//TOP Solution
const convertToCelsius = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
