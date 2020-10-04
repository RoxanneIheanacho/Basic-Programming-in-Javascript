/**
 * Tests for the arrayExtension module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { immutableSort, immutableSortDescending } from '../src/arrayExtension.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  immutableSort
// ------------------------------------------------------------------------------
describe('immutableSort', () => {
  it('Must throw a TypeError if the source parameter is not an Array.', () => {
    expect(() => { immutableSort('Not an array.') }).to.throw(TypeError)
  })

  it('Must NOT return the same Array object the source parameter refers to.', () => {
    const arr = [4, 2, 3]
    const res = immutableSort(arr)
    expect(res).to.an('array').and.to.not.eql(arr)
  })

  it('The source array must be untouched.', () => {
    const arr = [4, 2, 3]
    const res = immutableSort(arr)
    expect(res).to.an('array')
    expect(arr).to.eql([4, 2, 3])
  })

  it('immutableSort([2, 30, 6, 1, 4]) must return [1, 2, 4, 6, 30].', () => {
    expect(immutableSort([2, 30, 6, 1, 4])).to.eql([1, 2, 4, 6, 30])
  })

  it('immutableSort([4]) must return [4].', () => {
    expect(immutableSort([4])).to.eql([4])
  })

  it('immutableSort([32817, -2, -4, 1987]) must return [-4, -2, 1987, 32817].', () => {
    expect(immutableSort([32817, -2, -4, 1987])).to.eql([-4, -2, 1987, 32817])
  })
})

// ------------------------------------------------------------------------------
//  immutableSortDescending
// ------------------------------------------------------------------------------
describe('immutableSortDescending', () => {
  it('Must throw a TypeError if the source parameter is not an Array.', () => {
    expect(() => { immutableSortDescending('Not an array.') }).to.throw(TypeError)
  })

  it('Must NOT return the same Array object the source parameter refers to.', () => {
    const arr = [4, 20, 3]
    const res = immutableSortDescending(arr)
    expect(res).to.be.an('array').and
      .to.not.eql(arr)
  })

  it('The source array must be untouched.', () => {
    const arr = [4, 2, 3]
    const res = immutableSortDescending(arr)
    expect(res).to.be.an('array')
    expect(arr).to.eql([4, 2, 3])
  })

  it('immutableSortDescending([2, 30, 6, 1, 4]) must return [30, 6, 4, 2, 1].', () => {
    expect(immutableSortDescending([2, 30, 6, 1, 4])).to.eql([30, 6, 4, 2, 1])
  })

  it('immutableSortDescending([4]) must return [4].', () => {
    expect(immutableSortDescending([4])).to.eql([4])
  })

  it('immutableSortDescending([32817, -2, -4, 1987]) must return [32817, 1987, -2, -4].', () => {
    expect(immutableSortDescending([32817, -2, -4, 1987])).to.eql([32817, 1987, -2, -4])
  })
})
