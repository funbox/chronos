import ensureDate from './helpers/ensureDate';
import { LOCALE, LOCALE_OPTIONS, localeOptionsType } from './constants';

/**
 * Get month name
 * @param  {Date|number|string} value
 * @param  {string="short", "long"} format
 * @return {string} - Month value
 */
export default (value: Date | number | string, format = LOCALE_OPTIONS.LONG): string => {
  const date = ensureDate(value);
  const monthFormat = format.toUpperCase();

  return date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS[monthFormat as localeOptionsType] });
};
