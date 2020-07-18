import ensureDate from './helpers/ensureDate';

import { LOCALE_OPTIONS, LOCALE, localeOptionsType } from './constants';

/**
 * Get month name
 * @param value
 * @param format
 * @return - Month value
 */
export default (value: Date | number | string, format = LOCALE_OPTIONS.LONG): string => {
  const date = ensureDate(value);
  const monthFormat = format.toUpperCase();

  return date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS[monthFormat as localeOptionsType] });
};
