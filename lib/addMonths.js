import ensureDate from './helpers/ensure-date';

/**
 * Add months to date
 * @param  {Date|number} value
 * @param  {number} quantity
 * @return {Date} - Addition result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setMonth(date.getMonth() + quantity);

  return date;
};
