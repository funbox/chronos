import ensureDate from './helpers/ensureDate';

/**
 * Add minutes to date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Addition result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setMinutes(date.getMinutes() + quantity);

  return date;
};
