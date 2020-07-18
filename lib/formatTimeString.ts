import parseTime from './helpers/parseTime';

/**
 * Format time according to format string
 * @param value
 * @param valueFormat
 * @param format
 * @return - Formatted time result
 */
export default (value: string, valueFormat: string, format: string): string => {
  const time = parseTime(value, valueFormat);

  format = format.replace('ss', time.ss || '00');
  format = format.replace('mm', time.mm || '00');
  format = format.replace('HH', (time.H ? `0${time.H}`.slice(-2) : time.HH) || '00');
  format = format.replace('H', (time.H ? time.H : `${+time.HH}`) || '0');

  return format;
};
