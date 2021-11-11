# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anjali8993/lotide`

**Require it:**

`const _ = require('@anjali8993/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compares two arrays actual and expected to see if they are equal or not.
* `assertEqual`: Compares two parameters and see if they are equal or not.
* `assertObjectsEqual`: Compares two objects and see if they are equal or not.
* `countLetters`: Counts number of letter occured in a string.
* `countOnly`: Counts number of items/names occured in an array.
* `eqArrays`: Compares two arrays and returns true or false.
* `eqObjects`: Compares two objects and returns true or false.
* `findKey`: Returns first key to a truthy value.
* `findKeyByValue`: Returns first key to a given value.
* `flatten`: Takes two arrays and flatten them into a new array.
* `head`: Returns the first element of an array.
* `letterPositions`: Returns a number based on the position of that letter in an array.
* `map`: Returns first letter from a given array.
* `middle`: Returns a middle value from a given array.
* `tail`: Returns remaining elements to a new array.
* `takeUntil`: Returns a new array until a given condition is satisfied.
* `without`: Returns a new array without removed items.