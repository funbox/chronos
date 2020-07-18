import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get hours
 * @param value
 * @return - Hour value
 */
export default (value: ChronosDate): number => {
  const date = ensureDate(value);

  return date.getHours();
};
