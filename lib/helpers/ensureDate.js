/**
 * Transforms param to Date object
 * @param {Date|number|string} value
 * @return {Date} Date object result
 */
export default value => {
  let dateValue = value;
  // It's possible to pass value as a ISO 8601 or RFC2822 string. Others string formats aren't recommended to pass.
  // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
  if (typeof dateValue === 'string' && isNaN(+dateValue)) { // eslint-disable-line no-restricted-globals
    dateValue = Date.parse(dateValue);
  }

  const date = new Date((`${dateValue}`).length === 10 ? dateValue * 1e3 : +dateValue);

  // new Date('something') instanceof Date returns true,
  // so when date === Invalid Date we check that date isn't NaN
  // isNaN isn't secure, but Number.isNaN isn't supported by IE11
  if (!(date instanceof Date) || isNaN(date)) { // eslint-disable-line no-restricted-globals
    throw new Error(`Invalid date value: ${value}`);
  }

  return date;
};
