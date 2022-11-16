'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Login
let currentAccount;

// Bank Main Page
const displayMovement = account => {
  containerMovements.innerHTML = '';

  account.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = function (account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const outgoing = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    displayMovement(currentAccount);
    calcPrintBalance(currentAccount);
    calcDisplaySummary(currentAccount);
  } else {
    labelWelcome.textContent = `Invalid login, please try again.`;
    containerApp.style.opacity = 0;
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const juliaDogs = [3, 5, 2, 12, 7];
// const kateDogs = [4, 1, 15, 8, 3];

// const juliaDogs2 = [9, 16, 6, 8, 3];
// const kateDogs2 = [10, 5, 6, 1, 4];

// function checkDogs(juliaDogs, kateDogs) {
//   let juliaDogsFixed = juliaDogs;
//   juliaDogsFixed = juliaDogsFixed.slice(1, juliaDogsFixed.length - 2);

//   let allDogs = juliaDogsFixed.concat(kateDogs);

//   allDogs.forEach((age, i) => {
//     console.log(
//       `Dog ${i} is ${
//         age >= 3 ? 'an adult' : 'a puppy'
//       } and is ${age} years old.`
//     );
//   });
// }

// checkDogs(juliaDogs, kateDogs);
// checkDogs(juliaDogs2, kateDogs2);

// const eurToUsd = 1.1;

// const movementsUsd = movements.map(mov => mov * eurToUsd);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'desposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}.`
// );
// console.log(movementsDescriptions);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawls = movements.filter(mov => mov < 0);

// console.log(withdrawls);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// const dogsData1 = [5, 2, 4, 1, 15, 8, 3];
// const dogsData2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (dogAges) {
//   const humanAges = dogAges.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

//   const humanAgesFiltered = humanAges.filter(age => age >= 18);

//   const avgAges =
//     humanAgesFiltered.reduce((acc, cur) => acc + cur, 0) /
//     humanAgesFiltered.length;

//   return avgAges;
// };
// // console.log(calcAverageHumanAge(dogsData1));
// // console.log(calcAverageHumanAge(dogsData2));

// // const eurToUsd = 1.1;
// // const totalDepositUSD = movements
// //   .filter(mov => mov > 0)
// //   .map(move => move * eurToUsd)
// //   .reduce((acc, move) => acc + move, 0);

// // console.log(totalDepositUSD);

// const dogsData3 = [5, 2, 4, 1, 15, 8, 3];
// const dogsData4 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAges = dogAges =>
//   dogAges
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// console.log(calcAverageHumanAges(dogsData3));
// console.log(calcAverageHumanAges(dogsData4));

// movements.find(mov => mov < 0);
