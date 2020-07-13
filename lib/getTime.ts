/**
 * Get unix timestamp from date
 * @param date
 * @return - Unix timestamp result
 */
export default (date = new Date()): number => Math.floor(date.getTime() / 1e3);
