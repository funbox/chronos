import ensureDate from './helpers/ensureDate';

/**
 * Get year
 * @param  {Date|number|string} value
 * @return {number} - Year value
 */
export default (value) => {
  const date = ensureDate(value);

  return date.getFullYear();
};
