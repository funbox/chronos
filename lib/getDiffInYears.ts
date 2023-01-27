import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Calculate difference of dates in full years
 * @param firstValue
 * @param secondValue
 * @return - Difference result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): number => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);

  const diffInCalendarYears = firstDate.getFullYear() - secondDate.getFullYear();

  let diff = Math.abs(diffInCalendarYears);

  if (diff) {
    firstDate.setFullYear(firstDate.getFullYear() - diffInCalendarYears);

    const datesDiff = firstDate.getTime() - secondDate.getTime();
    const isNotFullYear = diffInCalendarYears < 0 ? datesDiff > 0 : datesDiff < 0;

    if (isNotFullYear) {
      diff -= 1;
    }
  }

  return diffInCalendarYears < 0 && diff !== 0 ? -diff : diff;
};
