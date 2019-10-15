import ensureDate from './helpers/ensure-date';
import { LOCALE, LOCALE_OPTIONS } from './constants';

/**
 * get weekday
 * @param  {Date|number} value
 * @return {string} - Weekday value
 */
export default (value) => {
  const date = ensureDate(value);

  return date.toLocaleString(LOCALE, { weekday: LOCALE_OPTIONS.LONG });
};
