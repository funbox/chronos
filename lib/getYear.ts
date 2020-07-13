import ensureDate from './helpers/ensureDate';

/**
 * Get year
 * @param value
 * @return - Year value
 */
export default (value: Date | number | string): number => {
  const date = ensureDate(value);

  return date.getFullYear();
};
