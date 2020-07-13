import ensureDate from './helpers/ensureDate';
import { LOCALE, LOCALE_OPTIONS, localeOptionsType } from './constants';

/**
 * Get weekday name
 * @param value
 * @param format
 * @return - Weekday value
 */
export default (value: Date | number | string, format = LOCALE_OPTIONS.LONG): string => {
  const date = ensureDate(value);
  const weekdayFormat = format.toUpperCase();

  return date.toLocaleString(LOCALE, { weekday: LOCALE_OPTIONS[weekdayFormat as localeOptionsType] });
};
