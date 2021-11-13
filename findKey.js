const findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (let finalKey of keys) {
    if (callback(object[finalKey])) {
      return finalKey;
    }
  }
  return undefined;
};

module.exports = findKey;

