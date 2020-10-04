/**
 * arrayExtension module.
 *
 * @module src/arrayExtension
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns a numerically sorted copy of an array.
 *
 * @param {number[]} source - The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {number[]} A sorted copy of the source array.
 */
export function immutableSort (source) {
  const copy = source.slice()
  copy.sort()
  return copy 

  // TODO: Write your code here
  // TODO: Write your code here.
}

/**
 * Returns a numerically sorted copy (descending order) of an array.
 *
 * @param {number[]} source - The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {number[]} A sorted copy (descending order) of the source array.
 */
export function immutableSortDescending (source) {
  const copy = source.slice()
  copy.sort()
  copy.reverse()
  return copy
  // TODO: Write your code here.
}
