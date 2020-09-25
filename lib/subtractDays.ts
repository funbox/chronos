import { ChronosDate } from './helpers/ensureDate';
import addDays from './addDays';

/**
 * Subtract days from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: ChronosDate, quantity: number): Date => addDays(value, -quantity);
