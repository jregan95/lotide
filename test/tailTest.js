const assert = require('chai').assert;
const tail = require('../tail');

const testArr = [1, 'tail', 'tail'];

describe("tail", () => {

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['hi', 'bye'] for ['yes, 'hi, 'bye]", () => {
    assert.deepEqual(tail(['yes', 'hi', 'bye']), ['hi', 'bye']);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns [1] for [0, 1]", () => {
    assert.deepEqual(tail([0, 1]), [1]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns ['tail', 'tail'] for [1, 'tail', 'tail']", () => {
    assert.deepEqual(tail(testArr), ['tail', 'tail']);
  });

});


