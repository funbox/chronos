import { ChronosDate, ensureDate } from './helpers/ensureDate';

const SUNDAY = 7;
const DAYS_IN_WEEK = 7;

/**
 * Get end of week
 * @param value
 * @param diff
 * @return - Start of date result
 */
export default (value: ChronosDate, diff = 0): Date => {
  const date = ensureDate(value);
  const weekDay = date.getDay() || SUNDAY;

  date.setDate(date.getDate() + (DAYS_IN_WEEK - weekDay));

  if (diff) {
    date.setDate(date.getDate() + diff * DAYS_IN_WEEK);
  }

  date.setHours(23, 59, 59, 999);

  return date;
};
