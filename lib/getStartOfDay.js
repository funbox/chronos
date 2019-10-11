import ensureDate from './helpers/ensure-date';

/**
 * Get start of day
 * @param  {Date|number} value
 * @return {Date} - Start of date result
 */
export default (value) => {
  const date = ensureDate(value);

  date.setHours(0, 0, 0, 0);

  return date;
};
