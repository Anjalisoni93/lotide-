const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
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

const middle = function(arr) {
  let middleElement = [];
  let index = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return middleElement;
  } else if (arr.length % 2 === 0) {
    middleElement.push(arr[(index) - 1]);
    middleElement.push(arr[index]);
  } else {
    middleElement.push(arr[index]);
  }
  return middleElement;
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6,]));

assertArraysEqual(middle([1]), ([]));
assertArraysEqual(middle([1, 2, 3]), ([]));
assertArraysEqual(middle([1, 2, 3]), ([3, 2, 1]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([2, 3]));

assertArraysEqual(eqArrays([1, 2], [2, 2]), false);

console.log(eqArrays([1, 2], [1, 2]));
console.log(eqArrays([1, 2, 4], [1]));

