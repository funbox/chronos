import ensureDate from './helpers/ensureDate';

/**
 * Add months to date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Addition result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setMonth(date.getMonth() + quantity);

  return date;
};
