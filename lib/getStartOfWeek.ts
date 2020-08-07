import { ChronosDate, ensureDate } from './helpers/ensureDate';

const SUNDAY = 7;
const DAYS_IN_WEEK = 7;

/**
 * Get start of week
 * @param value
 * @param diff
 * @return - Start of date result
 */
export default (value: ChronosDate, diff = 0): Date => {
  const date = ensureDate(value);
  const weekDay = date.getDay() || SUNDAY;

  // weekdays' indexes starts from 1, so we need to subtract 1
  // e.g. if today
  date.setDate(date.getDate() - (weekDay - 1));

  if (diff) {
    date.setDate(date.getDate() + diff * DAYS_IN_WEEK);
  }

  date.setHours(0, 0, 0, 0);

  return date;
};
