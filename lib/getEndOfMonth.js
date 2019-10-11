import ensureDate from './helpers/ensure-date';

/**
 * Get end of month
 * @param  {Date|number} value
 * @return {Date} - End of month result
 */
export default (value) => {
  const date = ensureDate(value);

  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  date.setHours(23, 59, 59, 999);

  return date;
};
