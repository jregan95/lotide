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

const letterPositions = function(sentence) {
  const results = {};
  let str = sentence.split(" ").join("");
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(i);
  }
  return results;
};

console.log(letterPositions("hello"));
console.log(letterPositions("cat"));
assertArraysEqual(letterPositions("jill regan").l, [2,3]);
assertArraysEqual(letterPositions("jill regan").j, [0]);