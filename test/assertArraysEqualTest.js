const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 1]);
assertArraysEqual([3, 3, 3], [2, 3, 3]);
assertArraysEqual([1, 2], [3, 2]);