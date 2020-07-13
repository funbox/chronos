import ensureDate from './helpers/ensureDate';

/**
 * Add days to date
 * @param value
 * @param quantity
 * @return – Addition result
 */
export default (value: Date | number | string, quantity: number): Date => {
  const date = ensureDate(value);

  date.setDate(date.getDate() + quantity);

  return date;
};
