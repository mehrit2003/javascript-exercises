/* Formula  Fahrenheit to Celsius: (32°F − 32) × 5/9 = 0°C
   Formula  Celsius to Fahrenheit: (32°C × 9/5) + 32 = 89.6°F 

*/


const convertToCelsius = function(fehr) {
  return (fehr - 32) * 5/9;
};

const convertToFahrenheit = function(cels) {
  return (cels * 9/5) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
