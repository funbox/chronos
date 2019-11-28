import ensureDate from './helpers/ensureDate';

/**
 * Subtract days from date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Subtraction result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setDate(date.getDate() - quantity);

  return date;
};
