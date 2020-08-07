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

  const hours = time.H || time.HH || 0;

  format = format.replace('ss', time.ss || '00');
  format = format.replace('mm', time.mm || '00');
  format = format.replace('HH', `0${hours}`.slice(-2));
  format = format.replace('H', `${+hours}`);

  return format;
};
