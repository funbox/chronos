import ensureDate from './helpers/ensureDate';

/**
 * Get week number from start of the year
 * @param  {Date|number|string} value
 * @return {number} - Week value
 */
export default (value) => {
  const date = ensureDate(value);
  const januaryFirst = new Date(date.getFullYear(), 0, 1);

  return Math.ceil((((date - januaryFirst) / 86400000) + januaryFirst.getDay() + 1) / 7);
};
