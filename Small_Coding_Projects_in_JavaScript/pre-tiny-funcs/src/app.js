/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

// Get the module "calc". Using ./ to indicate that it is
// placed in the same directory as this file.
import * as tinyFuncs from './tinyFuncs.js'

console.log(`${tinyFuncs.roundUp(12.4)} [90m=> [32m13[39m`)
console.log(`${tinyFuncs.roundUp(132.9)} [90m=> [32m133[39m`)
console.log(`${tinyFuncs.roundDown(12.5)} [90m=> [32m12[39m`)
console.log(`${tinyFuncs.roundDown(132.9)} [90m=> [32m132[39m`)
console.log(`${tinyFuncs.round(12.5)} [90m=> [32m13[39m`)
console.log(`${tinyFuncs.round(132.4)} [90m=> [32m132[39m`)
console.log(`${tinyFuncs.getStringLength('Hello, World!')} [90m=> [32m13[39m`)
console.log(`${tinyFuncs.getStringLength('I don\'t need Google, my wife knows everything!')} [90m=> [32m46[39m`)
console.log(`${tinyFuncs.getFirstLetter('Hello, World!')} [90m=> [32mH[39m`)
console.log(`${tinyFuncs.getFirstLetter('Byte me!')} [90m=> [32mB[39m`)
console.log(`${tinyFuncs.getIndexOfQuestionMark('What\'s a programmer? An organism that turns caffeine and pizza into software.')} [90m=> [32m19[39m`)
console.log(`${tinyFuncs.getIndexOfQuestionMark('In c<>de we trust.')} [90m=> [32m-1[39m`)
console.log(`${tinyFuncs.isEqual('Potato', 'Potato')} [90m=> [32mtrue[39m`)
console.log(`${tinyFuncs.isEqual('Apple', 'Pear')} [90m=> [32mfalse[39m`)
console.log(`${tinyFuncs.isEqual('potato', 'Potato')} [90m=> [32mfalse[39m`)
console.log(`${tinyFuncs.isOdd(13)} [90m=> [32mtrue[39m`)
console.log(`${tinyFuncs.isOdd(12)} [90m=> [32mfalse[39m`)
console.log(`${tinyFuncs.isEven(13)} [90m=> [32mfalse[39m`)
console.log(`${tinyFuncs.isEven(12)} [90m=> [32mtrue[39m`)
