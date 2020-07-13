import ensureDate from './helpers/ensureDate';

/**
 * Subtract hours from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: Date | number | string, quantity: number): Date => {
  const date = ensureDate(value);

  date.setHours(date.getHours() - quantity);

  return date;
};
