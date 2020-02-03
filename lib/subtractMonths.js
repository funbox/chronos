import ensureDate from './helpers/ensureDate';

/**
 * Subtract months from date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Subtraction result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  // When subtracting/adding months in JS one should remember the amount of days
  // in the current and the result month. E.g. when we subtract 1 month from 28.02 we get 28.01, not 31.01
  // Reference url: https://www.w3schools.com/jsref/jsref_setmonth.asp
  date.setMonth(date.getMonth() - quantity);

  return date;
};
