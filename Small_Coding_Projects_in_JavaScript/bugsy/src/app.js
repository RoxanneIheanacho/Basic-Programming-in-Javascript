/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import { getGangster } from './bugsy.js'

try {
  let result = getGangster('AC')
  console.log(`AC: ${result}`)

  result = getGangster('EN')
  console.log(`EN: ${result}`)
} catch (e) {
  console.error('ERROR: ', e.message)
}
