import ensureDate from './helpers/ensure-date';

/**
 * Get end of year
 * @param  {Date|number} value
 * @param  {string} unit
 * @return {Date} - End of year result
 */
export default (value) => {
  const date = ensureDate(value);

  date.setMonth(12);
  date.setDate(0);
  date.setHours(23, 59, 59, 999);

  return date;
};
