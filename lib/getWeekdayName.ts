import { ChronosDate, ensureDate } from './helpers/ensureDate';
import { LOCALE, LOCALE_WEEKDAY_OPTIONS } from './constants';

/**
 * Get weekday name
 * @param value
 * @param format
 * @return - Weekday value
 */
export default (value: ChronosDate, format: 'long' | 'short' = 'long'): string => {
  const date = ensureDate(value);

  return date.toLocaleString(LOCALE, { weekday: LOCALE_WEEKDAY_OPTIONS[format] });
};
