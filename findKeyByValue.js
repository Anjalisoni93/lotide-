const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual}! === ${expected}!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}! !== ${expected}!`);
  }
};

const findKeyByValue = function(object, value) {
  let finalResult;
  const numOfKey = Object.keys(object);
  for (let key of numOfKey) {
    if (object[key] === value) {
      finalResult = key;
    }
  }
  return finalResult;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");