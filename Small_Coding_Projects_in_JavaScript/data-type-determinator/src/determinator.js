/**
 * determinator module.
 *
 * @module src/determinator
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data - The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */
export function tellType (data) {
  const result = 'You sent me a ' + typeof data

  // TODO: Write your code here.

  return result
}
