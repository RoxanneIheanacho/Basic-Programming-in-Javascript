/**
 * Tests for the team module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import * as team from '../src/team.js'

const expect = chai.expect

const ERROR_MESSAGE_NOT_AN_ARRAY = 'The passed argument is not an array.'

// ------------------------------------------------------------------------------
//  sortByPoints
// ------------------------------------------------------------------------------
describe('sortByPoints', () => {
  const ORDERED_TEAMS = [
    { name: 'Tottenham Hotspur FC', nickname: 'Spurs', points: 86 },
    { name: 'Liverpool FC', nickname: 'The Reds', points: 76 },
    { name: 'Arsenal', nickname: 'The Gunners', points: 75 },
    { name: 'Manchester United', nickname: 'The Red Devils', points: 69 },
    { name: 'Everton FC', nickname: 'The Toffees', points: 61 }
  ]

  let teams

  beforeEach(() => {
    teams = [
      { name: 'Liverpool FC', nickname: 'The Reds', points: 76 },
      { name: 'Manchester United', nickname: 'The Red Devils', points: 69 },
      { name: 'Tottenham Hotspur FC', nickname: 'Spurs', points: 86 },
      { name: 'Everton FC', nickname: 'The Toffees', points: 61 },
      { name: 'Arsenal', nickname: 'The Gunners', points: 75 }
    ]
  })

  describe('exceptions', () => {
    it(`Passing anything but an array should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_AN_ARRAY}'`, () => {
      expect(() => { team.sortByPoints() }).to.throw(TypeError, ERROR_MESSAGE_NOT_AN_ARRAY)
    })
  })

  describe('side effects', () => {
    it('Passing an array should return a reference to an array and not modify the argument.', () => {
      const original = JSON.parse(JSON.stringify(teams))
      const res = team.sortByPoints(teams)
      expect(res).to.be.an('array')
      expect(teams).to.eql(original)
    })
  })

  describe('return value', () => {
    it('Passing an array should return a reference to another array.', () => {
      const res = team.sortByPoints(teams)
      expect(res).to.be.an('array').and.to.not.eql(teams)
    })

    it('Should return an array of team objects, ordered descending by points.', () => {
      expect(team.sortByPoints(teams)).to.eql(ORDERED_TEAMS)
    })
  })
})
