/**
 * Tests for the determinator module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import * as determinator from '../src/determinator.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  tellType
// ------------------------------------------------------------------------------
describe('tellType', () => {
  it('Should return a string \'You sent me a number.\' when called with a number.', () => {
    const result = determinator.tellType(42)
    expect(result).to.eql('You sent me a number.')
  })

  it('Should return a string \'You sent me a boolean.\' when called with a boolean.', () => {
    const result = determinator.tellType(true)
    expect(result).to.eql('You sent me a boolean.')
  })

  it('Should return a string \'You sent me a string.\' when called with a string.', () => {
    const result = determinator.tellType('this is a string')
    expect(result).to.eql('You sent me a string.')
  })

  it('Should return a string \'You sent me an undefined value.\' when called with no parameter.', () => {
    const result = determinator.tellType()
    expect(result).to.eql('You sent me an undefined value.')
  })

  it('Should return a string \'You sent me a function.\' when called with a function.', () => {
    const result = determinator.tellType(() => {})
    expect(result).to.eql('You sent me a function.')
  })

  it('Should return a string \'You sent me a null value.\' when called with null.', () => {
    const result = determinator.tellType(null)
    expect(result).to.eql('You sent me a null value.')
  })

  it('Should return a string \'You sent me an array.\' when called with an array.', () => {
    const result = determinator.tellType([])
    expect(result).to.eql('You sent me an array.')
  })

  it('Should return a string \'You sent me an object.\' when called with an object.', () => {
    const result = determinator.tellType({})
    expect(result).to.eql('You sent me an object.')
  })
})
