import { ChronosDate, ensureDate } from './helpers/ensureDate';
import { LOCALE, LOCALE_OPTIONS, LocaleOptionsType } from './constants';

/**
 * Get weekday name
 * @param value
 * @param format
 * @return - Weekday value
 */
export default (value: ChronosDate, format = LOCALE_OPTIONS.LONG): string => {
  const date = ensureDate(value);
  const weekdayFormat = format.toUpperCase();

  return date.toLocaleString(LOCALE, { weekday: LOCALE_OPTIONS[weekdayFormat as LocaleOptionsType] });
};
