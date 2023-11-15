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


const middle = function(arr) {
  let middleNum = 0;
  let middle = [];
  if (arr.length % 2 !== 0) {
    middleNum = Math.ceil(arr.length / 2);
    middle.push(arr[middleNum - 1]);
  } else {
    middleNum = arr.length / 2;
    middle.push([arr[middleNum - 1], arr[middleNum]]);
  }
  return middle;
};

const test = [1, 3, 5, 6];
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle(test));

assertArraysEqual(test, [1, 3, 5, 6]);