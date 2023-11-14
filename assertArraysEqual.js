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

const assertArraysEqual = function(bool) {
  if (bool) {
    console.log("This is true");
    } else {
      console.log("This is false");
    }
};

assertArraysEqual(eqArrays([1, 5, 5], [1, 4, 6]));
assertArraysEqual(eqArrays([1, 4, 5], [1, 4, 5]));
assertArraysEqual(eqArrays([1, "hi", 5], [1, 4, 6]));
assertArraysEqual(eqArrays([1, 4, 5], [1, 4, "no"]));
assertArraysEqual(eqArrays([1, 4, "Jill"], [1, 4, "Jill"]));