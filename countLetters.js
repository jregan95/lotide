const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  
  let result = {};
  let newStr = str.split(" ").join("");
  
  for (let letter of newStr) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

const test = countLetters("test");

console.log(countLetters("jill regan"));
console.log(countLetters('lighthouse labs is cool'));
console.log(test);
assertEqual(test['t'], 2);
assertEqual(test["g"], undefined);