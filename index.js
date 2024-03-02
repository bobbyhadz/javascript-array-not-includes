// EXAMPLE 1 - Check if Array Doesn't contain a Value in JavaScript

const arr = ['a', 'b', 'c'];

const notIncludesD = !arr.includes('d');
console.log(notIncludesD); // 👉️ true

const notIncludesC = !arr.includes('c');
console.log(notIncludesC); // 👉️ false

if (notIncludesC) {
  console.log('✅ the value c is NOT contained in the array');
} else {
  // 👇️ this runs
  console.log('⛔️ the value c is contained in the array');
}

// // ---------------------------------------

// // ✅ Check if an object is not contained in an array
// const arr2 = [{id: 1}, {id: 2}, {id: 3}];

// const notContained = arr2.every(obj => {
//   return obj.id !== 4;
// });

// console.log(notContained); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if Array Doesn't contain a Value using `indexOf()`

// const arr = ['a', 'b', 'c'];

// if (arr.indexOf('d') === -1) {
//   // 👇️ this runs
//   console.log('The value d is NOT contained in the array');
// } else {
//   console.log('The value d is contained in the array');
// }

// console.log(arr.indexOf('c')); // 👉️ 2
// console.log(arr.indexOf('z')); // 👉️ -1

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if an object is not contained in an array in JavaScript

// const arr2 = [{id: 1}, {id: 2}, {id: 3}];

// const notContained = arr2.every(obj => {
//   return obj.id !== 4;
// });

// console.log(notContained); // 👉️ true

// if (notContained) {
//   console.log('The object is NOT contained in the array');
// } else {
//   console.log('The object is contained in the array');
// }
