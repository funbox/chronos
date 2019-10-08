import { LOCALE } from './constants';
import isValid from './helpers/is-valid';

/**
 * Format date according to pattern
 * @param  {Object} date
 * @param  {string} pattern
 * @return {string} - Formatted date result
 */
export default (date, format) => {
  if (!isValid(date)) return '';

  format = format.replace('ss', date.getSeconds());
  format = format.replace('mm', date.getMinutes());
  format = format.replace('HH', date.getHours());
  format = format.replace('dddd', date.toLocaleString(LOCALE, { weekday: 'long' }));
  format = format.replace('DD', date.toLocaleString(LOCALE, { day: '2-digit' }));
  format = format.replace('D', date.getDate());
  format = format.replace('MMMM', date.toLocaleString(LOCALE, { month: 'long', day: 'numeric' }).split(' ')[1]);
  format = format.replace('MM', date.toLocaleString(LOCALE, { month: '2-digit' }));
  format = format.replace('YYYY', date.getFullYear());
  format = format.replace('YY', date.toLocaleString(LOCALE, { year: '2-digit' }));

  return format;
};
