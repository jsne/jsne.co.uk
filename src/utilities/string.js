/**
 * @module string
 * @desc do the string ting
 */

/**
 * sanitize string (remove html etc.)
 * @param  {string} str - target string
 * @return {string}     - santisized string
 */
export const sanitize = str => str.replace(/(<([^>]+)>)/ig, '');
