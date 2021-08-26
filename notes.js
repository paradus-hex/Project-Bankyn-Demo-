// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES
// 'use strict';
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// ///////////////////////////////////////////////////
// //!Array Methods 1
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// //Slice Method: Doesn't mutate the original array
// console.log(arr.slice(1));
// console.log(arr.slice(-1));
// console.log(arr.slice(0, -2));
// console.log(arr.slice()); //creates shallow copy
// console.log([...arr]); //same shit

// //splice method: mutates the original array
// //array.splice(index,deleteCount)
// console.log(arr.splice(0, 3)); //works to delete
// console.log(arr);

// //reverse: reverses the array order and mutates the array
// console.log(arr2.reverse());
// console.log(arr2);

// //concat: joins two arrays(non-mutating)
// console.log(arr.concat(arr2));
// console.log([...arr, ...arr2]);

// //join: u know this
// console.log(arr.concat(arr2).join('-'));

// ////////////////////////
// //forEach method
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach(function (mov, ind, arr) {
//   console.log(
//     `${mov > 0 ? 'Deposite' : 'Withdrawn'} No ${ind}: ${Math.abs(mov)}`
//   );
// });

// //forEach for Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //for set
// const alp = [1, 1, 2, 3, 5];
// const unique = new Set(alp);
// console.log(unique);
// unique.forEach(function (value, throwaway, set) {
//   console.log(value, throwaway, set);
// });

// /////////////////////////////////////////
// ////////////////////////////////////////
// //!map iterator
// //maps over an entire array carrying out specified opearation and returns a whole new array of output values
// //Example1:
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 2;
// //with for of loop(which is a different approach and not functional programming)
// // const movementsUSD = [];
// // for (const mov of movements) {
// //   movementsUSD.push(mov * euroToUsd);
// // }

// //functional programming
// // const movementsUSD = movements.map(function (mov) {//without arrow function
// //   return mov * euroToUsd;
// // });

// const movementsUSD = movements.map(mov => mov * 2); //shortend using arrow function
// console.log(movements);
// console.log(movementsUSD);

// //Example2
// // movements.forEach(function (mov, ind, arr) {
// //   console.log(
// //     `${mov > 0 ? 'Deposite' : 'Withdrawn'} No ${ind}: ${Math.abs(mov)}`
// //   );
// // });

// const arrey = movements.map(function (mov, ind, arr) {
//   return `${mov > 0 ? 'Deposite' : 'Withdrawn'} No ${ind}: ${Math.abs(mov)}`;
// });
// console.log(arrey);

// //!Filter Method
// //filters the given array according to given opearation and returns new array

// const deposits = movements.filter(function (mov) {
//   return mov > 0; //notice no conditional statement(if/else) because the return function prolly does that for me here
// });
// const withdrawals = movements.filter(mov => mov < 0); //same here (return is hidden in arrow funcs,remember?)
// console.log(deposits);
// console.log(withdrawals);

// //with for of loop
// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     //using if/else again
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor);
// //we don't use for of loops in these cases for two reasons 1)Cleaner code and more importantly 2)chaining of methods which is not possible with loops

// //!Reduce Method
// //array.reduce(function(accumulator,currentValue,index,array),accumulatorInitialValue)
// //the reduce method returns only one value. The accumalator works like a snowball. Always remmber that in each iteration there has to be a return value and the return value will be the value of accumulator for the next iteration.
// //Example:1
// const maximumMovements = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(maximumMovements);

// //!Find Method
// //Similar to the filter method but one fundamental difference is that the find method returns only one element whereas the filter method returns an entire array of elements that matches the conditions
// //It also retutns the first element that matches the condition
// //Example1:
// const ex = movements.find(mov => mov < 0);
// console.log(ex); //logs -400 which is the first negative value

// //Example2:Which is more broader use
// const jesscicaAccount = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(jesscicaAccount); //finds the required  object from an array of similar objects.This is the most usefulll use of the find method

// //doing the same with the for of loop:
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') console.log(acc);
// }
// //forEach
// accounts.forEach(function (acc) {
//   if (acc.owner === 'Jessica Davis') console.log(acc);
// });

// //!Some array method
// //returns a boolean vallue(like includes method) from a given condition.The difference from filter method is the fact that the some method returns a boolean value whereas the filter method will return the values which  meet the conditions.
// const condtionsForTest = mov => mov > 0;

// const testSome = movements.some(condtionsForTest);
// const testFilter = movements.filter(condtionsForTest);

// //!Every method
// //Same as some method but will only return true if all the values return meet the conditons
// const testEvery = movements.every(condtionsForTest);
// console.log(testFilter, testEvery, testSome);

// //!Flat and Flat Map method
// //Reduces the nested arrays into one single array. But the depth may vary and does can be set with an arguement.Flat map basically performs a map operaition and then flattens it. it can only go 1 level deep.
// const nestedArray = [1, 2, [3, [4, 5]], 6, 7, [8, 9]];
// console.log(
//   nestedArray.flat(),
//   nestedArray.flat(2),
//   nestedArray.flatMap(int => int ** 2)
// );

// //!Sort Method
// //By default sorts everything as if it were a string in an alphabetical way.
// //It also mutates the original array to use with caution.
// const sortEx1 = ['Yaseen', 'Nur', 'Taz', 'Anny'];
// console.log(sortEx1.sort());
// console.log(movements);

//!Sorting numbers
// //This is how you sort in ascending order. Note that instead of 1 t could have been any other postive number and instead of -1 it could have bben any negative number.
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   else if (a < b) return -1;
// // });
// // console.log(movements);
// //better way
// movements.sort((a, b) => a - b); //it works think about it
// console.log(movements);
// //for descending
// movements.sort((a, b) => -(a - b));
// console.log(movements);

//!Fill and Form method
//making an array of 100 dice rolls
//here we dont have to manually input a value, also the second arguemnt of the from method works exactly like the map function
const diceRolls = Array.from(
  { length: 100 },
  (_, i) => Math.trunc(Math.random() * 6) + 1 //'_'means not needed argument.it's a convention
);
console.log(diceRolls);

//important Example
console.log(document.querySelectorAll('.movements__value')); //array like but not iterable
console.log(Array.from(document.querySelectorAll('.movements__value'))); //array and is iterable

labelBalance.addEventListener('click', function (e) {
  e.preventDefault();

  const movementFromUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementFromUI);
});
