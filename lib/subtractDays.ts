import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Subtract days from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: ChronosDate, quantity: number): Date => {
  const date = ensureDate(value);

  date.setDate(date.getDate() - quantity);

  return date;
};
