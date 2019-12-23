import { getDiffInDays, getDiffInHours, getDiffInMinutes, getDiffInMonths } from './index';
import getPlural from './helpers/getPlural';
import ensureDate from './helpers/ensureDate';

/**
 * get relative date
 * @param  {Date|number|string} value
 * @return {string} - relative date value
 */
export default (value) => {
  const date = ensureDate(value);
  const currentDate = new Date();

  const minutes = getDiffInMinutes(currentDate, date);
  const hours = getDiffInHours(currentDate, date);
  const days = getDiffInDays(currentDate, date);
  const months = getDiffInMonths(currentDate, date);

  let result;

  if (!minutes) {
    result = 'меньше минуты';
  } else if (minutes < 60) {
    result = `${minutes} ${getPlural(minutes, 'минуту', 'минуты', 'минут')}`;
  } else if (hours < 24) {
    result = `${hours} ${getPlural(hours, 'час', 'часа', 'часов')}`;
  } else if (days < 30) {
    result = `${days} ${getPlural(days, 'день', 'дня', 'дней')}`;
  } else if (months) {
    result = `${months} ${getPlural(months, 'месяц', 'месяца', 'месяцев')}`;
  }

  return result;
};
