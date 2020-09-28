import { ChronosDate } from './helpers/ensureDate';
import addHours from './addHours';

/**
 * Subtract hours from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: ChronosDate, quantity: number): Date => addHours(value, -quantity);
