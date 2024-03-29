export const LOCALE = 'ru';

export const LOCALE_DAY_OPTIONS = {
  numeric: 'numeric',
  '2-digit': '2-digit',
};

export const LOCALE_WEEKDAY_OPTIONS = {
  narrow: 'narrow',
  long: 'long',
  short: 'short',
};

export const LOCALE_MONTH_OPTIONS = {
  numeric: 'numeric',
  '2-digit': '2-digit',
  long: 'long',
  short: 'short',
  narrow: 'narrow',
};

export const TIMEZONE_NAMES = {
  'Asia/Kamchatka': 12,
  'Asia/Magadan': 11,
  'Asia/Vladivostok': 10,
  'Asia/Yakutsk': 9,
  'Asia/Irkutsk': 8,
  'Asia/Krasnoyarsk': 7,
  'Asia/Omsk': 6,
  'Asia/Yekaterinburg': 5,
  'Europe/Samara': 4,
  'Europe/Moscow': 3,
  'Europe/Kaliningrad': 2,
  'Europe/Oslo': 1,
  'Europe/London': 0,
  'Atlantic/Cape_Verde': -1,
  'America/Noronha': -2,
  'America/Bahia': -3,
  'Atlantic/Bermuda': -4,
  'America/New_York': -5,
  'America/Chicago': -6,
  'America/Phoenix': -7,
  'America/Los_Angeles': -8,
  'America/Anchorage': -9,
  'Pacific/Honolulu': -10,
  'Pacific/Niue': -11,
  'Pacific/Baker_Island': -12,
};

export type TimezoneNamesType = keyof typeof TIMEZONE_NAMES;

export type TimeFormatType = 'ss' | 'mm' | 'HH' | 'H';
