import ensureDate from './helpers/ensure-date';

/**
 * Add years to date
 * @param  {Date|number} value
 * @param  {number} quantity
 * @return {Date} - Addition result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  date.setFullYear(date.getFullYear() + quantity);

  return date;
};
