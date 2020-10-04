/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import { immutablePushNumber } from './arrayExtension.js'

const arr = [1, 2, 3]
const newArr = immutablePushNumber(arr, 4)

console.log(arr)
console.log(newArr)
console.log(arr !== newArr)
