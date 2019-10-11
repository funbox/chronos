import ensureDate from './helpers/ensure-date';

/**
 * get month
 * @param  {Date|number} value
 * @return {number} - Month value
 */
export default (value) => {
  const date = ensureDate(value);

  return date.getMonth();
};
