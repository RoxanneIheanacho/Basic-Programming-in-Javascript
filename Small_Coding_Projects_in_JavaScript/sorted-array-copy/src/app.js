/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import { immutableSort, immutableSortDescending } from './arrayExtension.js'

const originalArray = [2, 5, 1, 6]

try {
  console.log('Original array: ', originalArray)

  // should return [1, 2, 5, 6]
  let result = immutableSort(originalArray)
  console.log('\nOriginal array: ', originalArray)
  console.log('Sorted array: ', result)

  // should return [6, 5, 2, 1]
  result = immutableSortDescending(originalArray)
  console.log('\nOriginal array: ', originalArray)
  console.log('Sorted (descending) array: ', result)
} catch (e) {
  console.error(`An exception caught: ${e.message}`)
}

console.log()

try {
  // should throw a TypeError
  immutableSort()
  console.log('immutableSort throws no TypeError!')
} catch (e) {
  console.error(`An exception caught: ${e.message}`)
}

try {
  // should throw a TypeError
  immutableSortDescending('This is not an array!')
  console.log('immutableSortDescending throws no TypeError!')
} catch (e) {
  console.error(`An exception caught: ${e.message}`)
}
