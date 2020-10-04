/**
 * mostWanted module.
 *
 * @module src/mostWanted
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Helpers
// ------------------------------------------------------------------------------

/**
 * Indicates whether the specified value is a string.
 *
 * @param {string} value - The string to test.
 * @returns {boolean} true if the value parameter is a string; otherwise, false.
 */
const isString = value => typeof value === 'string' || value instanceof String

/**
 * Indicates whether the specified value is null or an empty string.
 *
 * @param {string} value - The string to test.
 * @returns {boolean} true if the value parameter is null or an empty string (''); otherwise, false.
 */
const isNullOrEmptyString = value => isString(value) && !value.trim()

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Generates a sequence of names of dubious persons.
 *
 * @yields {string} The next name of a dubious person.
 */
export function * getNames () {
  yield 'Bugsy Malone'
  yield 'Frank Nitti'
  yield 'Stephanie St. Clare'
  yield 'Al Capone'
  yield 'Helen Gills'
  yield 'Johnny Torrio'
  yield 'Bonnie Parker'
}
/**
 * Returns the initials of a name.
 *
 * @param {string} fullName - The full name to get the initials of.
 * @returns {string} The initials of a full name.
 */
export function getInitials (fullName) {
  // If the full name is not a string or an empty string...
  if (isNullOrEmptyString(fullName)) {
    // ...throw an exception.
    throw new Error('The passed argument must be a string that\'s not empty.')
  }

  // Split the name and concatenate the first character of each word.
  return fullName.split(' ')
    .reduce((prev, next) => (prev += next.charAt(0)), '')
    .toUpperCase()
}
