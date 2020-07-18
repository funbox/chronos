import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get year
 * @param value
 * @return - Year value
 */
export default (value: ChronosDate): number => {
  const date = ensureDate(value);

  return date.getFullYear();
};
