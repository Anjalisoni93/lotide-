const head = function(arr) {
  let first = arr[0];
  if (arr === []) {
    return undefined;
  } else {
    return first;
  }
};

module.exports = head;