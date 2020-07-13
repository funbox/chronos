import ensureDate from './helpers/ensureDate';

/**
 * Get week number from start of the year
 * @param  {Date|number|string} value
 * @return {number} - Week value
 */
export default (value: Date | number | string): number => {
  const date = ensureDate(value);
  const januaryFirst = new Date(date.getFullYear(), 0, 1);

  return Math.ceil((((date.getTime() - januaryFirst.getTime()) / 86400000) + januaryFirst.getDay() + 1) / 7);
};
