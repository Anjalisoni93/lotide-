const assert = require('chai').assert;
const tail   = require('../tail');
const result = ["Hello", "Lighthouse", "Labs"];


describe("#tail", () => {
  it("returns an array for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns a new array of length 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(result).length, 2);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
 
});
