import ensureDate from './helpers/ensure-date';

/**
 * Subtract months from date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Subtraction result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setMonth(date.getMonth() - quantity);

  return date;
};
