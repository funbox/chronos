import parseTime from './helpers/parseTime';

/**
 * Checks if time string is valid
 * @param  {string} value
 * @param  {string} format
 * @return {boolean} - Validation result
 */
export default (value: string, format: string): boolean => {
  try {
    return !!parseTime(value, format);
  } catch (e) {
    return false;
  }
};
