import ensureDate from './helpers/ensure-date';

/**
 * Get start of month
 * @param  {Date|number} value
 * @return {Date} - Start of date result
 */
export default (value) => {
  const date = ensureDate(value);

  date.setDate(1);
  date.setHours(0, 0, 0, 0);

  return date;
};
