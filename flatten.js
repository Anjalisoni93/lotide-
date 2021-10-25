const assertArraysEqual = function(arrOne, arrTwo) {
  if(eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅ Assertion passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);

  }
};

const eqArrays = function(arrNoOne, arrNoTwo) {
  for(let i = 0; i < arrNoOne.length; i++) {
    if(arrNoOne[i] !== arrNoTwo[i]) {
      return false;
    } 
  }
  return true;
};

const flatten = function(arr) {
  let flattened = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray === false) {
      flattened.push(arr[i]);
    } else {
      flattened = flattened.concat(arr[i]);
    }
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]