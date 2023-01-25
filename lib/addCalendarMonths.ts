import { ChronosDate, ensureDate } from './helpers/ensureDate';

/**
 * Add calendar months to date
 * @param value
 * @param quantity
 * @return - Addition result
 */
export default (value: ChronosDate, quantity: number): Date => {
  const date = ensureDate(value);

  const desiredDayOfMonth = date.getDate();

  date.setMonth(date.getMonth() + quantity + 1, 0);

  if (desiredDayOfMonth < date.getDate()) {
    date.setDate(desiredDayOfMonth);
  }

  return date;
};
