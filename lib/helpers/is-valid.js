/**
 * Checks if param is a valid Date object
 * @param  {Object} date
 * @return {boolean}
 */
export default date => Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());
