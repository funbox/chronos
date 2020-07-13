import ensureDate from './helpers/ensureDate';

/**
 * Subtract minutes from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: Date | number | string, quantity: number): Date => {
  const date = ensureDate(value);

  date.setMinutes(date.getMinutes() - quantity);

  return date;
};
