/**
 * shaverSharp module.
 *
 * @module src/shaverSharp
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author // TODO: YOUR NAME <YOUR EMAIL>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Creates the specified starting tag.
 *
 * @param {string} tagName - tagName is a string that specifies the type of starting tag to be created.
 * @returns {string} Returns a starting tag as a string.
 */
export function createBeginTag (tagName) {
  // TODO: Write this code first
  return '<' + tagName + '>'
}

/**
 * Creates the specified closing tag.
 *
 * @param {string} tagName - tagName is a string that specifies the type of closing tag to be created.
 * @returns {string} Returns a closing tag as a string.
 */
export function createEndTag (tagName) {
  // TODO: Write this code second
  return '</' + tagName + '>'
}

/**
 * Creates the specified element with content. If no content is specified a self-closing element will be created.
 *
 * @param {string} tagName - tagName is a string that specifies the type of element to be created.
 * @param {string} [innerHTML=''] - innerHTML is a string that describes the element's descendants.
 * @returns {string} Returns an element as a string.
 */
export function createElement (tagName, innerHTML = '') {
  return '<' + tagName + '/>' + innerHTML
  // TODO: Write this code third
}

/**
 * Creates the specified elements with contents. If a tagName is not paired with a content a self-closing element
 * will be created.
 *
 * @param  {Array.<object<string, string>>} elementData - elementData is an array of objects.
 * @returns {string} Returns specified elements as a string.
 */
export function createElements (elementData) {
  let result = ''
  elementData.forEach(function (current) {
    result += createElement(current.tagName, current.innerHTML)
  })
  return result

  // TODO: Write this code last
}
