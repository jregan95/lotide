const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;

};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if ((eqArrays(object1[key], object2[key])) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

let test = { name: "Jill", lastname: "Regan" };
let test2 = { name: "Jill", lastname: "Regan" };

let test3 = { name: "Jill", lastname: "Regan" };
let test4 = { name: "John", lastname: "Regan" };

assertObjectsEqual(test, test2);
assertObjectsEqual(test3, test4);