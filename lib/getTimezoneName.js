import { TIMEZONE_NAMES } from './constants';

/**
 * Get current timezone name
 * @return {string} - Timezone name result
 */
export default () => {
  let timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (!timezoneName) {
    // IE does not support Intl API for getting timezone names,
    // so we calculate offset in hours and return the timezone name from our object.
    const timeZoneOffsetInHours = new Date().getTimezoneOffset() / -60;

    timezoneName = Object.keys(TIMEZONE_NAMES).find(key => TIMEZONE_NAMES[key] === timeZoneOffsetInHours);
  }

  return timezoneName;
};
