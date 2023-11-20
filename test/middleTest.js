const assert = require('chai').assert;
const middle = require('../middle');

const testArr = [1, "middle", 3];

describe("#middle", () => {

  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['middle'] for [1, 'middle', 3]", () => {
    assert.deepEqual(middle(testArr), ['middle']);
  });

});
