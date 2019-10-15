import ensureDate from './helpers/ensure-date';

/**
 * Subtract years from date
 * @param  {Date|number} value
 * @param  {number} quantity
 * @return {Date} - Subtraction result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setFullYear(date.getFullYear() - quantity);

  return date;
};
