import ensureDate from './helpers/ensure-date';
import { LOCALE, LOCALE_OPTIONS } from './constants';

/**
 * Get month name
 * @param  {Date|number|string} value
 * @return {string} - Month value
 */
export default (value) => {
  const date = ensureDate(value);

  return date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS.LONG });
};
