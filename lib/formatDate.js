import { LOCALE, LOCALE_OPTIONS } from './constants';
import ensureDate from './helpers/ensure-date';

/**
 * Format date according to pattern
 * @param  {Object|number} value
 * @param  {string} pattern
 * @return {string} - Formatted date result
 */
export default (value, format) => {
  const date = ensureDate(value);
  const [hour, minute, second] = date.toLocaleString(LOCALE, { hour: '2-digit', minute: '2-digit', second: '2-digit' }).split(':');

  format = format.replace('ss', second);
  format = format.replace('mm', minute);
  format = format.replace('HH', hour);
  format = format.replace('dddd', date.toLocaleString(LOCALE, { weekday: LOCALE_OPTIONS.LONG }));
  format = format.replace('DD', date.toLocaleString(LOCALE, { day: LOCALE_OPTIONS.DIGIT }));
  format = format.replace('D', date.getDate());
  format = format.replace('MMMM', date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS.LONG, day: LOCALE_OPTIONS.NUMERIC }).split(' ')[1]);
  format = format.replace('MM', date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS.DIGIT }));
  format = format.replace('YYYY', date.getFullYear());
  format = format.replace('YY', date.toLocaleString(LOCALE, { year: LOCALE_OPTIONS.DIGIT }));

  return format;
};
