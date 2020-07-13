import ensureDate from './helpers/ensureDate';

/**
 * Add years to date
 * @param value
 * @param quantity
 * @return - Addition result
 */
export default (value: Date | number | string, quantity: number): Date => {
  const date = ensureDate(value);

  date.setFullYear(date.getFullYear() + quantity);

  return date;
};
