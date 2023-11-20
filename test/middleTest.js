const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const test = [1, 3, 5, 6];

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(test), [3, 5]);
assertArraysEqual(test, [1, 3, 5, 6]);