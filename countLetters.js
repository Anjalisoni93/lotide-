const countLetters = function(string) {
  let finalCount = {};
  let newString = string.split(" ").join("");
  for (let item of newString) {
    if (finalCount[item]) {
      finalCount[item] += 1;
    } else {
      finalCount[item] = 1;
    }
  }

  return finalCount;
};

module.exports = countLetters;