import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Add minutes to date
 * @param value
 * @param quantity
 * @return - Addition result
 */
export default (value: ChronosDate, quantity: number): Date => {
  const date = ensureDate(value);

  date.setMinutes(date.getMinutes() + quantity);

  return date;
};
