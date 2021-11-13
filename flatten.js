const flatten = function(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray === false) {
      flattened.push(arr[i]);
    } else {
      flattened = flattened.concat(arr[i]);
    }
  }
  return flattened;
};


module.exports = flatten;