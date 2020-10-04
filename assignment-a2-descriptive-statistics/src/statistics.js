/**
 * Module for obtaining statistical analysis about a set of data.
 *
 * @module statistics.js
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Roxanne Albinsson Iheanacho <ra222tq@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Type definitions
// ------------------------------------------------------------------------------

/**
 * Represents statistical summary.
 *
 * @typedef {object} StatisticalSummary
 * @property {number} average - The average value.
 * @property {number} maximum - The maximum value.
 * @property {number} median - The median value.
 * @property {number} minimum - The minimum value.
 * @property {number[]} mode - The mode value.
 * @property {number} range - The range value.
 * @property {number} standardDeviation - The standard deviation value.
 */

/**
 *
 * Returns several descriptive statistics (average, maximum, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers - The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {StatisticalSummary} An object whose properties correspond to the descriptive statistics from the data set.
 */
/**
 * Statistical summary starts here.
 *
 * @typedef {object} StatisticalSummary
 * @param {number[]} numbers is the array parameter to be passed to.
 * @returns {StatisticalSummary} An object whose properties correspond to the descriptive statistics from the data set.
 */
export function summary (numbers) {
  return {
    average: average(numbers),
    maximum: maximum(numbers),
    median: median(numbers),
    minimum: minimum(numbers),
    mode: mode(numbers),
    range: range(numbers),
    standardDeviation: standardDeviation(numbers)
  }
}
/**
 * catchE goes through all of the possible errors to find out where to throw typeError and errors.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number} catchE - The error is got.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 */
export function catchE (numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
  if (!numbers.length) {
    throw new Error('The passed array contains no elements.')
  }
  if (!numbers.every(i => typeof i === 'number')) {
    throw new TypeError('The passed array may only contain valid numbers.')
  }
}
/**
 * findisNaN goes through the number arguments and finds Number with property isNaN and throws typeerror.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number} findisaNaN - The Number.NaN is found.
 * @throws {TypeError} The passed array contains not just numbers.
 */
export function findisNaN (numbers) {
  if (numbers.includes(Number.NaN)) {
    throw new TypeError('The passed array may only contain valid numbers.')
  }
}
/**
 * createCopySort concatenates and sorts an array without changing it since that is a requirement for the test.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number} createCopySort - The the concatenated param value.
 * @returns {number[]} numbers createCopySort(sortedarray).
 */
export function createCopySort (numbers) {
  return [].concat(numbers).sort((a, b) => a - b)
}
/**
 * median goes through gets copy of array list, then looks through and finds the median.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number} median - The median value.
 * @returns {number} median.
 */
export function median (numbers) {
  catchE(numbers)
  findisNaN(numbers)
  var mel = Math.floor(createCopySort(numbers).length / 2)
  if (createCopySort(numbers).length % 2) { return createCopySort(numbers)[mel] }
  return (createCopySort(numbers)[mel - 1] + createCopySort(numbers)[mel]) / 2
}
/**
 * we have to find the average, so we do that with numbers.reduce, looks through number parameters, compares, divides by
 * length of array.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number} average - The average value.
 * @returns {number} average.
 */
export function average (numbers) {
  catchE(numbers)
  findisNaN(numbers)
  const avg = numbers.reduce((a, b) => a + b) / numbers.length
  return avg
}
/**
 * Mode function finds the number that appears most. const m is the mode, const allNs is looking through all numbers,
 * n is value of number, i is for index, and biggest is the biggest amount of numbers. We use a for loop to compare numbers
 * indexed from 0 to the length of numbers, adds 1. n is then assigned the value of numbers[i]. allNs counts through
 * allNs index of n, or 0 and then adds 1. if allNs indexed by number is more than biggest, the value of biggest will equal
 * the value of the index of n in allNs. Finally, for all numbers counted in allNs, most or 'm' is assigned that biggest value.
 * the array is then sorted from smallest to biggest to return the mode.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number[]} mode - The mode value.
 * @returns {number} mode.
 */
export function mode (numbers) {
  catchE(numbers)
  findisNaN(numbers)
  const m = []; const allNs = []
  let n; let i; let biggest = 0
  for (i = 0; i < numbers.length; i += 1) {
    n = numbers[i]

    allNs[n] = (allNs[n] || 0) + 1

    if (allNs[n] > biggest) {
      biggest = allNs[n]
    }
  }
  for (i in allNs) {
    if (allNs[i] === biggest) {
      m.push(Number(i))
    }
  }
  return m.sort() /** this is mode */
}
/**
 * standardDeviation first needs to find the average, so we use the function we had in the average function. then
 * we use the square root of numbers, which uses higher function map, to go through each number, find the power, then x minus
 * average, by two. This is then using function reduce, looks through numbers gives parameters a,b, looks through, divides
 * by arrays length and is finally returned.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number} standardDeviation - The standardDeviation value.
 * @returns {number} standardDeviation
 */
export function standardDeviation (numbers) {
  catchE(numbers)
  findisNaN(numbers)
  const avg = numbers.reduce((a, b) => a + b) / numbers.length
  const standdev = Math.sqrt(numbers.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b) / numbers.length)
  return standdev
}
/**
 * maximum is returned by using Math.max which looks through and finds biggest numbers. we have to use the spread operator
 * because sometimes the numbers are not put in as a seperate parameter in the test.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number} maximum - The maximum value.
 * @returns {number} maximum.
 */
export function maximum (numbers) {
  catchE(numbers)
  findisNaN(numbers)
  const max = Math.max(...numbers)
  return (max)
}
/**
 * minimum is similar to the maximum function because we are essentially using the same kinds of functions. Math.min
 * is built in, so we don't have to use for loops to look through and find the smallest. However we could do that, but
 * it would take more space. We do not need to do that in Javascript.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number} minimum - The minimum value.
 * @property {number} findisNaN - finds the property with isNaN value.
 * @returns {number} minimum returns here.
 */
export function minimum (numbers) {
  catchE(numbers)
  findisNaN(numbers)
  const min = Math.min(...numbers)
  return (min)
}
/**
 * range uses math.min and math.max, finds the difference after performing these functions and returns the range.
 *
 * @param {number[]} numbers is the array parameter to be passed to.
 * @property {number} range - The range value.
 * @property {number} Math.min - finds min value.
 * @returns {number} range -  range, we know in real life is the biggest number minus the smallest number. So we just use Math.max-math.min,
 * use the spread operator for the parameter of numbers, then return the actual range.
 */
export function range (numbers) {
  catchE(numbers)
  findisNaN(numbers)
  const max = Math.max(...numbers)
  const min = Math.min(...numbers)
  return max - min
}
