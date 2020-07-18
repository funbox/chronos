import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get month
 * @param value
 * @return - Month value
 */
export default (value: ChronosDate): number => {
  const date = ensureDate(value);

  return date.getMonth();
};
