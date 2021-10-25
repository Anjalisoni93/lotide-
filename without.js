const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);

  }
};

const eqArrays = function(arrNoOne, arrNoTwo) {
  for (let i = 0; i < arrNoOne.length; i++) {
    if (arrNoOne[i] !== arrNoTwo[i]) {
      return false;
    }
  }
  return true;
};


const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
    return source;
  }
};

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]); // => [2, 3]
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])),["1", "2"]); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]); // => [3]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);