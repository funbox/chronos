/**
 * Get unix timestamp from date
 * @param  {Object} date
 * @return {number} - Unix timestamp result
 */
export default (date = new Date()) => Math.floor(date.getTime() / 1e3);
