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

const animals = ["cat", "dog", "fish", "pig"];
const nums = [1, 5, 5, 6, 8, 3];
const mix = ["yellow", 5, 9, "blue", 2];

const without = function(arr, remove) {
  let newArr = [];
  
  for (let index = 0; index < arr.length; index++) {
    if (!remove.includes(arr[index])) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

console.log(without(animals, ["dog", "cat"]));
console.log(without(nums, [5]));
console.log(without(mix, [9, "blue"]));

assertArraysEqual(animals, ["cat", "dog", "fish", "pig"]);
assertArraysEqual(nums, [1, 5, 5, 6, 8, 3]);
assertArraysEqual(mix, ["yellow", 5, 9, "blue", 2]);