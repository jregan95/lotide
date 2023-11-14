const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const myArr = [1, 5, 6, 7];
const secArr = [1];
const thirdArr = [];

const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const val = tail(myArr);
assertEqual(val.length , myArr.length - 1);

const secVal = tail(secArr);
assertEqual(secVal.length, secArr. length - 1);

const thirdVal = tail(thirdArr);
assertEqual(thirdVal, thirdArr);