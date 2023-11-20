const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 5, 5], [1, 4, 6]);
assertArraysEqual([1, 4, 5], [1, 4, 5]);
assertArraysEqual([1, "hi", 5], [1, 4, 6]);
assertArraysEqual([1, 4, 5], [1, 4, "no"]);
assertArraysEqual([1, 4, "Jill"], [1, 4, "Jill"]);