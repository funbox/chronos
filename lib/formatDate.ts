import { LOCALE, LOCALE_OPTIONS } from './constants';
import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Format date according to format string
 * @param value
 * @param format
 * @return - Formatted date result
 */
export default (value: ChronosDate, format: string): string => {
  const date = ensureDate(value);

  const hour = `0${date.getHours()}`.slice(-2);
  const minute = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);

  // getTimezoneOffset returns offset in minutes with negative sign for timezones on the east of UTC.
  // So we divide it on -60 to get correct offset in hours.
  const timeZoneOffset = date.getTimezoneOffset();
  const timeZoneOffsetInHours = Math.floor(timeZoneOffset / -60);
  const timeZoneOffsetMinutes = `0${Math.abs(timeZoneOffset % 60)}`.slice(-2);
  const formattedTimeZoneOffset = `0${Math.abs(timeZoneOffsetInHours)}`.slice(-2);

  format = format.replace('ss', second);
  format = format.replace('mm', minute);
  format = format.replace('HH', hour);
  format = format.replace('dddd', date.toLocaleString(LOCALE, { weekday: LOCALE_OPTIONS.LONG }));
  format = format.replace('DD', `0${date.getDate()}`.slice(-2));
  format = format.replace('D', `${date.getDate()}`); // String.replace wants a string as a second parameter
  format = format.replace('MMMM', date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS.LONG, day: LOCALE_OPTIONS.NUMERIC }).split(' ')[1]);
  format = format.replace('MMM', date.toLocaleString(LOCALE, { month: LOCALE_OPTIONS.SHORT }));
  format = format.replace('MM', `0${date.getMonth() + 1}`.slice(-2));
  format = format.replace('YYYY', `${date.getFullYear()}`);
  format = format.replace('YY', `${date.getFullYear()}`.substring(2));
  format = format.replace('ZZ', `${timeZoneOffsetInHours > 0 ? '+' : '-'}${formattedTimeZoneOffset}${timeZoneOffsetMinutes}`);
  format = format.replace('Z', `${timeZoneOffsetInHours > 0 ? '+' : '-'}${formattedTimeZoneOffset}:${timeZoneOffsetMinutes}`);

  /*
    IE 11 and old versions of MS Edge add into the result of
    `toLocaleString` additional symbol U+200E.

    It breaks other Chronos functions such as `parseDate`,
    so here we remove those symbols.
   */
  format = format.replace(/\u200E/g, '');

  return format;
};
