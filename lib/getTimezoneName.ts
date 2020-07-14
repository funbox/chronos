import { CONSTANTS } from './constants';

/**
 * Get current timezone name
 * @return - Timezone name result
 */
export default (): string => {
  let timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (!timezoneName) {
    // IE does not support Intl API for getting timezone names,
    // so we calculate offset in hours and return the timezone name from our object.
    const timeZoneOffsetInHours = Math.floor(new Date().getTimezoneOffset() / -60);

    timezoneName = Object.keys(CONSTANTS.TIMEZONE_NAMES).find(key => CONSTANTS.TIMEZONE_NAMES[key] === timeZoneOffsetInHours) || '';
  }

  return timezoneName;
};
