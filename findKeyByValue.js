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


module.exports = findKeyByValue;