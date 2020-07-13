import ensureDate from './helpers/ensureDate';

/**
 * Get minutes
 * @param value
 * @return - minute value
 */
export default (value: Date | number | string): number => {
  const date = ensureDate(value);

  return date.getMinutes();
};
