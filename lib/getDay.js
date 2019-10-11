import ensureDate from './helpers/ensure-date';

/**
 * get day
 * @param  {Date|number} value
 * @return {number} - Day value
 */
export default (value) => {
  const date = ensureDate(value);

  return date.getDate();
};
