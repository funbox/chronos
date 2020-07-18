import ensureDate from './helpers/ensureDate';

/**
 * Get hours
 * @param value
 * @return - Hour value
 */
export default (value: Date | number | string): number => {
  const date = ensureDate(value);

  return date.getHours();
};
