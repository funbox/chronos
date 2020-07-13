import ensureDate from './helpers/ensureDate';

/**
 * Get start of week
 * @param value
 * @param diff
 * @return - Start of date result
 */
export default (value: Date | number | string, diff = 0): Date => {
  const date = ensureDate(value);
  const weekDay = date.getDay() || 7;

  if (weekDay !== 1) {
    date.setDate(date.getDate() - (weekDay - 1));
  }

  if (diff) {
    date.setDate(date.getDate() + diff * 7);
  }

  date.setHours(0, 0, 0, 0);

  return date;
};
