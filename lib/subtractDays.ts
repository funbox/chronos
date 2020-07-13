import ensureDate from './helpers/ensureDate';

/**
 * Subtract days from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: Date | number | string, quantity: number): Date => {
  const date = ensureDate(value);

  date.setDate(date.getDate() - quantity);

  return date;
};
