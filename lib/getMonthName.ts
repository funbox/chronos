import { ChronosDate, ensureDate } from './helpers/ensureDate';

import { LOCALE_OPTIONS, LOCALE, LocaleOptionsType } from './constants';

/**
 * Get month name
 * @param value
 * @param format
 * @return - Month value
 */
export default (value: ChronosDate, format = LOCALE_OPTIONS.LONG): string => {
  const date = ensureDate(value);
  const monthFormat = format.toUpperCase();

  return date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS[monthFormat as LocaleOptionsType] });
};
