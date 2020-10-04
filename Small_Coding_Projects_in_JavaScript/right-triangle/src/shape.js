/**
 * shape module.
 *
 * @module src/shape
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns a string representing a right triangle.
 *
 * @param {number} base - The number of characters in the triangle's base.
 * @returns {string} A string of hash characters describing a right triangle.
 */
export function createRightTriangle (base) {
  let fill = ''
  for (let i = base; i > 0; i--) {
    if (i === base) {
      fill += '#'.repeat(i) + '\n'
    } else {
      const space = base - i
      fill += ' '.repeat(space) + '#'.repeat(i) + '\n'
    }
  }
  return fill
}
