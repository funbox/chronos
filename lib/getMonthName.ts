import ensureDate from './helpers/ensureDate';

import { CONSTANTS, localeOptionsType } from './constants';

/**
 * Get month name
 * @param value
 * @param format
 * @return - Month value
 */
export default (value: Date | number | string, format = CONSTANTS.LOCALE_OPTIONS.LONG): string => {
  const date = ensureDate(value);
  const monthFormat = format.toUpperCase();

  return date.toLocaleString(CONSTANTS.LOCALE, { month: CONSTANTS.LOCALE_OPTIONS[monthFormat as localeOptionsType] });
};
