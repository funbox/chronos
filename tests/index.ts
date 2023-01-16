import { describe, it } from 'mocha';

require('chai').use(require('chai-datetime'));

const expect = require('chai').expect;

const {
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
  subtractMinutes,
  subtractHours,
  subtractDays,
  subtractMonths,
  subtractYears,
  formatDate,
  formatTimeString,
  getHours,
  getMinutes,
  getDay,
  getWeek,
  getMonth,
  getYear,
  getWeekdayName,
  getMonthName,
  getDuration,
  isSameMinute,
  isSameHour,
  isSameDay,
  isSameMonth,
  isSameYear,
  getDiffInMinutes,
  getDiffInHours,
  getDiffInDays,
  getDiffInCalendarMonths,
  getDiffInYears,
  getStartOfMinutes,
  getStartOfHours,
  getStartOfDay,
  getStartOfWeek,
  getStartOfMonth,
  getStartOfYear,
  getStartOfDecade,
  getEndOfMinutes,
  getEndOfHours,
  getEndOfDay,
  getEndOfWeek,
  getEndOfMonth,
  getEndOfYear,
  getEndOfDecade,
  getRelativeDate,
  getUtcOffset,
  getUnixTimestamp,
  getTimezoneName,
  isTimeValid,
  parseDate,
} = require('../lib');

const newYear2020UnixTime = new Date(2020, 0, 1).getTime() / 1e3;
const localUTCOffset = `0${Math.abs(getUtcOffset(new Date(2020, 0, 1)))}`.slice(-2);

describe('addMinutes, addHours, addDays, addMonths, addYears', () => {
  it('adds 1 minute', () => {
    expect(addMinutes(newYear2020UnixTime, 1)).to.equalTime(new Date(2020, 0, 1, 0, 1));
  });

  it('adds 1 hour', () => {
    expect(addHours(newYear2020UnixTime, 1)).to.equalTime(new Date(2020, 0, 1, 1));
  });

  it('adds 1 day', () => {
    expect(addDays(newYear2020UnixTime, 1)).to.equalTime(new Date(2020, 0, 2));
  });

  it('adds 1 month', () => {
    expect(addMonths(newYear2020UnixTime, 1)).to.equalTime(new Date(2020, 1, 1));
  });

  it('adds 1 month to the end of the month w/ overflowing', () => {
    expect(addMonths(new Date(2020, 0, 31), 1)).to.equalTime(new Date(2020, 2, 2));
  });

  it('adds 1 month to the end of the month w/o overflowing', () => {
    expect(addMonths(new Date(2020, 1, 28), 1)).to.equalTime(new Date(2020, 2, 28));
  });

  it('adds 1 year', () => {
    expect(addYears(newYear2020UnixTime, 1)).to.equalTime(new Date(2021, 0, 1));
  });
});

describe('subtractMinutes, subtractHours, subtractDays, subtractMonths, subtractYears', () => {
  it('subtracts 1 minute', () => {
    expect(subtractMinutes(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 11, 31, 23, 59));
  });

  it('subtracts 1 hour', () => {
    expect(subtractHours(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 11, 31, 23));
  });

  it('subtracts 1 day', () => {
    expect(subtractDays(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 11, 31));
  });

  it('subtracts 1 month', () => {
    expect(subtractMonths(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 11, 1));
  });

  it('subtracts 1 month from the end of the month w/ overflowing', () => {
    expect(subtractMonths(new Date(2020, 2, 31), 1)).to.equalTime(new Date(2020, 2, 2));
  });

  it('subtracts 1 month from the end of the month w/o overflowing', () => {
    expect(subtractMonths(new Date(2020, 1, 29), 1)).to.equalTime(new Date(2020, 0, 29));
  });

  it('subtracts 1 year', () => {
    expect(subtractYears(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 0, 1));
  });
});

describe('formatDate', () => {
  it('formats unix timestamp to \'HH:mm:ss\'', () => {
    expect(formatDate(newYear2020UnixTime, 'HH:mm:ss')).to.equal('00:00:00');
  });

  it('formats unix timestamp to \'DD.MM.YYYY\'', () => {
    expect(formatDate(newYear2020UnixTime, 'DD.MM.YYYY')).to.equal('01.01.2020');
  });

  it('formats unix timestamp to \'D MMM YYYY\'', () => {
    expect(formatDate(newYear2020UnixTime, 'D MMM YYYY')).to.equal('1 янв. 2020');
  });

  it('formats Date instance to \'YYYY-MM-DD\'', () => {
    expect(formatDate(new Date(2020, 0, 1), 'YYYY-MM-DD')).to.equal('2020-01-01');
  });

  it('formats Date instance to \'YYYY-MM-DDTHH:mm:ssZ\'', () => {
    const formattedDateRegexp = new RegExp(`^2020-01-01T00:00:00[+-]${localUTCOffset}:00$`);
    expect(formatDate(new Date(2020, 0, 1), 'YYYY-MM-DDTHH:mm:ssZ')).to.match(formattedDateRegexp);
  });

  it('formats Date instance to \'YYYY-MM-DDTHH:mm:ssZZ\'', () => {
    const formattedDateRegexp = new RegExp(`^2020-01-01T00:00:00[+-]${localUTCOffset}00$`);
    expect(formatDate(new Date(2020, 0, 1), 'YYYY-MM-DDTHH:mm:ssZZ')).to.match(formattedDateRegexp);
  });

  it('formats Date instance to \'dddd, DD.MM.YYYY в HH:mm:ss\'', () => {
    expect(formatDate(new Date(2020, 0, 1), 'dddd, DD.MM.YYYY в HH:mm:ss')).to.equal('среда, 01.01.2020 в 00:00:00');
  });

  it('formats Date instance of midnight to \'HH\' as 00', () => {
    expect(formatDate(new Date(2020, 0, 1, 0), 'HH')).to.equal('00');
  });

  it('formats Date instance of midday to \'HH\' as 12', () => {
    expect(formatDate(new Date(2020, 0, 1, 12), 'HH')).to.equal('12');
  });
});

describe('formatTimeString', () => {
  it('returns string formatted as \'HH:mm:ss\'', () => {
    expect(formatTimeString('1:30', 'H:mm', 'HH:mm:ss')).to.equal('01:30:00');
  });

  it('returns string formatted as \'H:mm:ss\'', () => {
    expect(formatTimeString('1:30', 'H:mm', 'H:mm:ss')).to.equal('1:30:00');
  });

  it('returns string formatted as \'mm:ss\'', () => {
    expect(formatTimeString('11:30', 'mm:ss', 'HH:mm:ss')).to.equal('00:11:30');
  });

  it('returns 00 hours string formatted as \'HH:mm:ss\'', () => {
    expect(formatTimeString('00', 'HH', 'HH:mm:ss')).to.equal('00:00:00');
  });

  it('returns 00 minutes string formatted as \'HH:mm:ss\'', () => {
    expect(formatTimeString('00', 'mm', 'HH:mm:ss')).to.equal('00:00:00');
  });

  it('returns 00 seconds string formatted as \'HH:mm:ss\'', () => {
    expect(formatTimeString('00', 'mm', 'HH:mm:ss')).to.equal('00:00:00');
  });

  it('throws an error when get invalid time', () => {
    expect(() => formatTimeString('33:30', 'HH:mm', 'HH:mm:ss')).to.throw('Invalid value: 33:30');
  });

  it('throws an error when get empty string as value', () => {
    expect(() => formatTimeString('', 'HH', 'HH:mm:ss')).to.throw('Empty value');
  });

  it('throws an error when get empty string as format', () => {
    expect(() => formatTimeString('00', '', 'HH:mm:ss')).to.throw('Empty format');
  });

  it('throws an error when format does not match time', () => {
    expect(() => formatTimeString('00', 'HH:mm:ss', 'HH:mm:ss')).to.throw('Format doesn\'t match time: HH:mm:ss, 00');
  });
});

describe('getMinutes, getHours, getDay, getWeek, getMonth, getYear', () => {
  it('returns minute of unix timestamp', () => {
    expect(getMinutes(newYear2020UnixTime)).to.equal(0);
  });

  it('returns hour of unix timestamp', () => {
    expect(getHours(newYear2020UnixTime)).to.equal(0);
  });

  it('returns day of unix timestamp', () => {
    expect(getDay(newYear2020UnixTime)).to.equal(1);
  });

  it('returns week for 31.12.2019', () => {
    expect(getWeek(new Date(2019, 11, 31))).to.equal(53);
  });

  it('returns week for 01.01.2020', () => {
    expect(getWeek(new Date(2020, 0, 1))).to.equal(1);
  });

  it('returns week for 05.02.2020', () => {
    expect(getWeek(new Date(2020, 1, 5))).to.equal(6);
  });

  it('returns month of unix timestamp', () => {
    expect(getMonth(newYear2020UnixTime)).to.equal(0);
  });

  it('returns year of unix timestamp', () => {
    expect(getYear(newYear2020UnixTime)).to.equal(2020);
  });
});

describe('getWeekdayName, getMonthName', () => {
  it('returns weekday name in short format', () => {
    expect(getWeekdayName(newYear2020UnixTime, 'short')).to.eql('ср');
  });

  it('returns weekday name in long format', () => {
    expect(getWeekdayName(newYear2020UnixTime, 'long')).to.eql('среда');
  });

  it('returns weekday name in long format by default', () => {
    expect(getWeekdayName(newYear2020UnixTime)).to.eql('среда');
  });

  it('returns month name in short format', () => {
    expect(getMonthName(newYear2020UnixTime, 'short')).to.eql('янв.');
  });

  it('returns month name in long format', () => {
    expect(getMonthName(newYear2020UnixTime, 'long')).to.eql('январь');
  });

  it('returns month name in long format by default', () => {
    expect(getMonthName(newYear2020UnixTime)).to.eql('январь');
  });
});

describe('getDuration', () => {
  it('returns duration as days, hours and minutes', () => {
    expect(getDuration(1000000)).to.deep.equal({ days: 11, hours: 13, minutes: 46, seconds: 40 });
  });

  it('returns duration as hours and minutes', () => {
    expect(getDuration(10000)).to.deep.equal({ days: 0, hours: 2, minutes: 46, seconds: 40 });
  });

  it('returns duration as minutes', () => {
    expect(getDuration(1000)).to.deep.equal({ days: 0, hours: 0, minutes: 16, seconds: 40 });
  });
});

describe('isSameMinute, isSameHour, isSameDay, isSameMonth, isSameYear', () => {
  it('compares same minutes', () => {
    expect(isSameMinute(new Date(2020, 0, 1, 23, 50), new Date(2020, 0, 1, 23, 50, 30))).to.equal(true);
  });

  it('compares different minutes', () => {
    expect(isSameMinute(new Date(2020, 0, 1, 23, 50), new Date(2019, 0, 1, 23, 51))).to.equal(false);
  });

  it('compares different minutes of different years', () => {
    expect(isSameMinute(new Date(2020, 0, 1, 23), new Date(2019, 0, 1, 23))).to.equal(false);
  });

  it('compares same hours', () => {
    expect(isSameHour(new Date(2020, 0, 1, 23), new Date(2020, 0, 1, 23, 50))).to.equal(true);
  });

  it('compares different hours', () => {
    expect(isSameHour(new Date(2020, 0, 1, 23), new Date(2019, 0, 1, 22))).to.equal(false);
  });

  it('compares different hours of different years', () => {
    expect(isSameHour(new Date(2020, 0, 1, 23), new Date(2019, 0, 1, 23))).to.equal(false);
  });

  it('compares same days', () => {
    expect(isSameDay(new Date(2020, 0, 1), new Date(2020, 0, 1, 5))).to.equal(true);
  });

  it('compares different days', () => {
    expect(isSameDay(new Date(2020, 0, 1), new Date(2019, 0, 2))).to.equal(false);
  });

  it('compares different days of different years', () => {
    expect(isSameDay(new Date(2020, 0, 1), new Date(2019, 0, 1))).to.equal(false);
  });

  it('compares same months', () => {
    expect(isSameMonth(new Date(2020, 0, 1), new Date(2020, 0, 2))).to.equal(true);
  });

  it('compares different months', () => {
    expect(isSameMonth(new Date(2020, 0, 1), new Date(2019, 1, 1))).to.equal(false);
  });

  it('compares different months of different years', () => {
    expect(isSameMonth(new Date(2020, 0, 1), new Date(2019, 0, 1))).to.equal(false);
  });

  it('compares same years', () => {
    expect(isSameYear(new Date(2020, 0, 1), new Date(2020, 0, 2))).to.equal(true);
  });

  it('compares different years', () => {
    expect(isSameYear(new Date(2020, 0, 1), new Date(2019, 11, 31))).to.equal(false);
  });
});

describe('getDiffInMinutes, getDiffInHours, getDiffInDays, getDiffInCalendarMonths, getDiffInYears', () => {
  it('returns diff in minutes', () => {
    expect(getDiffInMinutes(new Date(2020, 0, 1), new Date(2020, 0, 1, 1))).to.equal(-60);
  });

  it('returns diff in minutes of two unix timestamps', () => {
    expect(getDiffInMinutes(1572348594627, 1572348283627)).to.equal(5);
  });

  it('returns diff in minutes of different days', () => {
    expect(getDiffInMinutes(new Date(2020, 0, 1), new Date(2020, 0, 2, 1))).to.equal(-(60 * 25));
  });

  it('returns 0 when diff in minutes in [0; 1)', () => {
    expect(getDiffInMinutes(new Date(2020, 0, 1, 0, 0, 59), new Date(2020, 0, 1, 0, 0, 0))).to.equal(0);
  });

  it('returns 0 when diff in minutes in (-1; 0]', () => {
    expect(getDiffInMinutes(new Date(2020, 0, 1, 0, 0, 0), new Date(2020, 0, 1, 0, 0, 59))).to.equal(0);
  });

  it('returns diff in hours', () => {
    expect(getDiffInHours(new Date(2020, 0, 1, 5), new Date(2020, 0, 1))).to.equal(5);
  });

  it('returns diff in hours of different days', () => {
    expect(getDiffInHours(new Date(2020, 0, 2, 5), new Date(2020, 0, 1))).to.equal(29);
  });

  it('returns 0 when diff in hours in [0; 1)', () => {
    expect(getDiffInHours(new Date(2020, 0, 1, 0, 59), new Date(2020, 0, 1, 0, 0))).to.equal(0);
  });

  it('returns 0 when diff in hours in (-1; 0]', () => {
    expect(getDiffInHours(new Date(2020, 0, 1, 0, 0), new Date(2020, 0, 1, 0, 59))).to.equal(0);
  });

  it('returns diff in days of two unix timestamps', () => {
    expect(getDiffInDays(1572348594627, 1572248594627)).to.equal(1);
  });

  it('returns diff in days of different years', () => {
    expect(getDiffInDays(new Date(2019, 0, 1), new Date(2020, 0, 5))).to.equal(-369);
  });

  it('returns 0 when diff in days in [0; 1)', () => {
    expect(getDiffInDays(new Date(2020, 0, 1, 23), new Date(2020, 0, 1, 0))).to.equal(0);
  });

  it('returns 0 when diff in days in (-1; 0]', () => {
    expect(getDiffInDays(new Date(2020, 0, 1, 0), new Date(2020, 0, 1, 23))).to.equal(0);
  });

  it('returns diff in months', () => {
    expect(getDiffInCalendarMonths(new Date(2020, 0, 1), new Date(2020, 4, 1))).to.equal(-4);
  });

  it('returns diff in months of different years', () => {
    expect(getDiffInCalendarMonths(new Date(2019, 0, 1), new Date(2020, 4, 1))).to.equal(-16);
  });

  it('returns diff in years', () => {
    expect(getDiffInYears(new Date(2020, 0, 1), new Date(2019, 0, 1))).to.equal(1);
  });

  it('returns diff in years in days', () => {
    expect(getDiffInDays(new Date(2020, 0, 1), new Date(2020, 0, 5))).to.equal(-4);
  });
});

describe('getStartOfMinutes, getStartOfHours, getStartOfDay, getStartOfWeek, getStartOfMonth, getStartOfYear, getStartOfDecade', () => {
  it('returns date of start of minutes', () => {
    expect(getStartOfMinutes(new Date(2020, 1, 1, 23, 59, 30))).to.equalTime(new Date(2020, 1, 1, 23, 59, 0));
  });

  it('returns date of start of minutes + 1', () => {
    expect(getStartOfMinutes(new Date(2020, 1, 1, 23, 59, 30), 1)).to.equalTime(new Date(2020, 1, 2, 0, 0, 0));
  });

  it('returns date of start of minutes - 1', () => {
    expect(getStartOfMinutes(new Date(2020, 1, 1, 23, 59, 30), -1)).to.equalTime(new Date(2020, 1, 1, 23, 58, 0));
  });

  it('returns date of start of hours', () => {
    expect(getStartOfHours(new Date(2020, 1, 1, 23, 59))).to.equalTime(new Date(2020, 1, 1, 23, 0));
  });

  it('returns date of start of hours + 1', () => {
    expect(getStartOfHours(new Date(2020, 1, 1, 23, 59), 1)).to.equalTime(new Date(2020, 1, 2, 0, 0));
  });

  it('returns date of start of hours - 1', () => {
    expect(getStartOfHours(new Date(2020, 1, 1, 23, 59), -1)).to.equalTime(new Date(2020, 1, 1, 22, 0));
  });

  it('returns date of start of day', () => {
    const result = getStartOfDay(new Date(2020, 2, 2, 23, 59));
    expect(result.getTime()).to.equal(new Date(2020, 2, 2, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of day + 1', () => {
    const result = getStartOfDay(new Date(2020, 2, 2, 23, 59), 1);
    expect(result.getTime()).to.equal(new Date(2020, 2, 3, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of day - 1', () => {
    const result = getStartOfDay(new Date(2020, 2, 2, 23, 59), -1);
    expect(result.getTime()).to.equal(new Date(2020, 2, 1, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week', () => {
    const result = getStartOfWeek(new Date(2020, 0, 1));
    expect(result.getTime()).to.equal(new Date(2019, 11, 30, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week when it is already monday', () => {
    const result = getStartOfWeek(new Date(2020, 7, 10, 1, 0));
    expect(result.getTime()).to.equal(new Date(2020, 7, 10, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week when it is sunday', () => {
    const result = getStartOfWeek(new Date(2020, 7, 9, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 7, 3, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week + 1', () => {
    const result = getStartOfWeek(new Date(2020, 0, 1), 1);
    expect(result.getTime()).to.equal(new Date(2020, 0, 6, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week - 1', () => {
    const result = getStartOfWeek(new Date(2020, 0, 1), -1);
    expect(result.getTime()).to.equal(new Date(2019, 11, 23, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of month', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59))).to.equalTime(new Date(2020, 2, 1, 0, 0));
  });

  it('returns date of start of month + 1', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59), 1)).to.equalTime(new Date(2020, 3, 1, 0, 0));
  });

  it('returns date of start of month - 1', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59), -1)).to.equalTime(new Date(2020, 1, 1, 0, 0));
  });

  it('returns date of start of year', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59))).to.equalTime(new Date(2020, 0, 1, 0, 0));
  });

  it('returns date of start of year + 1', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59), 1)).to.equalTime(new Date(2021, 0, 1, 0, 0));
  });

  it('returns date of start of year - 1', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59), -1)).to.equalTime(new Date(2019, 0, 1, 0, 0));
  });

  it('returns date of start of decade', () => {
    expect(getStartOfDecade(new Date(2025, 1, 1, 23, 59))).to.equalTime(new Date(2020, 0, 1, 0, 0));
  });

  it('returns date of start of decade + 1', () => {
    expect(getStartOfDecade(new Date(2025, 1, 1, 23, 59), 1)).to.equalTime(new Date(2030, 0, 1, 0, 0));
  });

  it('returns date of start of decade - 1', () => {
    expect(getStartOfDecade(new Date(2025, 1, 1, 23, 59), -1)).to.equalTime(new Date(2010, 0, 1, 0, 0));
  });
});

describe('getEndOfMinutes, getEndOfHours, getEndOfDay, getEndOfWeek, getEndOfMonth, getEndOfYear, getEndOfDecade', () => {
  it('returns date of end of minute', () => {
    expect(getEndOfMinutes(new Date(2025, 1, 1, 22, 30, 30))).to.equalTime(new Date(2025, 1, 1, 22, 30, 59, 999));
  });

  it('returns date of end of minute + 1', () => {
    expect(getEndOfMinutes(new Date(2025, 1, 1, 23, 30), 1)).to.equalTime(new Date(2025, 1, 1, 23, 31, 59, 999));
  });

  it('returns date of end of minute - 1', () => {
    expect(getEndOfMinutes(new Date(2025, 1, 1, 23, 30), -1)).to.equalTime(new Date(2025, 1, 1, 23, 29, 59, 999));
  });

  it('returns date of end of hour', () => {
    expect(getEndOfHours(new Date(2025, 1, 1, 22, 30))).to.equalTime(new Date(2025, 1, 1, 22, 59, 59, 999));
  });

  it('returns date of end of hour + 1', () => {
    expect(getEndOfHours(new Date(2025, 1, 1, 23, 30), 1)).to.equalTime(new Date(2025, 1, 2, 0, 59, 59, 999));
  });

  it('returns date of end of hour - 1', () => {
    expect(getEndOfHours(new Date(2025, 1, 1, 23, 30), -1)).to.equalTime(new Date(2025, 1, 1, 22, 59, 59, 999));
  });

  it('returns date of end of day', () => {
    const result = getEndOfDay(new Date(2020, 1, 1, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 1, 1, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of day + 1', () => {
    const result = getEndOfDay(new Date(2020, 1, 1, 0, 0), 1);
    expect(result.getTime()).to.equal(new Date(2020, 1, 2, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of day - 1', () => {
    const result = getEndOfDay(new Date(2020, 1, 1, 0, 0), -1);
    expect(result.getTime()).to.equal(new Date(2020, 0, 31, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of week', () => {
    const result = getEndOfWeek(new Date(2020, 0, 1, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 0, 5, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of week when it is already sunday', () => {
    const result = getEndOfWeek(new Date(2020, 7, 9, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 7, 9, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of week + 1', () => {
    const result = getEndOfWeek(new Date(2020, 0, 1, 0, 0), 1);
    expect(result.getTime()).to.equal(new Date(2020, 0, 12, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of week - 1', () => {
    const result = getEndOfWeek(new Date(2020, 0, 1, 0, 0), -1);
    expect(result.getTime()).to.equal(new Date(2019, 11, 29, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of month', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1))).to.equalTime(new Date(2020, 1, 29, 23, 59, 59, 999));
  });

  it('returns date of end of month when current date overflows its month', () => {
    expect(getEndOfMonth(new Date(2020, 2, 31))).to.equalDate(new Date(2020, 2, 31, 23, 59, 59, 999));
  });

  it('returns date of end of month + 1', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1), 1)).to.equalTime(new Date(2020, 2, 31, 23, 59, 59, 999));
  });

  it('returns date of end of month - 1', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1), -1)).to.equalTime(new Date(2020, 0, 31, 23, 59, 59, 999));
  });

  it('returns date of end of year', () => {
    expect(getEndOfYear(new Date(2020, 1, 1))).to.equalTime(new Date(2020, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of year + 1', () => {
    expect(getEndOfYear(new Date(2020, 1, 1), 1)).to.equalTime(new Date(2021, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of year - 1', () => {
    expect(getEndOfYear(new Date(2020, 1, 1), -1)).to.equalTime(new Date(2019, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of decade', () => {
    expect(getEndOfDecade(new Date(2025, 1, 1))).to.equalTime(new Date(2029, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of decade + 1', () => {
    expect(getEndOfDecade(new Date(2025, 1, 1), 1)).to.equalTime(new Date(2039, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of decade - 1', () => {
    expect(getEndOfDecade(new Date(2025, 1, 1), -1)).to.equalTime(new Date(2019, 11, 31, 23, 59, 59, 999));
  });
});

describe('getRelativeDate', () => {
  it('returns interval string for less than a minute', () => {
    expect(getRelativeDate(new Date())).to.equal('меньше минуты');
  });

  it('returns interval string for 1 minute', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 1);

    expect(getRelativeDate(date)).to.equal('минуту');
  });

  it('returns interval string for 2 minutes', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 2);

    expect(getRelativeDate(date)).to.equal('2 минуты');
  });

  it('returns interval string for 22 minutes', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 22);

    expect(getRelativeDate(date)).to.equal('22 минуты');
  });

  it('returns interval string for 5 minutes', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 5);

    expect(getRelativeDate(date)).to.equal('5 минут');
  });

  it('returns interval string for 1 hour', () => {
    const date = new Date();
    date.setHours(date.getHours() - 1);

    expect(getRelativeDate(date)).to.equal('час');
  });

  it('returns interval string for 2 hours', () => {
    const date = new Date();
    date.setHours(date.getHours() - 2);

    expect(getRelativeDate(date)).to.equal('2 часа');
  });

  it('returns interval string for 5 hours', () => {
    const date = new Date();
    date.setHours(date.getHours() - 5);

    expect(getRelativeDate(date)).to.equal('5 часов');
  });

  it('returns interval string for 1 day', () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);

    expect(getRelativeDate(date)).to.equal('день');
  });

  it('returns interval string for 2 days', () => {
    const date = new Date();
    date.setDate(date.getDate() - 2);

    expect(getRelativeDate(date)).to.equal('2 дня');
  });

  it('returns interval string for 5 days', () => {
    const date = new Date();
    date.setDate(date.getDate() - 5);

    expect(getRelativeDate(date)).to.equal('5 дней');
  });

  it('returns interval string for 1 month', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);

    expect(getRelativeDate(date)).to.equal('месяц');
  });

  it('returns interval string for 2 months', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 2);

    expect(getRelativeDate(date)).to.equal('2 месяца');
  });

  it('returns interval string for 5 months', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 5);

    expect(getRelativeDate(date)).to.equal('5 месяцев');
  });

  it('returns interval string for 1 year', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);

    expect(getRelativeDate(date)).to.equal('год');
  });

  it('returns interval string for 2 years', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 2);

    expect(getRelativeDate(date)).to.equal('2 года');
  });

  it('returns interval string for 5 years', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 5);

    expect(getRelativeDate(date)).to.equal('5 лет');
  });
});

describe('getUtcOffset', () => {
  it('returns UTC offset in hours', () => {
    expect(getUtcOffset(new Date(2020, 0, 1))).to.equal(+localUTCOffset);
  });
});

describe('getUnixTimestamp', () => {
  it('returns unix timestamp from Date instance', () => {
    expect(getUnixTimestamp(new Date(2020, 0, 1))).to.equal(newYear2020UnixTime);
  });

  it('returns unix timestamp from timestamp in ms', () => {
    expect(getUnixTimestamp(newYear2020UnixTime * 1e3)).to.equal(newYear2020UnixTime);
  });

  it('returns unix timestamp from timestamp in s', () => {
    expect(getUnixTimestamp(newYear2020UnixTime)).to.equal(newYear2020UnixTime);
  });

  it('returns current unix timestamp if nothing passed', () => {
    expect(getUnixTimestamp()).to.equal(Math.floor(new Date().getTime() / 1000));
  });
});

describe('getTimezoneName', () => {
  it('returns name of the current timezone', () => {
    expect(getTimezoneName()).to.equal(Intl.DateTimeFormat().resolvedOptions().timeZone);
  });
});

describe('isTimeValid', () => {
  it('passes correct time string formatted as \'H:mm\'', () => {
    expect(isTimeValid('1:30', 'H:mm')).to.equal(true);
  });

  it('does not pass incorrect time string formatted as \'H:mm\'', () => {
    expect(isTimeValid('100:30', 'H:mm')).to.equal(false);
  });

  it('passes correct time string formatted as \'HH:mm\'', () => {
    expect(isTimeValid('22:30', 'HH:mm')).to.equal(true);
  });

  it('does not pass incorrect time string formatted as \'HH:mm\'', () => {
    expect(isTimeValid('25:30', 'HH:mm')).to.equal(false);
  });

  it('does not pass incorrect time string formatted as \'HH:mm:ss\'', () => {
    expect(isTimeValid('25:30:80', 'HH:mm:ss')).to.equal(false);
  });

  it('does not pass empty string as a time string', () => {
    expect(isTimeValid('', 'HH:mm:ss')).to.equal(false);
  });
});

describe('parseDate', () => {
  it('throws when empty value is passed', () => {
    expect(() => parseDate('', '')).to.throw('Empty value');
  });

  it('throws when format has more parts than value', () => {
    expect(() => parseDate('2000-01', 'YYYY-MM-DD')).to.throw('Format doesn\'t match value: YYYY-MM-DD, 2000-01');
  });

  it('parses the string formatted as \'YYYY-MM-DD\'', () => {
    expect(parseDate('2000-01-01', 'YYYY-MM-DD')).to.equalTime(new Date(2000, 0, 1));
  });

  it('parses the string formatted as \'DD.MM.YYYY\'', () => {
    expect(parseDate('31.12.2019', 'DD.MM.YYYY')).to.equalTime(new Date(2019, 11, 31));
  });

  it('parses the string formatted as \'D.MM.YYYY\'', () => {
    expect(parseDate('1.12.2019', 'D.MM.YYYY')).to.equalTime(new Date(2019, 11, 1));
  });

  it('parses the string formatted as \'DD.MM.YY\'', () => {
    expect(parseDate('01.01.01', 'DD.MM.YY')).to.equalTime(new Date(2001, 0, 1));
  });

  it('parses the string formatted as \'DD.MM.YY\' where YY is from 20th century', () => {
    expect(parseDate('01.01.99', 'DD.MM.YY')).to.equalTime(new Date(1999, 0, 1));
  });

  it('throws when string formatted as \'D.MM.YYYY\' does not contain valid date', () => {
    expect(() => parseDate('1.120.2019', 'D.MM.YYYY')).to.throw('Invalid value: 1.120.2019');
  });

  it('throws when string formatted as \'DD.MM.YYYY\' does not contain valid date', () => {
    expect(() => parseDate('99.99.2019', 'D.MM.YYYY')).to.throw('Invalid value: 99.99.2019');
  });

  it('throws when unknown format item is passed', () => {
    expect(() => parseDate('01.01.2019', 'AA.MM.YYYY')).to.throw('Unknown format item: AA');
  });

  it('returns parse the string formatted as ISO 8601 but w/o explicit format set', () => {
    expect(parseDate(`2020-01-01T00:00:00+${localUTCOffset}:00`)).to.equalTime(new Date(2020, 0, 1));
  });

  it('throws when string is not formatted as ISO 8601 and the format is not passed', () => {
    expect(() => parseDate('1.120.2019')).to.throw('Invalid date value: 1.120.2019');
  });
});
