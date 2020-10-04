/**
 * repository module.
 *
 * @module src/team
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

// The path of the current ES module.
const __dirname = dirname(fileURLToPath(import.meta.url))

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns an array of team objects.
 *
 * @returns {object[]} An array of team objects.
 */
export function loadTeams () {
  const obj = JSON.parse(readFileSync(join(__dirname, '..', 'data', 'teams.json')))
  return obj
}
