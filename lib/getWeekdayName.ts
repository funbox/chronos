import ensureDate from './helpers/ensureDate';
import { CONSTANTS, localeOptionsType } from './constants';

/**
 * Get weekday name
 * @param value
 * @param format
 * @return - Weekday value
 */
export default (value: Date | number | string, format = CONSTANTS.LOCALE_OPTIONS.LONG): string => {
  const date = ensureDate(value);
  const weekdayFormat = format.toUpperCase();

  return date.toLocaleString(CONSTANTS.LOCALE, { weekday: CONSTANTS.LOCALE_OPTIONS[weekdayFormat as localeOptionsType] });
};
