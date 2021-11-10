const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6,]));

assertArraysEqual(middle([1]), ([]));
assertArraysEqual(middle([1, 2, 3]), ([]));
assertArraysEqual(middle([1, 2, 3]), ([3, 2, 1]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([2, 3]));