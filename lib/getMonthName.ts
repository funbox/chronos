import { ChronosDate, ensureDate } from './helpers/ensureDate';

import { LOCALE_MONTH_OPTIONS, LOCALE } from './constants';

/**
 * Get month name
 * @param value
 * @param format
 * @return - Month value
 */
export default (value: ChronosDate, format: keyof typeof LOCALE_MONTH_OPTIONS = 'long'): string => {
  const date = ensureDate(value);

  return date.toLocaleString(LOCALE, { month: LOCALE_MONTH_OPTIONS[format] });
};
