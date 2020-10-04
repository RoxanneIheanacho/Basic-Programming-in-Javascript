/**
 * team module.
 *
 * @module src/team
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Type definitions
// ------------------------------------------------------------------------------

/**
 * Represents a team.
 *
 * @typedef {object} Team
 * @property {string} name - The team's name.
 * @property {string} nickname - The team's nickname.
 * @property {number} points - The points.
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Sorts the team objects of an array in place and returns the array. The team
 * objects is sorted by descending points.
 *
 * @param {Team[]} teams - An unordered array of references to team objects.
 * @returns {Team[]} An ordered array of references to team objects.
 */

// https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
export function sortByPoints (teams) {
  return teams.sort((a, b) => parseFloat(a.points) - parseFloat(b.points))
  // TODO: Write your code here!
}
