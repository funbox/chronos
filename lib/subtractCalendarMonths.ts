import { ChronosDate } from './helpers/ensureDate';
import addCalendarMonths from './addCalendarMonths';

/**
 * Subtract months from date
 * @param value
 * @param quantity
 * @return - Subtraction result
 */
export default (value: ChronosDate, quantity: number): Date => addCalendarMonths(value, -quantity);
