// 'use strict';
// // //codingChallenge1
// // const checkDogs = function (dogsJulia, dogsKate) {
// //   const copyDogsJulia = [...dogsJulia];
// //   copyDogsJulia.splice(0, 1);
// //   copyDogsJulia.splice(-2, 2);

// //   const combinedData = copyDogsJulia.concat(dogsKate);

// //   combinedData.forEach(function (dog, i) {
// //     const itis =
// //       dog >= 3 ? `an adult, and is ${dog} years old` : `still a  puppy`;
// //     console.log(`Dog number ${i + 1} is ${itis}`);
// //   });
// // };
// // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// //CodingChallenge2
// // const caclAverageHumanAge = function (dogAges) {
// //   const humanAgeArr = dogAges.map(dogage =>
// //     dogage <= 2 ? 2 * dogage : 16 + dogage * 4
// //   );

// //   const filteredAge = humanAgeArr.filter(age => age >= 18);

// //   const avgAge = filteredAge.reduce(
// //     (acc, age, i, arr) => acc + age / arr.length,
// //     0
// //   );
// //   // filteredAge.reduce((acc, age) => acc + age, 0) / filteredAge.length;

// //   console.log(avgAge);
// // };

// //CodingChallenge3
// //ChainingMethods

// const caclAverageHumanAge = function (dogAges) {
//   const avgAge = dogAges
//     .map(dogage => (dogage <= 2 ? 2 * dogage : 16 + dogage * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(avgAge);
// };

// caclAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//CodingChallenge4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
console.log(dogs.owners);

//Task1
dogs.forEach(function (dog) {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
console.log(dogs);

//Task2
dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    if (dog.curFood > dog.recommendedFood * 0.9) {
      console.log('It eats too much!');
    } else if (dog.curFood < dog.recommendedFood * 1.1) {
      console.log('It eats too little!');
    }
  }
});

//Task3
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);

// dogs.forEach(dog => {
//   if (dog.curFood > dog.recommendedFood * 1.1)
//     ownersEatTooMuch.push(...dog.owners);
//   else if (dog.curFood < dog.recommendedFood * 0.9)
//     ownersEatTooLittle.push(...dog.owners);
// });
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

//Task4

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);

// let string = '';
// let string2 = '';

// ownersEatTooLittle.forEach((owner, i) => {
//   i + 2 < owner.length
//     ? (string += ` ${owner} and`)
//     : (string += ` ${owner}'s`);
// });
// console.log(`${string} dogs eat too little!`);

// ownersEatTooMuch.forEach((owner, i) => {
//   i + 2 < owner.length
//     ? (string2 += ` ${owner} and`)
//     : (string2 += ` ${owner}'s`);
// });
// console.log(`${string2} dogs eat too much!`);

//Task5
console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));

//task6
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

//Task7
const okayDogs = dogs.filter(dog => {
  if (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  )
    return dog;
});
console.log(okayDogs);

//Task8
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
