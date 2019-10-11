import ensureDate from './helpers/ensure-date';

/**
 * Subtract duration from date
 * @param  {Date|number} value
 * @param  {number} duration
 * @return {Date} - Subtraction result
 */
export default (value, duration) => {
  const date = ensureDate(value);

  date.setFullYear(date.getFullYear() - duration);

  return date;
};
