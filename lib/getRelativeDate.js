import { getDiffInDays, getDiffInHours, getDiffInMinutes, getDiffInYears } from './index';
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
  // https://www.w3schools.com/jsref/jsref_setmonth.asp
  const months = Math.floor(days / 30);
  const years = getDiffInYears(currentDate, date);

  let result;

  if (!minutes) {
    result = 'меньше минуты';
  } else if (minutes < 60) {
    result = `${minutes === 1 ? '' : minutes} ${getPlural(minutes, 'минуту', 'минуты', 'минут')}`;
  } else if (hours < 24) {
    result = `${hours === 1 ? '' : hours} ${getPlural(hours, 'час', 'часа', 'часов')}`;
  } else if (days < 30) {
    result = `${days === 1 ? '' : days} ${getPlural(days, 'день', 'дня', 'дней')}`;
  } else if (months < 12) {
    result = `${months === 1 ? '' : months} ${getPlural(months, 'месяц', 'месяца', 'месяцев')}`;
  } else if (years) {
    result = `${years === 1 ? '' : years} ${getPlural(months, 'год', 'года', 'лет')}`;
  }

  return result;
};
