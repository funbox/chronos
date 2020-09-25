import { ChronosDate } from './helpers/ensureDate';
import addMonths from './addMonths';

/**
 * Subtract months from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: ChronosDate, quantity: number): Date => addMonths(value, -quantity);
