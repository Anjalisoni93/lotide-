const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let finalCount = {};
  let newString = string.split(" ").join("");
  for (let item of newString) {
    if (finalCount[item]) {
      finalCount[item] += 1;
    } else {
      finalCount[item] = 1;
    }
  }

  return finalCount;
};

console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("LHL"). L, 2);
assertEqual(countLetters("Lighthouse in the house"). t, 3);