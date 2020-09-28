import { ChronosDate } from './helpers/ensureDate';
import addYears from './addYears';

/**
 * Subtract years from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: ChronosDate, quantity: number): Date => addYears(value, -quantity);
