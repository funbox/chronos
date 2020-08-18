import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get unix timestamp from date
 * @param value
 * @return - Unix timestamp result
 */
export default (value: ChronosDate = new Date()): number => {
  const date = ensureDate(value);
  return Math.floor(date.getTime() / 1e3);
};
