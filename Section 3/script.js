'use strict';

// Functions

function logger() {
   console.log("My name is Jack.");
}

//logger();

function fruitProcessor(apples, oranges){
   return `Juice with ${apples} apples and ${oranges} oranges.`;
}

//console.log(fruitProcessor(5,0));

function describeCountry(country, population, capitalCity){
   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

// console.log(describeCountry("Ireland", 4.9, "Dublin"));
// console.log(describeCountry("United Kingdom", 67.2, "London"));
// console.log(describeCountry("USA", 329.5, "Washington DC"));

// Functions vs Expressions

function calcAge(birthYear){
   return 2022 - birthYear;
}

//console.log(calcAge(20));

const calcAge2 = function (birthYear){
   return 2022 - birthYear;
}

//console.log(calcAge2(20));

function percentageOfWorld(population){
   return (population/7900)*100;
}

// console.log(percentageOfWorld(4.9));
// console.log(percentageOfWorld(67.2));
// console.log(percentageOfWorld(329.5));

const percentageOfWorld2 = function (population){
   return (population/7900)*100;
}

// console.log(percentageOfWorld2(4.9));
// console.log(percentageOfWorld2(67.2));
// console.log(percentageOfWorld2(329.5));

// Arrow Functions
const calcAge3 = birthYear => 2022 - birthYear;

// console.log(calcAge3(20));

const yearsUntilRetirment = (birthYear, firstName) => {
   const retirement = 65 - calcAge3(birthYear);
   return `${firstName} retires in ${retirement} years.`;
}

// console.log(yearsUntilRetirment(2002, "Jack"));

const percentageOfWorld3 = population => {
   return (population/7900)*100;
}

// console.log(percentageOfWorld2(4.9));
// console.log(percentageOfWorld2(67.2));
// console.log(percentageOfWorld2(329.5));

// Functions calling other functions
const describePopulation = function(country, population){
   return `${country} has ${population} million people which is about ${percentageOfWorld(population)}% of the world.`;
}

// console.log(describePopulation("Ireland", 4.9));
// console.log(describePopulation("UK", 67.2));
// console.log(describePopulation("US", 329.5));

// Coding Challenge #1
const calcAverage = (avgVal1, avgVal2, avgVal3) => {
   return (avgVal1 + avgVal2 + avgVal3) / 3;
}

const avgDolphins = calcAverage(44,23,71);
const avgKoalas = calcAverage(65,54,49);

const checkWinner = function(avgDolphins, avgKoalas){
   if (avgDolphins > avgKoalas * 2){
      return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
   }
   else {
      return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
   }
}

console.log(checkWinner(avgDolphins, avgKoalas));

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphins2, avgKoalas2));