/**
 * Tests for the shape module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import * as shape from '../src/shape.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  createRightTriangle
// ------------------------------------------------------------------------------
describe('createRightTriangle', () => {
  it('createRightTriangle(3) should return "#\\n##\\n###\\n"', () => {
    expect(shape.createRightTriangle(3)).to.equal('#\n##\n###\n')
  })

  it('createRightTriangle(5) should return "#\\n##\\n###\\n####\\n#####\\n"', () => {
    expect(shape.createRightTriangle(5)).to.equal('#\n##\n###\n####\n#####\n')
  })

  it('createRightTriangle(7) should return "#\\n##\\n###\\n####\\n#####\\n######\\n#######\\n"', () => {
    expect(shape.createRightTriangle(7)).to.equal('#\n##\n###\n####\n#####\n######\n#######\n')
  })
})
