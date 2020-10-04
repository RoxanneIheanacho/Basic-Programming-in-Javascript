/**
 * Tests for the renameMe module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import { getGangster } from '../src/bugsy.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  getGangster
// ------------------------------------------------------------------------------
describe('getGangster', () => {
  it('getGangster(\'AC\'); should return \'Al Capone\'', () => {
    expect(getGangster('AC')).to.eql('Al Capone')
  })

  it('getGangster(\'SSC\'); should return \'Stephanie St. Clare\'', () => {
    expect(getGangster('SSC')).to.eql('Stephanie St. Clare')
  })

  it('getGangster(\'FN\'); should return \'Frank Nitti\'', () => {
    expect(getGangster('FN')).to.eql('Frank Nitti')
  })

  it('getGangster(\'EN\'); should return \'No suspect found!\'', () => {
    expect(getGangster('EN')).to.eql('No suspect found!')
  })
})
