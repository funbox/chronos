import ensureDate from './helpers/ensure-date';

/**
 * Get start of year
 * @param  {Date|number} value
 * @return {Date} - Start of date result
 */
export default (value) => {
  const date = ensureDate(value);

  date.setMonth(0);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);

  return date;
};
