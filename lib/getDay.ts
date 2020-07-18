import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get day
 * @param value
 * @return - Day value
 */
export default (value: ChronosDate): number => {
  const date = ensureDate(value);

  return date.getDate();
};
