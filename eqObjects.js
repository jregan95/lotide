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
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);

  if(arr1.length !== arr2.length) {
    return false;
  }

  for (let key of arr1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
       if((eqArrays(object1[key], object2[key])) === false) {
        return false;
       }
    }
    
     else if(object1[key] !== object2[key]) {
      return false;
    }
    
  }

  return true;
};
  



const shirtObject = { color: 1, size: "1" };
const anotherShirtObject= { size: "1", color: 1};

const test = { color: 1, size: "1", test: "test" };
const test1= { size: "1", color: 1};

const test2 = {};
const test3= {};

const test4 = { color: "blue", size: "1"};
const test5= { size: "1", color: 1};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(test, test1), false);
assertEqual(eqObjects(test2, test3), true);
assertEqual(eqObjects(test4, test5), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);