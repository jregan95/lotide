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

assertArraysEqual([1, 5, 5], [1, 4, 6]);
assertArraysEqual([1, 4, 5], [1, 4, 5]);
assertArraysEqual([1, "hi", 5], [1, 4, 6]);
assertArraysEqual([1, 4, 5], [1, 4, "no"]);
assertArraysEqual([1, 4, "Jill"], [1, 4, "Jill"]);