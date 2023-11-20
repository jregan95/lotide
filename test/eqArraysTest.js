const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 4, 5], [1, 4, 6]), false);
assertEqual(eqArrays([1, 4, 5], [1, 4, 5]), true);
assertEqual(eqArrays([1, 4, 5, 8], [1, 4, 6]), false);
assertEqual(eqArrays([1, '4', true], [1, '4', true]), true);
assertEqual(eqArrays([1, 4, "hi"], [1, 4, "bye"]), false);