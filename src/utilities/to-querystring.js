/**
 * @module toQueryString
 * @desc convert iterable to query string
 */

/**
 * convert interable querystring
 * @param  {Object} data - iterable object
 * @return {string}      - valid querystring
 */
const toQueryString = data => (
    Array.from(data)
        .map(([name, value]) => `${name}=${encodeURI(value)}`)
        .join('&')
);

export default toQueryString;
