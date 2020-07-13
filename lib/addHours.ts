import ensureDate from './helpers/ensureDate';

/**
 * Add hours to date
 * @param value
 * @param quantity
 * @return - Addition result
 */
export default (value: Date | number | string, quantity: number): Date => {
  const date = ensureDate(value);

  date.setHours(date.getHours() + quantity);

  return date;
};
