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

module.exports = middle;
