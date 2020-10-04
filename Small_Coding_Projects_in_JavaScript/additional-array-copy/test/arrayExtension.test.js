/**
 * Tests for the arrayExtension module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { immutablePushNumber } from '../src/arrayExtension.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  immutablePushNumber
// ------------------------------------------------------------------------------
describe('immutablePushNumber', () => {
  describe('exceptions', () => {
    it('Must throw a TypeError if no parameter is provided.', () => {
      expect(() => { immutablePushNumber() }).to.throw(TypeError)
    })

    it('Must throw a TypeError if second parameter is not provided.', () => {
      expect(() => { immutablePushNumber([1]) }).to.throw(TypeError)
    })

    it('Must throw a TypeError if the source parameter is not an Array.', () => {
      expect(() => { immutablePushNumber('not an array', 1) }).to.throw(TypeError)
    })

    it('Must throw a TypeError if the number parameter is not a Number.', () => {
      expect(() => { immutablePushNumber([], 'not a number') }).to.throw(TypeError)
    })
  })

  describe('side effects', () => {
    it('Must NOT return the same Array object the source parameter refers to.' +
      '(don\'t forget to make a copy of the source array).', () => {
      const arr = [1, 2, 3]
      const res = immutablePushNumber(arr, 4)
      expect(res).to.be.an('array')
      expect(res).to.not.eql(arr)
      expect(arr).to.eql([1, 2, 3])
    })
  })

  describe('return value', () => {
    it('Must return a new copy of the source with the the additional number at the end.', () => {
      const arr = [1, 2, 3]
      const res = immutablePushNumber(arr, 4)
      expect(res).to.eql([1, 2, 3, 4])
    })

    it('Must return a new copy of the source, an array, with the the additional number at the end.', () => {
      const arr = [1]
      const res = immutablePushNumber(arr, 4)
      expect(res).to.eql([1, 4])
    })

    it('Must return a new copy of the source, an array, with the the additional number at the end.', () => {
      const arr = []
      const res = immutablePushNumber(arr, 4)
      expect(res).to.eql([4])
    })
  })
})
