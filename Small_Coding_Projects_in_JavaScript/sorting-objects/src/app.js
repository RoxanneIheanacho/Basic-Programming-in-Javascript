/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import * as repository from './repository.js'
import * as team from './team.js'

try {
  const teams = repository.loadTeams()

  console.log('Unordered teams\n---------------')
  console.log(teams)

  console.log('\nOrdered teams\n-------------')
  console.log(team.sortByPoints(teams))
} catch (e) {
  console.error(e.message)
}

// import { fileURLToPath } from 'url'
// import { dirname } from 'path'
// const __dirname = fileURLToPath(import.meta.url)

// console.log(__dirname)
// console.log(dirname(__dirname))
