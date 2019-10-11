/**
 * Transforms param to Date object
 * @param {Date|number} value
 * @return {Date} Date object result
 */
export default value => {
  const date = new Date((`${value}`).length === 10 ? value * 1e3 : value);

  if (Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date value: ${value}`);
  }

  return date;
};
