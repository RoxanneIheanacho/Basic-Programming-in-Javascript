/**
 * Tests for the statistics module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import * as calc from '../src/calc.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  addNumbers
// ------------------------------------------------------------------------------
describe('addNumbers', () => {
  describe('return value', () => {
    it('addNumbers() should return 42', () => {
      expect(calc.addNumbers()).to.equal(42)
    })
  })
})
