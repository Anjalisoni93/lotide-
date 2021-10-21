const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual}! === ${expected}!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}! !== ${expected}!`);
  }
};

const head = function(arr) {
  let first = arr[0];
  if (arr === []) {
    return undefined;
  } else {
    return first;
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));