import { LOCALE, LOCALE_OPTIONS } from './constants';
import ensureDate from './helpers/ensureDate';

/**
 * Format date according to format string
 * @param  {Date|number|string} value
 * @param  {string} format
 * @return {string} - Formatted date result
 */
export default (value, format) => {
  const date = ensureDate(value);

  /*
    We use here 'en' instead of 'ru', because 'ru' doesn't work correctly
    everywhere. E.g. in Node.js when we use 'ru' locale and { hour: '2-digit' }
    we get '3' instead of '03'.

    For the same reason we use hour12, to explicitly disable AM / PM.

    But with 'en' the start of the day returns like `24:00:00`, so we replace
    `24` with `00`.
   */
  const [hour, minute, second] = date.toLocaleTimeString('en', {
    hour12: false,
    hour: LOCALE_OPTIONS.DIGIT,
    minute: LOCALE_OPTIONS.DIGIT,
    second: LOCALE_OPTIONS.DIGIT,
  }).split(':');

  // getTimezoneOffset returns offset in minutes with negative sign for timezones on the east of UTC.
  // So we divide it on -60 to get correct offset in hours.
  const timeZoneOffset = date.getTimezoneOffset();
  const timeZoneOffsetInHours = Math.floor(timeZoneOffset / -60);
  const timeZoneOffsetMinutes = `0${Math.abs(timeZoneOffset % 60)}`.slice(-2);
  const formattedTimeZoneOffset = `0${Math.abs(timeZoneOffsetInHours)}`.slice(-2);

  format = format.replace('ss', second);
  format = format.replace('mm', minute);
  format = format.replace('HH', hour === '24' ? '00' : hour);
  format = format.replace('dddd', date.toLocaleString(LOCALE, { weekday: LOCALE_OPTIONS.LONG }));
  format = format.replace('DD', date.toLocaleString(LOCALE, { day: LOCALE_OPTIONS.DIGIT }));
  format = format.replace('D', date.getDate());
  format = format.replace('MMMM', date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS.LONG, day: LOCALE_OPTIONS.NUMERIC }).split(' ')[1]);
  format = format.replace('MMM', date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS.SHORT }));
  format = format.replace('MM', date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS.DIGIT }));
  format = format.replace('YYYY', date.getFullYear());
  format = format.replace('YY', date.toLocaleString(LOCALE, { year: LOCALE_OPTIONS.DIGIT }));
  format = format.replace('Z', `${timeZoneOffsetInHours > 0 ? '+' : '-'}${formattedTimeZoneOffset}:${timeZoneOffsetMinutes}`);

  /*
    IE 11 and old versions of MS Edge add into the result of
    `toLocaleTimeString`, `toLocaleString` additional symbol U+200E.

    It breaks other Chronos functions such as `parseDate`,
    so here we remove those symbols.
   */
  format = format.replace(/\u200E/g, '');

  return format;
};
