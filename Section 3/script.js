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

//console.log(checkWinner(avgDolphins, avgKoalas));

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

//console.log(checkWinner(avgDolphins2, avgKoalas2));

// Arrays

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');

friends.unshift('JOhn');

friends.pop();
friends.pop();

friends.shift();

if (friends.includes('Steven')){
   //console.log("You have a friend called Steven");
}

// Code Challenge 2

/*const calcTip = billToCalc => {
   return billToCalc >= 50 && billToCalc <= 300 ? billToCalc*.15 : billToCalc*.2;
};

const bills = [125, 555, 44];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++){
   tips.push(calcTip(bills[i]));
   total.push(bills[i] + tips[i])
   //console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value was ${total[i]}`);
}*/

// Objects

const Jack = {
   firstName: 'Jack',
   lastname: 'Patterson',
   age: 19,
   job: 'student',
   friends: ['Ethan', 'Eric', 'Hyden', 'Michael']
}

/*const interestedIn = prompt('What do you want to know about Jack?');
if (Jack[interestedIn]){
   console.log(Jack[interestedIn]);
}
else {
   console.log('Unknown Query.')
}*/

Jack.location = 'Ireland';
Jack.twitter = '@DaJackPatterson';
//console.log(Jack);

// Object Challenge
//console.log(`${Jack.firstName} has ${Jack.friends.length} friends, and his best friend is called ${Jack.friends[0]}.`);

// Code Challenge 3

const Mark = {
   fullName: 'Mark Miller',
   mass: 78,
   height: 1.69,
   calcBmi: () => {
      return Mark.mass / Mark.height ** 2; 
   }
}

const John = {
   fullName: 'John Smith',
   mass: 92,
   height: 1.95,
   calcBmi: () => {
      return John.mass / John.height ** 2; 
   }
}

Mark.bmi = Mark.calcBmi();
John.bmi = John.calcBmi();

if (Mark.bmi > John.bmi) {
   //console.log(`${Mark.fullName}'s BMI (${Mark.bmi}) is higher than ${John.fullName}'s (${John.bmi})!`);
}
else if (John.bmi > Mark.bmi) {
   //console.log(`${John.fullName}'s BMI (${John.bmi}) is higher than ${Mark.fullName}'s (${Mark.bmi})!`);
}
else {
   //console.log("Both are either same or a valuer is invalid")
}

// Loops

const JackArray = [
   'Jack',
   'Patterson',
   19,
   'student',
   ['Ethan', 'Eric', 'Hyden', 'Michael']
]
const types = []

for (let i = 0; i < JackArray.length; i++){
   //console.log(JackArray[i], typeof(JackArray[i]));
   types.push(typeof(JackArray[i]))
}
//console.log(types);

let rep = 1;
while (rep <= 10){
   //console.log(`Test ${rep}`);
   rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
   //console.log(`You rolled a ${dice}`);
   dice = Math.trunc(Math.random() * 6) + 1;
   if (dice === 6){
      //console.log('Loop is about to end.')
   }
}

// Code Challenge 4
const calcTip = billToCalc => {
   return billToCalc >= 50 && billToCalc <= 300 ? billToCalc*.15 : billToCalc*.2;
};

const calcAverageTip = arr => {
   let sum = 0;
   for (let i = 0; i < arr.length; i++){
      sum += arr[i];
   }
   return sum / arr.length;
}

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++){
   tips.push(calcTip(bills[i]));
   total.push(bills[i] + tips[i])
   console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value was ${total[i]}`);
}

console.log(`The average of the total was ${calcAverageTip(total)}`);