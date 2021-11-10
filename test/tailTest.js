const head = require('../tail');
const assertEqual = require('../assertEqual');
const result = ["Hello", "Lighthouse", "Labs"];
const words = ["Yo Yo", "Lighthouse", "Labs"];


assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
head(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!