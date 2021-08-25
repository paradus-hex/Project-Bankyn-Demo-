'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Arnab Pahlavi',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Yaseen Nur',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Nabil Rashid',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Anny Sultana',
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//!My code
//Withdraw/Deposit sector
const calcDisplayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //this essentially wipes everythung under the movements class

  const sortedMovements = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;
  console.log(sortedMovements);

  sortedMovements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
     <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
     </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Displays total balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//In,Out,Interest Display
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

//generate username
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(acc => acc[0])
      .join('');
  });
};

//DRYing code
const updateUI = function (acc) {
  calcDisplayMovements(acc.movements);

  //Calculate and DIsplay balance
  calcDisplayBalance(acc);

  //Calculate and Display Summary
  calcDisplaySummary(acc);
};

//login eventhandler
let currentAcc;
btnLogin.addEventListener('click', function (e) {
  //prevents the default reload of the page
  e.preventDefault();

  currentAcc = accounts.find(acc => acc.username === inputLoginUsername.value);
  // console.log(currentAcc);
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    //Clear login fields
    inputLoginPin.value = inputLoginUsername.value = '';
    // inputLoginPin.blur();

    //Display UI and Welcome message
    labelWelcome.textContent = `Welcome, ${currentAcc.owner.split(' ')[0]}!`;
    containerApp.style.opacity = 100;

    updateUI(currentAcc);
  }
});

//Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    receiverAccount !== currentAcc &&
    amount <= currentAcc.balance
  ) {
    //Notice that only does this displays the transfer of amount but also this calculates the total ballance of the corresponding accounts because of the calcDisplay function,which works on the movements array,which we have just updated!Amazing
    currentAcc.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentAcc);
  }
});

//Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    Number(inputClosePin.value) === currentAcc.pin &&
    inputCloseUsername.value === currentAcc.username
  ) {
    const deleteIndex = accounts.findIndex(
      acc => acc.username === inputCloseUsername.value
    );
    //delete user
    accounts.splice(deleteIndex, 1);
    //hide ui
    containerApp.style.opacity = 0;
    //clear close credentials
    inputClosePin.value = inputCloseUsername.value = '';
  }
});

//loan money
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAcc.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAcc.movements.push(loanAmount);

    updateUI(currentAcc);

    inputLoanAmount.value = '';
  }
});

//Sort eventhandler
let sortState = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  calcDisplayMovements(currentAcc.movements, !sortState);
  sortState = !sortState;
});

createUsername(accounts);
console.log(accounts);
