import ensureTime from './helpers/ensure-time';

/**
 * Format time according to format string
 * @param  {string} value
 * @param  {string} valueFormat
 * @param  {string} format
 * @return {string} - Formatted time result
 */
export default (value, valueFormat, format) => {
  const time = ensureTime(value, valueFormat);

  format = format.replace('ss', time.ss || '00');
  format = format.replace('mm', time.mm || '00');
  format = format.replace('HH', (time.H ? `${time.H}`.padStart(2, '0') : time.HH) || '00');
  format = format.replace('H', (time.H ? `${time.H}`.padStart(2, '0') : `${+time.HH}`) || '0');

  return format;
};
