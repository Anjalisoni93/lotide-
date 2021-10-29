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


const eqObjects = function(object1, object2) {
  let keyArrOne = Object.keys(object1);
  let keyArrTwo = Object.keys(object2);
  if (keyArrOne.length !== keyArrTwo.length) {
    return false;
  }

  for (let key of keyArrOne) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
//TEST Cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false