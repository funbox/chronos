import ensureDate from './helpers/ensure-date';

/**
 * Get end of day
 * @param  {Date|number} value
 * @return {Date} - End of date result
 */
export default (value) => {
  const date = ensureDate(value);

  date.setHours(23, 59, 59, 999);

  return date;
};
