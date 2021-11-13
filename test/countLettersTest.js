const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("LHL"). L, 2);
assertEqual(countLetters("Lighthouse in the house"). t, 3);