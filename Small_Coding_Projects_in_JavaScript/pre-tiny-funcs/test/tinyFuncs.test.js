/**
 * Tests for the statistics module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import * as tinyFuncs from '../src/tinyFuncs.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  roundUp
// ------------------------------------------------------------------------------
describe('roundUp', () => {
  it('roundUp(12.4) should return 13', done => {
    expect(tinyFuncs.roundUp(12.4)).to.eql(13)
    done()
  })
  it('roundUp(132.9) should return 133', done => {
    expect(tinyFuncs.roundUp(132.9)).to.eql(133)
    done()
  })
})

// ------------------------------------------------------------------------------
//  roundDown
// ------------------------------------------------------------------------------
describe('roundDown', () => {
  it('roundDown(12.5) should return 12', done => {
    expect(tinyFuncs.roundDown(12.5)).to.eql(12)
    done()
  })
  it('roundDown(132.9) should return 132', done => {
    expect(tinyFuncs.roundDown(132.9)).to.eql(132)
    done()
  })
})

// ------------------------------------------------------------------------------
//  round
// ------------------------------------------------------------------------------
describe('round', () => {
  it('round(12.5) should return 13', done => {
    expect(tinyFuncs.round(12.5)).to.eql(13)
    done()
  })
  it('round(132.4) should return 132', done => {
    expect(tinyFuncs.round(132.4)).to.eql(132)
    done()
  })
})

// ------------------------------------------------------------------------------
//  getStringLength
// ------------------------------------------------------------------------------
describe('getStringLength', () => {
  it('getStringLength(\'Hello, World!\') should return 13', done => {
    expect(tinyFuncs.getStringLength('Hello, World!')).to.eql(13)
    done()
  })
  it('getStringLength(\'I don\\\'t need Google, my wife knows everything!\') should return 46', done => {
    expect(tinyFuncs.getStringLength('I don\'t need Google, my wife knows everything!')).to.eql(46)
    done()
  })
})

// ------------------------------------------------------------------------------
//  getFirstLetter
// ------------------------------------------------------------------------------
describe('getFirstLetter', () => {
  it('getFirstLetter(\'Hello, World!\') should return \'H\'', done => {
    expect(tinyFuncs.getFirstLetter('Hello, World!')).to.eql('H')
    done()
  })
  it('getFirstLetter(\'Byte me!\') should return \'B\'', done => {
    expect(tinyFuncs.getFirstLetter('Byte me!')).to.eql('B')
    done()
  })
})

// ------------------------------------------------------------------------------
//  getIndexOfQuestionMark
// ------------------------------------------------------------------------------
describe('getIndexOfQuestionMark', () => {
  it('getPositionOfQuestionMark(\'What\\\'s a programmer? An organism that turns caffeine and pizza into software.\') should return 19', done => {
    expect(tinyFuncs.getIndexOfQuestionMark('What\'s a programmer? An organism that turns caffeine and pizza into software.')).to.eql(19)
    done()
  })
  it('getIndexOfQuestionMark(\'In c<>de we trust.\') should return -1', done => {
    expect(tinyFuncs.getIndexOfQuestionMark('In c<>de we trust.')).to.eql(-1)
    done()
  })
})

// ------------------------------------------------------------------------------
//  isEqual
// ------------------------------------------------------------------------------
describe('isEqual', () => {
  it('isEqual(\'Potato\', \'Potato\') should return true', done => {
    expect(tinyFuncs.isEqual('Potato', 'Potato')).to.eql(true)
    done()
  })
  it('isEqual(\'Apple\', \'Pear\'); should return false', done => {
    expect(tinyFuncs.isEqual('Apple', 'Pear')).to.eql(false)
    done()
  })
  it('isEqual(\'potato\', \'Potato\') should return false', done => {
    expect(tinyFuncs.isEqual('potato', 'Potato')).to.eql(false)
    done()
  })
})

// ------------------------------------------------------------------------------
//  isOdd
// ------------------------------------------------------------------------------
describe('isOdd', () => {
  it('isOdd(13) should return true', done => {
    expect(tinyFuncs.isOdd(13)).to.eql(true)
    done()
  })
  it('isOdd(12) should return false', done => {
    expect(tinyFuncs.isOdd(12)).to.eql(false)
    done()
  })
})

// ------------------------------------------------------------------------------
//  isEven
// ------------------------------------------------------------------------------
describe('isEven', () => {
  it('isEven(13) should return false', done => {
    expect(tinyFuncs.isEven(13)).to.eql(false)
    done()
  })
  it('isEven(12) should return true', done => {
    expect(tinyFuncs.isEven(12)).to.eql(true)
    done()
  })
})
