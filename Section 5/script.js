'use strict';

// Code challenge
const tempForecast1 = [17, 21, 23];
const tempForecast2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let forecastStr = 'The weather is forecasted as the following: ';
  for (let i = 0; i < arr.length; i++) {
    forecastStr += `${arr[i]}°C in ${i + 1} day(s)... `;
  }
  console.log(forecastStr);
};

printForecast(tempForecast1);
printForecast(tempForecast2);
