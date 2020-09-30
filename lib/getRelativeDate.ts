import { getDiffInDays, getDiffInHours, getDiffInMinutes, getDiffInMonths, getDiffInYears } from '.';
import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Get relative date
 * @param value
 * @return - Relative date value
 */
export default (value: ChronosDate): string => {
  const date = ensureDate(value);
  const currentDate = new Date();

  const minutes = getDiffInMinutes(currentDate, date);
  const hours = getDiffInHours(currentDate, date);
  const days = getDiffInDays(currentDate, date);
  const months = getDiffInMonths(currentDate, date);
  const years = getDiffInYears(currentDate, date);

  let result = '';

  if (!minutes) {
    result = 'меньше минуты';
  } else if (minutes < 60) {
    result = `${minutes === 1 ? '' : `${minutes} `}${getPlural(minutes, 'минуту', 'минуты', 'минут')}`;
  } else if (hours < 24) {
    result = `${hours === 1 ? '' : `${hours} `}${getPlural(hours, 'час', 'часа', 'часов')}`;
  } else if (days < 30) {
    result = `${days === 1 ? '' : `${days} `}${getPlural(days, 'день', 'дня', 'дней')}`;
  } else if (months < 12) {
    result = `${months === 1 ? '' : `${months} `}${getPlural(months, 'месяц', 'месяца', 'месяцев')}`;
  } else {
    result = `${years === 1 ? '' : `${years} `}${getPlural(years, 'год', 'года', 'лет')}`;
  }

  return result;
};

function getPlural(n: number, one: string, few: string, many: string): string {
  if (n % 10 === 1 && n % 100 !== 11) {
    return one;
  }

  if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    return few;
  }

  return many;
};
