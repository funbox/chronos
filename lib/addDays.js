import ensureDate from './helpers/ensure-date';

/**
 * Add days to date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Addition result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setDate(date.getDate() + quantity);

  return date;
};
