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
