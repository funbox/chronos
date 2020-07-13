import ensureDate from './helpers/ensureDate';

/**
 * Get month
 * @param value
 * @return - Month value
 */
export default (value: Date | number | string): number => {
  const date = ensureDate(value);

  return date.getMonth();
};
