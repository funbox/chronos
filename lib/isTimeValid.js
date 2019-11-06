import ensureTime from './helpers/ensure-time';

/**
 * Checks if time string is valid
 * @param  {string} value
 * @param  {string} format
 * @return {boolean} - Validation result
 */
export default (value, format) => {
  try {
    return !!ensureTime(value, format);
  } catch (e) {
    return false;
  }
};
