import { describe, it } from 'mocha';

require('chai').use(require('chai-datetime'));

const expect = require('chai').expect;

const {
  setDefaultOptions,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
  subMinutes,
  subHours,
  subDays,
  subMonths,
  subYears,
  format,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  fromUnixTime,
  getUnixTime,
  getHours,
  getMinutes,
  getDate,
  getWeek,
  getMonth,
  getYear,
  intervalToDuration,
  isSameMinute,
  isSameHour,
  isSameDay,
  isSameMonth,
  isSameYear,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  startOfMinute,
  startOfHour,
  startOfDay,
  startOfWeek,
  addWeeks,
  subWeeks,
  startOfMonth,
  startOfYear,
  startOfDecade,
  endOfMinute,
  endOfHour,
  endOfDay,
  endOfWeek,
  endOfMonth,
  endOfYear,
  endOfDecade,
  parse,
  parseISO,
  isMatch,
  millisecondsToHours,
} = require('date-fns');
const { ru } = require('date-fns/locale');
const { getTimezoneOffset } = require('date-fns-tz');

const { getUtcOffset } = require('../lib');

setDefaultOptions({ locale: ru });

const newYear2020UnixTime = new Date(2020, 0, 1).getTime() / 1e3;
const newYear2020Time = new Date(2020, 0, 1).getTime();
const localUTCOffset = `0${Math.abs(getUtcOffset(new Date(2020, 0, 1)))}`.slice(-2);

describe('addMinutes, addHours, addDays, addMonths, addYears', () => {
  it('adds 1 minute', () => {
    expect(addMinutes(newYear2020Time, 1)).to.equalTime(new Date(2020, 0, 1, 0, 1));
  });

  it('adds 1 hour', () => {
    expect(addHours(newYear2020Time, 1)).to.equalTime(new Date(2020, 0, 1, 1));
  });

  it('adds 1 day', () => {
    expect(addDays(newYear2020Time, 1)).to.equalTime(new Date(2020, 0, 2));
  });

  it('adds 1 month', () => {
    expect(addMonths(newYear2020Time, 1)).to.equalTime(new Date(2020, 1, 1));
  });

  it.skip('adds 1 month to the end of the month w/ overflowing', () => {
    expect(addMonths(new Date(2020, 0, 31), 1)).to.equalTime(new Date(2020, 2, 2));
  });

  it('adds 1 month to the end of the month w/o overflowing', () => {
    expect(addMonths(new Date(2020, 0, 31), 1)).to.equalTime(new Date(2020, 1, 29));
    expect(addMonths(new Date(2020, 1, 28), 1)).to.equalTime(new Date(2020, 2, 28));
  });

  it('adds 1 year', () => {
    expect(addYears(newYear2020Time, 1)).to.equalTime(new Date(2021, 0, 1));
  });
});

describe('subtractMinutes, subtractHours, subtractDays, subtractMonths, subtractYears', () => {
  it('subtracts 1 minute', () => {
    expect(subMinutes(newYear2020Time, 1)).to.equalTime(new Date(2019, 11, 31, 23, 59));
  });

  it('subtracts 1 hour', () => {
    expect(subHours(newYear2020Time, 1)).to.equalTime(new Date(2019, 11, 31, 23));
  });

  it('subtracts 1 day', () => {
    expect(subDays(newYear2020Time, 1)).to.equalTime(new Date(2019, 11, 31));
  });

  it('subtracts 1 month', () => {
    expect(subMonths(newYear2020Time, 1)).to.equalTime(new Date(2019, 11, 1));
  });

  it.skip('subtracts 1 month from the end of the month w/ overflowing', () => {
    expect(subMonths(new Date(2020, 2, 31), 1)).to.equalTime(new Date(2020, 2, 2));
  });

  it('subtracts 1 month from the end of the month w/o overflowing', () => {
    expect(subMonths(new Date(2020, 2, 31), 1)).to.equalTime(new Date(2020, 1, 29));
    expect(subMonths(new Date(2020, 1, 29), 1)).to.equalTime(new Date(2020, 0, 29));
  });

  it('subtracts 1 year', () => {
    expect(subYears(newYear2020Time, 1)).to.equalTime(new Date(2019, 0, 1));
  });
});

describe('formatDate', () => {
  it('formats unix timestamp to \'HH:mm:ss\'', () => {
    expect(format(fromUnixTime(newYear2020UnixTime), 'HH:mm:ss')).to.equal('00:00:00');
  });

  it('formats unix timestamp to \'DD.MM.YYYY\'', () => {
    expect(format(fromUnixTime(newYear2020UnixTime), 'dd.MM.yyyy')).to.equal('01.01.2020');
  });

  it('formats unix timestamp to \'D MMM YYYY\'', () => {
    expect(format(fromUnixTime(newYear2020UnixTime), 'd MMM yyyy')).to.equal('1 янв. 2020');
  });

  it('formats Date instance to \'YYYY-MM-DD\'', () => {
    expect(format(new Date(2020, 0, 1), 'yyyy-MM-dd')).to.equal('2020-01-01');
  });

  it('formats Date instance to \'YYYY-MM-DDTHH:mm:ssZ\'', () => {
    const formattedDateRegexp = new RegExp(`^2020-01-01T00:00:00[+-]${localUTCOffset}:00$`);
    expect(format(new Date(2020, 0, 1), 'yyyy-MM-dd\'T\'HH:mm:ssxxx')).to.match(formattedDateRegexp);
  });

  it('formats Date instance to \'YYYY-MM-DDTHH:mm:ssZZ\'', () => {
    const formattedDateRegexp = new RegExp(`^2020-01-01T00:00:00[+-]${localUTCOffset}00$`);
    expect(format(new Date(2020, 0, 1), 'yyyy-MM-dd\'T\'HH:mm:ssxx')).to.match(formattedDateRegexp);
  });

  it('formats Date instance to \'dddd, DD.MM.YYYY в HH:mm:ss\'', () => {
    expect(format(new Date(2020, 0, 1), 'EEEE, dd.MM.yyyy в HH:mm:ss')).to.equal('среда, 01.01.2020 в 00:00:00');
  });

  it('formats Date instance of midnight to \'HH\' as 00', () => {
    expect(format(new Date(2020, 0, 1, 0), 'HH')).to.equal('00');
  });

  it('formats Date instance of midday to \'HH\' as 12', () => {
    expect(format(new Date(2020, 0, 1, 12), 'HH')).to.equal('12');
  });
});

describe('formatTimeString', () => {
  it('returns string formatted as \'HH:mm:ss\'', () => {
    expect(format(parse('1:30', 'H:mm', new Date()), 'HH:mm:ss')).to.equal('01:30:00');
  });

  it('returns string formatted as \'H:mm:ss\'', () => {
    expect(format(parse('1:30', 'H:mm', new Date()), 'H:mm:ss')).to.equal('1:30:00');
  });

  it('returns string formatted as \'mm:ss\'', () => {
    expect(format(parse('11:30', 'mm:ss', new Date(2020, 0, 1)), 'HH:mm:ss')).to.equal('00:11:30');
  });

  it('returns 00 hours string formatted as \'HH:mm:ss\'', () => {
    expect(format(parse('00', 'HH', new Date()), 'HH:mm:ss')).to.equal('00:00:00');
  });

  it('returns 00 minutes string formatted as \'HH:mm:ss\'', () => {
    expect(format(parse('00', 'mm', new Date(2020, 0, 1)), 'HH:mm:ss')).to.equal('00:00:00');
  });

  it('returns 00 seconds string formatted as \'HH:mm:ss\'', () => {
    expect(format(parse('00', 'ss', new Date(2020, 0, 1)), 'HH:mm:ss')).to.equal('00:00:00');
  });

  it.skip('throws an error when get invalid time', () => {
    // expect(() => formatTimeString('33:30', 'HH:mm', 'HH:mm:ss')).to.throw('Invalid value: 33:30');
  });

  it.skip('throws an error when get empty string as value', () => {
    // expect(() => formatTimeString('', 'HH', 'HH:mm:ss')).to.throw('Empty value');
  });

  it.skip('throws an error when get empty string as format', () => {
    // expect(() => formatTimeString('00', '', 'HH:mm:ss')).to.throw('Empty format');
  });

  it.skip('throws an error when format does not match time', () => {
    // expect(() => formatTimeString('00', 'HH:mm:ss', 'HH:mm:ss')).to.throw('Format doesn\'t match time: HH:mm:ss, 00');
  });
});

describe('getMinutes, getHours, getDay, getWeek, getMonth, getYear', () => {
  it('returns minute of unix timestamp', () => {
    expect(getMinutes(newYear2020Time)).to.equal(0);
  });

  it('returns hour of unix timestamp', () => {
    expect(getHours(newYear2020Time)).to.equal(0);
  });

  it('returns day of unix timestamp', () => {
    expect(getDate(newYear2020Time)).to.equal(1);
  });

  it('returns week for 31.12.2019', () => {
    expect(getWeek(new Date(2019, 11, 31))).to.equal(1);
    expect(getWeek(new Date(2019, 11, 31), { firstWeekContainsDate: 6 })).to.equal(53);
  });

  it('returns week for 01.01.2020', () => {
    expect(getWeek(new Date(2020, 0, 1))).to.equal(1);
    expect(getWeek(new Date(2020, 0, 1), { firstWeekContainsDate: 6 })).to.equal(53);
  });

  it('returns week for 05.02.2020', () => {
    expect(getWeek(new Date(2020, 1, 5))).to.equal(6);
  });

  it('returns month of unix timestamp', () => {
    expect(getMonth(newYear2020Time)).to.equal(0);
  });

  it('returns year of unix timestamp', () => {
    expect(getYear(newYear2020Time)).to.equal(2020);
  });
});

describe('getWeekdayName, getMonthName', () => {
  it('returns weekday name in short format', () => {
    expect(format(newYear2020Time, 'EEEEEE')).to.eql('ср');
  });

  it('returns weekday name in long format', () => {
    expect(format(newYear2020Time, 'EEEE')).to.eql('среда');
  });

  // it('returns weekday name in long format by default', () => {
  //   expect(getWeekdayName(newYear2020UnixTime)).to.eql('среда');
  // });

  it('returns month name in short format', () => {
    expect(format(newYear2020Time, 'LLL')).to.eql('янв.');
  });

  it('returns month name in long format', () => {
    expect(format(newYear2020Time, 'LLLL')).to.eql('январь');
  });

  // it('returns month name in long format by default', () => {
  //   expect(getMonthName(newYear2020UnixTime)).to.eql('январь');
  // });
});

describe('getDuration', () => {
  it('returns duration as days, hours and minutes', () => {
    expect(intervalToDuration({ start: 0, end: 1000000 * 1000 })).to.deep.equal({ years: 0, months: 0, days: 11, hours: 13, minutes: 46, seconds: 40 });
  });

  it('returns duration as hours and minutes', () => {
    expect(intervalToDuration({ start: 0, end: 10000 * 1000 })).to.deep.equal({ years: 0, months: 0, days: 0, hours: 2, minutes: 46, seconds: 40 });
  });

  it('returns duration as minutes', () => {
    expect(intervalToDuration({ start: 0, end: 1000 * 1000 })).to.deep.equal({ years: 0, months: 0, days: 0, hours: 0, minutes: 16, seconds: 40 });
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

describe('getDiffInMinutes, getDiffInHours, getDiffInDays, getDiffInMonths, getDiffInYears', () => {
  it('returns diff in minutes', () => {
    expect(differenceInMinutes(new Date(2020, 0, 1), new Date(2020, 0, 1, 1))).to.equal(-60);
  });

  it('returns diff in minutes of two unix timestamps', () => {
    expect(differenceInMinutes(1572348594627, 1572348283627)).to.equal(5);
  });

  it('returns diff in minutes of different days', () => {
    expect(differenceInMinutes(new Date(2020, 0, 1), new Date(2020, 0, 2, 1))).to.equal(-(60 * 25));
  });

  it('returns 0 when diff in minutes in [0; 1)', () => {
    expect(differenceInMinutes(new Date(2020, 0, 1, 0, 0, 59), new Date(2020, 0, 1, 0, 0, 0))).to.equal(0);
  });

  it('returns 0 when diff in minutes in (-1; 0]', () => {
    expect(differenceInMinutes(new Date(2020, 0, 1, 0, 0, 0), new Date(2020, 0, 1, 0, 0, 59))).to.equal(0);
  });

  it('returns diff in hours', () => {
    expect(differenceInHours(new Date(2020, 0, 1, 5), new Date(2020, 0, 1))).to.equal(5);
  });

  it('returns diff in hours of different days', () => {
    expect(differenceInHours(new Date(2020, 0, 2, 5), new Date(2020, 0, 1))).to.equal(29);
  });

  it('returns 0 when diff in hours in [0; 1)', () => {
    expect(differenceInHours(new Date(2020, 0, 1, 0, 59), new Date(2020, 0, 1, 0, 0))).to.equal(0);
  });

  it('returns 0 when diff in hours in (-1; 0]', () => {
    expect(differenceInHours(new Date(2020, 0, 1, 0, 0), new Date(2020, 0, 1, 0, 59))).to.equal(0);
  });

  it('returns diff in days of two unix timestamps', () => {
    expect(differenceInDays(1572348594627, 1572248594627)).to.equal(1);
  });

  it('returns diff in days of different years', () => {
    expect(differenceInDays(new Date(2019, 0, 1), new Date(2020, 0, 5))).to.equal(-369);
  });

  it('returns 0 when diff in days in [0; 1)', () => {
    expect(differenceInDays(new Date(2020, 0, 1, 23), new Date(2020, 0, 1, 0))).to.equal(0);
  });

  it('returns 0 when diff in days in (-1; 0]', () => {
    expect(differenceInDays(new Date(2020, 0, 1, 0), new Date(2020, 0, 1, 23))).to.equal(0);
  });

  it('returns diff in months', () => {
    expect(differenceInMonths(new Date(2020, 0, 1), new Date(2020, 4, 1))).to.equal(-4);
  });

  it('returns diff in months of different years', () => {
    expect(differenceInMonths(new Date(2019, 0, 1), new Date(2020, 4, 1))).to.equal(-16);
  });

  it('returns diff in years', () => {
    expect(differenceInYears(new Date(2020, 0, 1), new Date(2019, 0, 1))).to.equal(1);
  });

  it('returns diff in years in days', () => {
    expect(differenceInDays(new Date(2020, 0, 1), new Date(2020, 0, 5))).to.equal(-4);
  });
});

describe('getStartOfMinutes, getStartOfHours, getStartOfDay, getStartOfWeek, getStartOfMonth, getStartOfYear, getStartOfDecade', () => {
  it('returns date of start of minutes', () => {
    expect(startOfMinute(new Date(2020, 1, 1, 23, 59, 30))).to.equalTime(new Date(2020, 1, 1, 23, 59, 0));
  });

  it('returns date of start of minutes + 1', () => {
    expect(startOfMinute(addMinutes(new Date(2020, 1, 1, 23, 59, 30), 1))).to.equalTime(new Date(2020, 1, 2, 0, 0, 0));
  });

  it('returns date of start of minutes - 1', () => {
    expect(startOfMinute(subMinutes(new Date(2020, 1, 1, 23, 59, 30), 1))).to.equalTime(new Date(2020, 1, 1, 23, 58, 0));
  });

  it('returns date of start of hours', () => {
    expect(startOfHour(new Date(2020, 1, 1, 23, 59))).to.equalTime(new Date(2020, 1, 1, 23, 0));
  });

  it('returns date of start of hours + 1', () => {
    expect(startOfHour(addHours(new Date(2020, 1, 1, 23, 59), 1))).to.equalTime(new Date(2020, 1, 2, 0, 0));
  });

  it('returns date of start of hours - 1', () => {
    expect(startOfHour(subHours(new Date(2020, 1, 1, 23, 59), 1))).to.equalTime(new Date(2020, 1, 1, 22, 0));
  });

  it('returns date of start of day', () => {
    const result = startOfDay(new Date(2020, 2, 2, 23, 59));
    expect(result.getTime()).to.equal(new Date(2020, 2, 2, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of day + 1', () => {
    const result = startOfDay(addDays(new Date(2020, 2, 2, 23, 59), 1));
    expect(result.getTime()).to.equal(new Date(2020, 2, 3, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of day - 1', () => {
    const result = startOfDay(subDays(new Date(2020, 2, 2, 23, 59), 1));
    expect(result.getTime()).to.equal(new Date(2020, 2, 1, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week', () => {
    const result = startOfWeek(new Date(2020, 0, 1));
    expect(result.getTime()).to.equal(new Date(2019, 11, 30, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week when it is already monday', () => {
    const result = startOfWeek(new Date(2020, 7, 10, 1, 0));
    expect(result.getTime()).to.equal(new Date(2020, 7, 10, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week when it is sunday', () => {
    const result = startOfWeek(new Date(2020, 7, 9, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 7, 3, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week + 1', () => {
    const result = startOfWeek(addWeeks(new Date(2020, 0, 1), 1));
    expect(result.getTime()).to.equal(new Date(2020, 0, 6, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of week - 1', () => {
    const result = startOfWeek(subWeeks(new Date(2020, 0, 1), 1));
    expect(result.getTime()).to.equal(new Date(2019, 11, 23, 0, 0, 0, 0).getTime());
  });

  it('returns date of start of month', () => {
    expect(startOfMonth(new Date(2020, 2, 2, 23, 59))).to.equalTime(new Date(2020, 2, 1, 0, 0));
  });

  it('returns date of start of month + 1', () => {
    expect(startOfMonth(addMonths(new Date(2020, 2, 2, 23, 59), 1))).to.equalTime(new Date(2020, 3, 1, 0, 0));
  });

  it('returns date of start of month - 1', () => {
    expect(startOfMonth(subMonths(new Date(2020, 2, 2, 23, 59), 1))).to.equalTime(new Date(2020, 1, 1, 0, 0));
  });

  it('returns date of start of year', () => {
    expect(startOfYear(new Date(2020, 1, 1, 23, 59))).to.equalTime(new Date(2020, 0, 1, 0, 0));
  });

  it('returns date of start of year + 1', () => {
    expect(startOfYear(addYears(new Date(2020, 1, 1, 23, 59), 1))).to.equalTime(new Date(2021, 0, 1, 0, 0));
  });

  it('returns date of start of year - 1', () => {
    expect(startOfYear(subYears(new Date(2020, 1, 1, 23, 59), 1))).to.equalTime(new Date(2019, 0, 1, 0, 0));
  });

  it('returns date of start of decade', () => {
    expect(startOfDecade(new Date(2025, 1, 1, 23, 59))).to.equalTime(new Date(2020, 0, 1, 0, 0));
  });

  it('returns date of start of decade + 1', () => {
    expect(startOfDecade(addYears(new Date(2025, 1, 1, 23, 59), 10))).to.equalTime(new Date(2030, 0, 1, 0, 0));
  });

  it('returns date of start of decade - 1', () => {
    expect(startOfDecade(subYears(new Date(2025, 1, 1, 23, 59), 10))).to.equalTime(new Date(2010, 0, 1, 0, 0));
  });
});

describe('getEndOfMinutes, getEndOfHours, getEndOfDay, getEndOfWeek, getEndOfMonth, getEndOfYear, getEndOfDecade', () => {
  it('returns date of end of minute', () => {
    expect(endOfMinute(new Date(2025, 1, 1, 22, 30, 30))).to.equalTime(new Date(2025, 1, 1, 22, 30, 59, 999));
  });

  it('returns date of end of minute + 1', () => {
    expect(endOfMinute(addMinutes(new Date(2025, 1, 1, 23, 30), 1))).to.equalTime(new Date(2025, 1, 1, 23, 31, 59, 999));
  });

  it('returns date of end of minute - 1', () => {
    expect(endOfMinute(subMinutes(new Date(2025, 1, 1, 23, 30), 1))).to.equalTime(new Date(2025, 1, 1, 23, 29, 59, 999));
  });

  it('returns date of end of hour', () => {
    expect(endOfHour(new Date(2025, 1, 1, 22, 30))).to.equalTime(new Date(2025, 1, 1, 22, 59, 59, 999));
  });

  it('returns date of end of hour + 1', () => {
    expect(endOfHour(addHours(new Date(2025, 1, 1, 23, 30), 1))).to.equalTime(new Date(2025, 1, 2, 0, 59, 59, 999));
  });

  it('returns date of end of hour - 1', () => {
    expect(endOfHour(subHours(new Date(2025, 1, 1, 23, 30), 1))).to.equalTime(new Date(2025, 1, 1, 22, 59, 59, 999));
  });

  it('returns date of end of day', () => {
    const result = endOfDay(new Date(2020, 1, 1, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 1, 1, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of day + 1', () => {
    const result = endOfDay(addDays(new Date(2020, 1, 1, 0, 0), 1));
    expect(result.getTime()).to.equal(new Date(2020, 1, 2, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of day - 1', () => {
    const result = endOfDay(subDays(new Date(2020, 1, 1, 0, 0), 1));
    expect(result.getTime()).to.equal(new Date(2020, 0, 31, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of week', () => {
    const result = endOfWeek(new Date(2020, 0, 1, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 0, 5, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of week when it is already sunday', () => {
    const result = endOfWeek(new Date(2020, 7, 9, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 7, 9, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of week + 1', () => {
    const result = endOfWeek(addWeeks(new Date(2020, 0, 1, 0, 0), 1));
    expect(result.getTime()).to.equal(new Date(2020, 0, 12, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of week - 1', () => {
    const result = endOfWeek(subWeeks(new Date(2020, 0, 1, 0, 0), 1));
    expect(result.getTime()).to.equal(new Date(2019, 11, 29, 23, 59, 59, 999).getTime());
  });

  it('returns date of end of month', () => {
    expect(endOfMonth(new Date(2020, 1, 1))).to.equalTime(new Date(2020, 1, 29, 23, 59, 59, 999));
  });

  it('returns date of end of month when current date overflows its month', () => {
    expect(endOfMonth(new Date(2020, 2, 31))).to.equalDate(new Date(2020, 2, 31, 23, 59, 59, 999));
  });

  it('returns date of end of month + 1', () => {
    expect(endOfMonth(addMonths(new Date(2020, 1, 1), 1))).to.equalTime(new Date(2020, 2, 31, 23, 59, 59, 999));
  });

  it('returns date of end of month - 1', () => {
    expect(endOfMonth(subMonths(new Date(2020, 1, 1), 1))).to.equalTime(new Date(2020, 0, 31, 23, 59, 59, 999));
  });

  it('returns date of end of year', () => {
    expect(endOfYear(new Date(2020, 1, 1))).to.equalTime(new Date(2020, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of year + 1', () => {
    expect(endOfYear(addYears(new Date(2020, 1, 1), 1))).to.equalTime(new Date(2021, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of year - 1', () => {
    expect(endOfYear(subYears(new Date(2020, 1, 1), 1))).to.equalTime(new Date(2019, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of decade', () => {
    expect(endOfDecade(new Date(2025, 1, 1))).to.equalTime(new Date(2029, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of decade + 1', () => {
    expect(endOfDecade(addYears(new Date(2025, 1, 1), 10))).to.equalTime(new Date(2039, 11, 31, 23, 59, 59, 999));
  });

  it('returns date of end of decade - 1', () => {
    expect(endOfDecade(subYears(new Date(2025, 1, 1), 10))).to.equalTime(new Date(2019, 11, 31, 23, 59, 59, 999));
  });
});

describe('getRelativeDate', () => {
  it('returns interval string for less than a minute', () => {
    expect(formatDistanceToNow(new Date())).to.equal('меньше минуты');
  });

  it('returns interval string for 1 minute', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 1);

    expect(formatDistanceToNow(date)).to.equal('1 минута');
  });

  it('returns interval string for 2 minutes', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 2);

    expect(formatDistanceToNow(date)).to.equal('2 минуты');
  });

  it('returns interval string for 22 minutes', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 22);

    expect(formatDistanceToNow(date)).to.equal('22 минуты');
  });

  it('returns interval string for 5 minutes', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 5);

    expect(formatDistanceToNow(date)).to.equal('5 минут');
  });

  it('returns interval string for 1 hour', () => {
    const date = new Date();
    date.setHours(date.getHours() - 1);

    expect(formatDistanceToNow(date)).to.equal('около 1 часа');
    expect(formatDistanceToNowStrict(date)).to.equal('1 час');
  });

  it('returns interval string for 2 hours', () => {
    const date = new Date();
    date.setHours(date.getHours() - 2);

    expect(formatDistanceToNowStrict(date)).to.equal('2 часа');
  });

  it('returns interval string for 5 hours', () => {
    const date = new Date();
    date.setHours(date.getHours() - 5);

    expect(formatDistanceToNowStrict(date)).to.equal('5 часов');
  });

  it('returns interval string for 1 day', () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);

    expect(formatDistanceToNow(date)).to.equal('1 день');
  });

  it('returns interval string for 2 days', () => {
    const date = new Date();
    date.setDate(date.getDate() - 2);

    expect(formatDistanceToNow(date)).to.equal('2 дня');
  });

  it('returns interval string for 5 days', () => {
    const date = new Date();
    date.setDate(date.getDate() - 5);

    expect(formatDistanceToNow(date)).to.equal('5 дней');
  });

  it('returns interval string for 1 month', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);

    expect(formatDistanceToNow(date)).to.equal('около 1 месяца');
    expect(formatDistanceToNowStrict(date)).to.equal('1 месяц');
  });

  it('returns interval string for 2 months', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 2);

    expect(formatDistanceToNowStrict(date)).to.equal('2 месяца');
  });

  it('returns interval string for 5 months', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 5);

    expect(formatDistanceToNowStrict(date)).to.equal('5 месяцев');
  });

  it('returns interval string for 1 year', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);

    expect(formatDistanceToNow(date)).to.equal('около 1 года');
    expect(formatDistanceToNowStrict(date)).to.equal('1 год');
  });

  it('returns interval string for 2 years', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 2);

    expect(formatDistanceToNowStrict(date)).to.equal('2 года');
  });

  it('returns interval string for 5 years', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 5);

    expect(formatDistanceToNowStrict(date)).to.equal('5 лет');
  });
});

describe('getUtcOffset', () => {
  it('returns UTC offset in hours', () => {
    const timezone = format(new Date(), 'xxx');
    expect(millisecondsToHours(getTimezoneOffset(timezone))).to.equal(+localUTCOffset);
  });
});

describe('getUnixTimestamp', () => {
  it('returns unix timestamp from Date instance', () => {
    expect(getUnixTime(new Date(2020, 0, 1))).to.equal(newYear2020UnixTime);
  });

  it('returns unix timestamp from timestamp in ms', () => {
    expect(getUnixTime(newYear2020UnixTime * 1e3)).to.equal(newYear2020UnixTime);
  });

  it.skip('returns unix timestamp from timestamp in s', () => {
    // AssertionError: expected 1577811 to equal 1577811600
    expect(getUnixTime(newYear2020UnixTime)).to.equal(newYear2020UnixTime);
  });

  it.skip('returns current unix timestamp if nothing passed', () => {
    // expect(getUnixTimestamp()).to.equal(Math.floor(new Date().getTime() / 1000));
  });
});

describe('getTimezoneName', () => {
  it.skip('returns name of the current timezone', () => {
    // expect(getTimezoneName()).to.equal(Intl.DateTimeFormat().resolvedOptions().timeZone);
  });
});

describe('isTimeValid', () => {
  it('passes correct time string formatted as \'H:mm\'', () => {
    expect(isMatch('1:30', 'H:mm')).to.equal(true);
  });

  it('does not pass incorrect time string formatted as \'H:mm\'', () => {
    expect(isMatch('100:30', 'H:mm')).to.equal(false);
  });

  it('passes correct time string formatted as \'HH:mm\'', () => {
    expect(isMatch('22:30', 'HH:mm')).to.equal(true);
  });

  it('does not pass incorrect time string formatted as \'HH:mm\'', () => {
    expect(isMatch('25:30', 'HH:mm')).to.equal(false);
  });

  it('does not pass incorrect time string formatted as \'HH:mm:ss\'', () => {
    expect(isMatch('25:30:80', 'HH:mm:ss')).to.equal(false);
  });

  it('does not pass empty string as a time string', () => {
    expect(isMatch('', 'HH:mm:ss')).to.equal(false);
  });
});

describe('parseDate', () => {
  it.skip('throws when empty value is passed', () => {
    // expect(() => parseDate('', '')).to.throw('Empty value');
  });

  it.skip('throws when format has more parts than value', () => {
    // expect(() => parseDate('2000-01', 'YYYY-MM-DD')).to.throw('Format doesn\'t match value: YYYY-MM-DD, 2000-01');
  });

  it('parses the string formatted as \'YYYY-MM-DD\'', () => {
    expect(parse('2000-01-01', 'yyyy-MM-dd', new Date())).to.equalTime(new Date(2000, 0, 1));
  });

  it('parses the string formatted as \'DD.MM.YYYY\'', () => {
    expect(parse('31.12.2019', 'dd.MM.yyyy', new Date())).to.equalTime(new Date(2019, 11, 31));
  });

  it('parses the string formatted as \'D.MM.YYYY\'', () => {
    expect(parse('1.12.2019', 'd.MM.yyyy', new Date())).to.equalTime(new Date(2019, 11, 1));
  });

  it('parses the string formatted as \'DD.MM.YY\'', () => {
    expect(parse('01.01.01', 'dd.MM.yy', new Date())).to.equalTime(new Date(2001, 0, 1));
  });

  it('parses the string formatted as \'DD.MM.YY\' where YY is from 20th century', () => {
    expect(parse('01.01.99', 'dd.MM.yy', new Date())).to.equalTime(new Date(1999, 0, 1));
  });

  it.skip('throws when string formatted as \'D.MM.YYYY\' does not contain valid date', () => {
    // expect(() => parseDate('1.120.2019', 'D.MM.YYYY')).to.throw('Invalid value: 1.120.2019');
  });

  it.skip('throws when string formatted as \'DD.MM.YYYY\' does not contain valid date', () => {
    // expect(() => parseDate('99.99.2019', 'D.MM.YYYY')).to.throw('Invalid value: 99.99.2019');
  });

  it.skip('throws when unknown format item is passed', () => {
    // expect(() => parseDate('01.01.2019', 'AA.MM.YYYY')).to.throw('Unknown format item: AA');
  });

  it('returns parse the string formatted as ISO 8601 but w/o explicit format set', () => {
    expect(parseISO(`2020-01-01T00:00:00+${localUTCOffset}:00`)).to.equalTime(new Date(2020, 0, 1));
  });

  it.skip('throws when string is not formatted as ISO 8601 and the format is not passed', () => {
    // expect(() => parseDate('1.120.2019')).to.throw('Invalid date value: 1.120.2019');
  });
});
