const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let index = 0; index < arr1.length; index++) {
      if (arr1[index] !== arr2[index]) {
        return false;
      } else {
        return true;
      }
    }
  }
}
assertEqual(eqArrays([1, 4, 5], [1, 4, 6]), false);
assertEqual(eqArrays([1, 4, 5], [1, 4, 5]), true);
assertEqual(eqArrays([1, 4, 5, 8], [1, 4, 6]), false);
assertEqual(eqArrays([1, '4', true], [1, '4', true]), true);
assertEqual(eqArrays([1, 4, "hi"], [1, 4, "bye"]), false);