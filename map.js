const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let index = 0; index < arr1.length; index++) {
      if (arr1[index] !== arr2[index]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const numbers = [1, 5, 10, 15];
const words = ["ground", "control", "to", "major", "tom"];
const animals = ["cat", "dog"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const reuslts2 = map(numbers, number => number + number);
const results3 = map(animals, animal => `The animal is a ${animal}`);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(reuslts2, [2, 10, 20, 30]);
assertArraysEqual(results3, ['The animal is a cat', 'The animal is a dog']);