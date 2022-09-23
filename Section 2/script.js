/*let js = 'amazing';
if (js === 'amazing') {
  alert('JavaScript is FUN!');
}*/
//console.log(40 + 8 + 23 - 10);

// Lecture: Values and Variables

//console.log('Jonas');
//console.log(23);

/*let firstName = 'Matilda';
console.log(firstName);*/

// Assignment 1: Values and Variables
const country = 'Ireland';
const continent = 'Europe';
let population = 4.9;

//console.log(country + ' is in ' + continent + ', and it has ' + population + ' million people.');

// Lecture: Data Types
/*let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jack');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);*/

// Assignment 2: Data Types
const isIsland = true;
let language;

//console.log(typeof isIsland + ' ' + typeof population + ' ' + typeof country + ' ' + typeof language);

// Lecture: let, const and var
/*let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);*/

// Assignment 3: let, const and var
language = 'English';
//continent = 'North America';

// Assignment 4: Basic Operators
let halfPopulation = population / 2;
population += 1;
//console.log(population);

let finlandPopulation = 6;
//console.log(population > finlandPopulation);

let averagePopulation = 33;
//console.log(population < averagePopulation);

let description = country + ' is in ' + continent + ', and it has ' + population + ' million people, ' + 'speaking ' + language + '.';
//console.log(description);

// Assignment 5: Strings and Template Literals
description = `${country} is in ${continent}, and it has ${population} million people, speaking ${language}.`;
//console.log(description);

// Assignment 6: Taking Decisions: if / else Statements
/*if (population > averagePopulation) {
  console.log(`${country}'s population is above average.`);
}
else {
   console.log(`${country}'s population is ${averagePopulation - population} million below average.`);
}

population = 13;
if (population > averagePopulation) {
   console.log(`${country}'s population is above average.`);
 }
 else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average.`);
 }

 population = 130;
if (population > averagePopulation) {
   console.log(`${country}'s population is above average.`);
 }
 else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average.`);
 }

 population = 4.9;*/

 // Coding Challenge #1
 let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = bmiMark > bmiJohn;
//console.log(bmiMark, bmiJohn, markHigherBMI);

// Coding Challenge #2
if (bmiMark > bmiJohn) {
   // console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
}
else {
   // console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

// Assignment 7: Type Conversion and Coercion
// '9' - '5';  4
// '19' - '13' + '17'; 617
// '19' - '13' + 17; 23
// '123' < 57; false
// 5 + 6 + '4' + 9 - 4 - 2; 1143

// Assignment 8: Equality Operators: == vs. ===
/*const age = 18;
if (age === 18) {
   console.log('You just became an adult');
}

const favourite = prompt("What's your favourite number?");
console.log(favourite);

if (favourite == 23) {
   console.log('Cool! 23 is an amazing number!');
}
else if (favourite == 7) {0
   console.log('7 is also a cool number');
}
else if (favourite == 9) {
   console.log('9 is also a cool number');
}
else {
   console.log('Number is not 23 or 7 or 9');
}*/

/*const numNeighbours = Number(prompt('How many neighbour countries does your country have'));
switch (numNeighbours){
   case 0:
      console.log("No borders");
      break;
   case 1:
      console.log("Only one border!");
      break;
   default:
      console.log("More than one border.");
      break;
}*/

// Coding Challenge #3
/*const dolphinsScoreAvg = (96 + 108 + 89) / 3;
const koalasScoreAvg = (88 + 91 + 110) / 3;

if (dolphinsScoreAvg > 100 && koalasScoreAvg > 100){

   if (dolphinsScoreAvg === koalasScoreAvg){
      console.log("Draw.")
   }
   else if (dolphinsScoreAvg > koalasScoreAvg){
      console.log("Dolphins won.")
   }
   else{
      console.log("Koalas won.")
   }
}
else {
   console.log("Both lost.")
}*/

// Coding Challenge #4
/*const bill = prompt("How much was the bill?");
const tip = bill >= 50 && bill <= 300 ? bill*.15 : bill*.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${Number(bill)+Number(tip)}`);*/

