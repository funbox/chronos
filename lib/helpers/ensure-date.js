/**
 * Transforms param to Date object
 * @param {Date|number|string} value
 * @return {Date} Date object result
 */
export default value => {
  const date = new Date((`${value}`).length === 10 ? value * 1e3 : +value);

  // new Date('something') instanceof Date returns true,
  // so when date == Invalid Date we check that date.getTime() doesn't return NaN
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date value: ${date}`);
  }

  return date;
};
