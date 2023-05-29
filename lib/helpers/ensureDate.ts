export type ChronosDate = Date | number | string;

/**
 * Transforms param to Date object
 * @param value
 * @return - Date object result
 */
export const ensureDate = (value: ChronosDate): Date => {
  let dateValue = value;
  // It's possible to pass value as a ISO 8601 or RFC2822 string. Others string formats aren't recommended to pass.
  // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
  if (typeof dateValue === 'string' && isNaN(+dateValue)) { // eslint-disable-line no-restricted-globals
    dateValue = Date.parse(dateValue);
  }

  const date = new Date((`${dateValue.toString()}`).length === 10 ? +dateValue * 1e3 : +dateValue);

  // new Date('something') instanceof Date returns true,
  // so when date === Invalid Date we check that date isn't NaN
  // isNaN isn't secure, but Number.isNaN isn't supported by IE11
  if (!(date instanceof Date) || isNaN(+date)) { // eslint-disable-line no-restricted-globals
    throw new Error(`Invalid date value: ${value.toString()}`);
  }

  return date;
};
