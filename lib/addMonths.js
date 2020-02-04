import ensureDate from './helpers/ensureDate';

/**
 * Add months to date
 * @param  {Date|number|string} value
 * @param  {number} quantity
 * @return {Date} - Addition result
 */
export default (value, quantity) => {
  const date = ensureDate(value);

  // When adding months to date in JS one should remember the amount of days
  // in the current and the result month. E.g. when we add 1 month to 31.01.2020 we get 02.03.2020, not 29.02.2020
  // Reference url: https://www.w3schools.com/jsref/jsref_setmonth.asp
  date.setMonth(date.getMonth() + quantity);

  return date;
};
