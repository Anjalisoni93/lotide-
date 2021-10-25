const eqArrays = function(arrNoOne, arrNoTwo) {
  if (arrNoOne.length !== arrNoTwo.length) {
    return false;
  }
  for (let i = 0; i < arrNoOne.length; i++) {
    if (arrNoOne[i] !== arrNoTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 1]);
assertArraysEqual([3, 3, 3], [2, 3, 3]);
assertArraysEqual(eqArrays([1, 2], [3, 2]), false);