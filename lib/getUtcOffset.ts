import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get current timezone offset to UTC in hours
 * @param value
 * @return - Offset value in hours result
 */
export default (value: ChronosDate): number => {
  const date = ensureDate(value);

  return Math.floor(date.getTimezoneOffset() / -60);
};
