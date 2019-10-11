import ensureDate from './helpers/ensure-date';

/**
 * Add days to date
 * @param  {Date|number} value
 * @param  {number} duration
 * @return {Date} - Addition result
 */
export default (value, duration) => {
  const date = ensureDate(value);

  date.setDate(date.getDate() + duration);

  return date;
};
