import ensureDate from './helpers/ensure-date';

/**
 * Add months to date
 * @param  {Date|number} value
 * @param  {number} duration
 * @return {Date} - Addition result
 */
export default (value, duration) => {
  const date = ensureDate(value);

  date.setMonth(date.getMonth() + duration);

  return date;
};
