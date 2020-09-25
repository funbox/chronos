import { ChronosDate } from './helpers/ensureDate';
import addMinutes from './addMinutes';

/**
 * Subtract minutes from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: ChronosDate, quantity: number): Date => addMinutes(value, -quantity);
