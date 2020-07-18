import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get minutes
 * @param value
 * @return - Minute value
 */
export default (value: ChronosDate): number => {
  const date = ensureDate(value);

  return date.getMinutes();
};
