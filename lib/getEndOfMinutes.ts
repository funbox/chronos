import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get end of minutes
 * @param value
 * @param diff
 * @return - End of minute result
 */
export default (value: ChronosDate, diff = 0): Date => {
  const date = ensureDate(value);

  if (diff) {
    date.setMinutes(date.getMinutes() + diff);
  }

  date.setSeconds(59, 999);

  return date;
};
