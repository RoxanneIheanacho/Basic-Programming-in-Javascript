/**
 * Tests for the shaverSharp module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import * as shaverSharp from '../src/shaverSharp.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  createBeginTag
// ------------------------------------------------------------------------------
describe('createBeginTag', () => {
  it('shaverSharp.createBeginTag(\'h1\') should return \'<h1>\'', () => {
    expect(shaverSharp.createBeginTag('h1')).to.eql('<h1>')
  })

  it('shaverSharp.startElement(\'p\') should return \'<p>\'', () => {
    expect(shaverSharp.createBeginTag('p')).to.eql('<p>')
  })

  it('shaverSharp.startElement(\'div\') should return \'<div>\'', () => {
    expect(shaverSharp.createBeginTag('div')).to.eql('<div>')
  })
})

// ------------------------------------------------------------------------------
//  createEndTag
// ------------------------------------------------------------------------------
describe('Tests for createEndTag', () => {
  it('shaverSharp.createEndTag(\'h1\') should return \'</h1>\'', () => {
    expect(shaverSharp.createEndTag('h1')).to.eql('</h1>')
  })

  it('shaverSharp.createEndTag(\'p\') should return \'</p>\'', () => {
    expect(shaverSharp.createEndTag('p')).to.eql('</p>')
  })

  it('shaverSharp.createEndTag(\'p\') should return \'</div>\'', () => {
    expect(shaverSharp.createEndTag('div')).to.eql('</div>')
  })
})

// ------------------------------------------------------------------------------
//  createElement
// ------------------------------------------------------------------------------
describe('createElement', () => {
  it('shaverSharp.createElement(\'h1\', \'This is my headline\') should return \'<h1>This is my headline</h1>\'', () => {
    expect(shaverSharp.createElement('h1', 'This is my headline')).to.eql('<h1>This is my headline</h1>')
  })

  it('shaverSharp.createElement(\'p\', \'This is a paragraph\') should return \'<p>This is a paragraph</p>\'', () => {
    expect(shaverSharp.createElement('p', 'This is a paragraph')).to.eql('<p>This is a paragraph</p>')
  })

  it('shaverSharp.createElement(\'img\') should return \'<img />\'', () => {
    expect(shaverSharp.createElement('img')).to.eql('<img />')
  })
})

// ------------------------------------------------------------------------------
//  createElements
// ------------------------------------------------------------------------------
describe('createElements', () => {
  const arr = [
    { tagName: 'h1', innerHTML: 'This is a headline' },
    { tagName: 'p', innerHTML: 'This is a paragraph' },
    { tagName: 'h2', innerHTML: 'This is a sub headline' },
    { tagName: 'p', innerHTML: 'This is a paragraph' }
  ]
  const CORRECT = '<h1>This is a headline</h1><p>This is a paragraph</p>' +
    '<h2>This is a sub headline</h2><p>This is a paragraph</p>'

  it('shaverSharp.createElements() should return a correct string', () => {
    expect(shaverSharp.createElements(arr)).to.eql(CORRECT)
  })
})
