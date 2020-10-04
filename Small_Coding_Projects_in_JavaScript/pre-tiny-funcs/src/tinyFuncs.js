/* eslint-disable jsdoc/require-returns-check */
/**
 * TinyFuncs module.
 *
 * @module src/tinyFuncs
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns the value of a number rounded upward to its nearest integer.
 *
 * @param {number} number  A number.
 * @returns {number} The smallest integer greater than or equal to the given number.
 */
export function roundUp (number) {
  return Math.round(number)
  // TODO: Write your code here.
}

/**
 * Returns the value of a number rounded downward to its nearest integer.
 *
 * @param {number} number A number.
 * @returns {number} The smallest integer less than or equal to the given number.
 */
export function roundDown (number) {
  return Math.floor(number)
  // TODO: Write your code here.
}

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number A number.
 * @returns {number} The value of the given number rounded to the nearest integer.
 */
export function round (number) {
  return Math.round(number)
  // TODO: Write your code here.
}

/**
 * Returns the length of a string.
 *
 * @param {string} str The string to get the length of.
 * @returns {number} Returns the the length of the sequence of characters of the given string.
 */
export function getStringLength (str) {
  return str.length
  // TODO: Write your code here.
}

/**
 * Returns the first character from a string.
 *
 * @param {string} str The string to get the first character from.
 * @returns {string} A string representing the first character.
 */
export function getFirstLetter (str) {
  return str.charAt(0)
  // TODO: Write your code here.
}

/**
 * Returns the index of the first occurrence of the question mark character (?).
 *
 * @param {string} str The string to search.
 * @returns {number} The index of the first occurrence of the question mark character; -1 if not found.
 */
export function getIndexOfQuestionMark (str) {
  return str.indexOf('?')
  // TODO: Write your code here.
}

/**
 * Determines whether two strings have the same value.
 *
 * @param {string} str1 The first string to compare.
 * @param {string} str2 The second string to compare.
 * @returns {boolean} True if the value of the str1 parameter is the same as the value of the str2 parameter; otherwise, false.
 */
export function isEqual (str1, str2) {
  if (str1.localeCompare(str2) === 0) {
    return true
  } else {
    return false
  }
  // return str1.localeCompare(str2)
  // TODO: Write your code here.
}

/**
 * Returns true if number is odd, or false if number is even.
 *
 * @param {number} number The number to test.
 * @returns {boolean} True if number is odd; otherwise, false.
 */
export function isOdd (number) {
  if (number % 2 !== 0) {
    return true
  } else {
    return false
  }// TODO: Write your code here.
}

/**
 * Returns true if number is even, or false if number is odd.
 *
 * @param {number} number The number to test.
 * @returns {boolean} True if number is even; otherwise, false.
 */
export function isEven (number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
  // TODO: Write your code here.
}
