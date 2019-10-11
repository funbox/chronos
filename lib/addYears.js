import ensureDate from './helpers/ensure-date';

/**
 * Add years to date
 * @param  {Date|number} value
 * @param  {number} duration
 * @return {Date} - Addition result
 */
export default (value, duration) => {
  const date = ensureDate(value);

  date.setFullYear(date.getFullYear() + duration);

  return date;
};
