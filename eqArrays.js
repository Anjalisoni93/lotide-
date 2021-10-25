const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅" + "✅" + "✅ " + "Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅ Assertion passed: ${actual}! === ${expected}!`);
  } else {
    // console.log("🛑" + "🛑" + "🛑 " + "Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}! !== ${expected}!`);
  }
};

const eqArrays = function(arrNoOne, arrNoTwo) {
  if (arrNoOne.length !== arrNoTwo.length) {
    return false;
  }
  for (let i = 0; i < arrNoOne.length; i++) {
    if (arrNoOne[i] === arrNoTwo[i]) {
      return true;
    }
  }
  return false;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false


