import { TimeFormatType } from '../constants';

/**
 * Parse time string to object
 * @param value
 * @param format
 * @return - Time parts as object result
 */
export default (value: string, format: string): Record<TimeFormatType, string> => {
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

  const timeObj = formatParts.reduce((acc: Record<string, string>, part: string, i: number) => {
    let validTime = null;

    if (part === 'HH') {
      validTime = /^(0[0-9]|1[0-9]|2[0-3])$/.exec(time[i]);
    } else if (part === 'H') {
      validTime = /^([0-9]|1[0-9]|2[0-3])$/.exec(time[i]);
    } else {
      validTime = /^[0-5][0-9]$/.exec(time[i]);
    }

    if (!validTime) {
      throw new Error(`Invalid value: ${value}`);
    }

    acc[part] = validTime[0];

    return acc;
  }, {});

  return timeObj;
};
