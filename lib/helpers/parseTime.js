/**
 * Parse time string to object
 * @param {string} value
 * @param  {string} format
 * @return {Object} object result
 */
export default (value, format) => {
  if (!value) {
    throw new Error(`Invalid value: ${value}`);
  }

  if (!format) {
    throw new Error(`Invalid format: ${format}`);
  }

  const time = value.split(':');
  const formatParts = format.split(':');

  if (time.length !== formatParts.length) {
    throw new Error(`Format doesn't match time: ${format}, ${value}`);
  }

  const timeObj = formatParts.reduce((acc, part, i) => {
    let validTime = null;

    if (part === 'HH') {
      validTime = time[i].match(/^(0[0-9]|1[0-9]|2[0-3])$/);
    } else if (part === 'H') {
      validTime = time[i].match(/^([0-9]|1[0-9]|2[0-3])$/);
    } else {
      validTime = time[i].match(/^[0-5][0-9]$/);
    }

    if (!validTime) {
      throw new Error(`Invalid value: ${value}`);
    }

    acc[part] = validTime[0];

    return acc;
  }, {});

  return timeObj;
};
