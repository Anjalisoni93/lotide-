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

module.exports = eqArrays;



