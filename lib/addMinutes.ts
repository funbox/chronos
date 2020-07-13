import ensureDate from './helpers/ensureDate';

/**
 * Add minutes to date
 * @param value
 * @param quantity
 * @return - Addition result
 */
export default (value: Date | number | string, quantity: number): Date => {
  const date = ensureDate(value);

  date.setMinutes(date.getMinutes() + quantity);

  return date;
};
