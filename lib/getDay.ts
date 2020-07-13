import ensureDate from './helpers/ensureDate';

/**
 * Get day
 * @param value
 * @return - Day value
 */
export default (value: Date | number | string): number => {
  const date = ensureDate(value);

  return date.getDate();
};
