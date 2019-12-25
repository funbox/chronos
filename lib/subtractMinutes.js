import ensureDate from './helpers/ensureDate';

/**
 * Subtract minutes from date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Subtraction result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setMinutes(date.getMinutes() - quantity);

  return date;
};
