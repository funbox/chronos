import ensureDate from './helpers/ensure-date';

/**
 * get year
 * @param  {Date|number} value
 * @return {number} - Year value
 */
export default (value) => {
  const date = ensureDate(value);

  return date.getFullYear();
};
