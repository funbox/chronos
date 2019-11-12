import ensureDate from './helpers/ensureDate';
import { LOCALE, LOCALE_OPTIONS } from './constants';

/**
 * Get weekday name
 * @param  {Date|number|string} value
 * @param  {string="short", "long"} format
 * @return {string} - Weekday value
 */
export default (value, format = LOCALE_OPTIONS.LONG) => {
  const date = ensureDate(value);
  const weekdayFormat = format.toUpperCase();

  return date.toLocaleString(LOCALE, { weekday: LOCALE_OPTIONS[weekdayFormat] });
};
