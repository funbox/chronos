/**
 * Get unix timestamp from date
 * @param  {Date} date
 * @return {number} - Unix timestamp result
 */
export default (date = new Date()) => Math.floor(date.getTime() / 1e3);
