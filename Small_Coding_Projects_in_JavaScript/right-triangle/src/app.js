/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import * as shape from './shape.js'

let triangle = shape.createRightTriangle(5)
console.log(triangle)

triangle = shape.createRightTriangle(10)
console.log(triangle)
