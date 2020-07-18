import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get start of minutes
 * @param value
 * @param diff
 * @return - Start of minute result
 */
export default (value: ChronosDate, diff = 0): Date => {
  const date = ensureDate(value);

  if (diff) {
    date.setMinutes(date.getMinutes() + diff);
  }

  date.setSeconds(0, 0);

  return date;
};
