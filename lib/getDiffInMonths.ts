import { ChronosDate, ensureDate } from './helpers/ensureDate';
import { getDiffInCalendarMonths } from '.';

/**
 * Calculate difference of dates in full months
 * @param firstValue
 * @param secondValue
 * @return - Difference result
 */
export default (firstValue: ChronosDate, secondValue: ChronosDate): number => {
  const firstDate = ensureDate(firstValue);
  const secondDate = ensureDate(secondValue);
  const diffInCalendarMonths = getDiffInCalendarMonths(firstDate, secondDate);

  let diff = Math.abs(diffInCalendarMonths);

  if (diff) {
    const isEndOfFebruary = firstDate.getMonth() === 1 && firstDate.getDate() >= 28;

    if (isEndOfFebruary) {
      firstDate.setDate(30);
    }

    firstDate.setMonth(firstDate.getMonth() - diffInCalendarMonths);

    const datesDiff = firstDate.getTime() - secondDate.getTime();
    const isNotFullMonth = diffInCalendarMonths < 0 ? datesDiff > 0 : datesDiff < 0;

    if (isNotFullMonth) {
      diff -= 1;
    }
  }

  return diffInCalendarMonths < 0 && diff !== 0 ? -diff : diff;
};
