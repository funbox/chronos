import ensureDate from './helpers/ensureDate';

/**
 * Subtract years from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: Date | number | string, quantity: number): Date => {
  const date = ensureDate(value);

  date.setFullYear(date.getFullYear() - quantity);

  return date;
};
