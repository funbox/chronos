import ensureDate from './helpers/ensure-date';

/**
 * Subtract days from date
 * @param  {Date|number} value
 * @param  {number} quantity
 * @return {Date} - Subtraction result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setDate(date.getDate() - quantity);

  return date;
};
