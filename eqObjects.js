const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual}! === ${expected}!`);
  } else {
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

//TEST Cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba))); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc))); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc))); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2))); // => false