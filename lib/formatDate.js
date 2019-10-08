import { LOCALE } from './constants';
import isValid from './helpers/is-valid';
import getDate from './helpers/get-date';

/**
 * Format date according to pattern
 * @param  {Object|number} value
 * @param  {string} pattern
 * @return {string} - Formatted date result
 */
export default (value, format) => {
  const date = getDate(value);

  if (!isValid(date)) return '';

  format = format.replace('ss', date.toLocaleString(LOCALE, { minute: '2-digit', second: '2-digit' }).split(':')[1]);
  format = format.replace('mm', date.toLocaleString(LOCALE, { hour: 'numeric', minute: '2-digit' }).split(':')[1]);
  format = format.replace('HH', date.toLocaleString(LOCALE, { hour: '2-digit', minute: '2-digit' }).split(':')[0]);
  format = format.replace('dddd', date.toLocaleString(LOCALE, { weekday: 'long' }));
  format = format.replace('DD', date.toLocaleString(LOCALE, { day: '2-digit' }));
  format = format.replace('D', date.getDate());
  format = format.replace('MMMM', date.toLocaleString(LOCALE, { month: 'long', day: 'numeric' }).split(' ')[1]);
  format = format.replace('MM', date.toLocaleString(LOCALE, { month: '2-digit' }));
  format = format.replace('YYYY', date.getFullYear());
  format = format.replace('YY', date.toLocaleString(LOCALE, { year: '2-digit' }));

  return format;
};
