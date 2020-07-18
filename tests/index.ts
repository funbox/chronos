import { describe, it } from 'mocha';

require('chai').use(require('chai-datetime'));

const expect = require('chai').expect;

const {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addYears,
  subtractDays,
  subtractHours,
  subtractMinutes,
  subtractMonths,
  subtractYears,
  formatDate,
  formatTimeString,
  parseDate,
  getDay,
  getHours,
  getMinutes,
  getMonth,
  getYear,
  getDuration,
  isSameDay,
  isSameHour,
  isSameMinute,
  isSameMonth,
  isSameYear,
  getDiffInDays,
  getDiffInHours,
  getDiffInMinutes,
  getDiffInMonths,
  getDiffInYears,
  getStartOfDay,
  getStartOfDecade,
  getStartOfHours,
  getStartOfMinutes,
  getStartOfMonth,
  getStartOfWeek,
  getStartOfYear,
  getEndOfDay,
  getEndOfDecade,
  getEndOfHours,
  getEndOfMinutes,
  getEndOfMonth,
  getEndOfWeek,
  getEndOfYear,
  getRelativeDate,
  getTime,
  getTimezoneName,
  getUtcOffset,
  getWeek,
  isTimeValid,
} = require('../lib');

const newYear2020UnixTime = getTime(new Date(2020, 0, 1));
const localUTCOffset = `0${Math.abs(getUtcOffset(new Date(2020, 0, 1)))}`.slice(-2);

describe('Addition', () => {
  it('should add 1 year', () => {
    expect(addYears(newYear2020UnixTime, 1)).to.equalTime(new Date(2021, 0, 1));
  });

  it('should add 1 month', () => {
    expect(addMonths(newYear2020UnixTime, 1)).to.equalTime(new Date(2020, 1, 1));
  });

  it('should add 1 month to the end of the month', () => {
    expect(addMonths(new Date(2020, 0, 31), 1)).to.equalTime(new Date(2020, 2, 2));
  });

  it('should add 1 day', () => {
    expect(addDays(newYear2020UnixTime, 1)).to.equalTime(new Date(2020, 0, 2));
  });

  it('should add 1 hour', () => {
    expect(addHours(newYear2020UnixTime, 1)).to.equalTime(new Date(2020, 0, 1, 1));
  });

  it('should add 1 minute', () => {
    expect(addMinutes(newYear2020UnixTime, 1)).to.equalTime(new Date(2020, 0, 1, 0, 1));
  });
});

describe('Subtraction', () => {
  it('should subtract 1 year', () => {
    expect(subtractYears(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 0, 1));
  });

  it('should subtract 1 month', () => {
    expect(subtractMonths(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 11, 1));
  });

  it('should subtract 1 month from the end of the month', () => {
    expect(subtractMonths(new Date(2020, 1, 29), 1)).to.equalTime(new Date(2020, 0, 29));
  });

  it('should subtract 1 day', () => {
    expect(subtractDays(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 11, 31));
  });

  it('should subtract 1 hour', () => {
    expect(subtractHours(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 11, 31, 23));
  });

  it('should subtract 1 minute', () => {
    expect(subtractMinutes(newYear2020UnixTime, 1)).to.equalTime(new Date(2019, 11, 31, 23, 59));
  });
});

describe('formatDate', () => {
  it('should format unix timestamp to \'HH:mm:ss\'', () => {
    expect(formatDate(newYear2020UnixTime, 'HH:mm:ss')).to.equal('00:00:00');
  });

  it('should format unix timestamp to \'DD.MM.YYYY\'', () => {
    expect(formatDate(newYear2020UnixTime, 'DD.MM.YYYY')).to.equal('01.01.2020');
  });

  it('should format unix timestamp to \'D MMM YYYY\'', () => {
    expect(formatDate(newYear2020UnixTime, 'D MMM YYYY')).to.equal('1 янв. 2020');
  });

  it('should format Date instance to \'YYYY-MM-DD\'', () => {
    expect(formatDate(new Date(2020, 0, 1), 'YYYY-MM-DD')).to.equal('2020-01-01');
  });

  it('should format Date instance to \'YYYY-MM-DDTHH:mm:ssZ\'', () => {
    expect(formatDate(new Date(2020, 0, 1), 'YYYY-MM-DDTHH:mm:ssZ')).to.equal(`2020-01-01T00:00:00+${localUTCOffset}:00`);
  });
});

describe('parseDate', () => {
  it('should parse the string formatted as \'YYYY-MM-DD\'', () => {
    expect(parseDate('2000-01-01', 'YYYY-MM-DD')).to.equalTime(new Date(2000, 0, 1));
  });

  it('should parse the string formatted as \'DD.MM.YYYY\'', () => {
    expect(parseDate('31.12.2019', 'DD.MM.YYYY')).to.equalTime(new Date(2019, 11, 31));
  });

  it('should parse the string formatted as \'D.MM.YYYY\'', () => {
    expect(parseDate('1.12.2019', 'D.MM.YYYY')).to.equalTime(new Date(2019, 11, 1));
  });

  it('should parse the string formatted as \'DD.MM.YY\'', () => {
    expect(parseDate('01.01.01', 'DD.MM.YY')).to.equalTime(new Date(2001, 0, 1));
  });

  it('should throw when string formatted as \'D.MM.YYYY\' does not contain valid date', () => {
    expect(() => parseDate('1.120.2019', 'D.MM.YYYY')).to.throw('Invalid value: 1.120.2019');
  });

  it('should return parse the string formatted as ISO 8601 but w/o explicit format set', () => {
    expect(parseDate(`2020-01-01T00:00:00+${localUTCOffset}:00`)).to.equalTime(new Date(2020, 0, 1));
  });

  it('should throw when string is not formatted as ISO 8601 and the format is not passed', () => {
    expect(() => parseDate('1.120.2019')).to.throw('Invalid date value: 1.120.2019');
  });
});

describe('formatTime', () => {
  it('should return string formatted as \'HH:mm:ss\'', () => {
    expect(formatTimeString('1:30', 'H:mm', 'HH:mm:ss')).to.equal('01:30:00');
  });

  it('should return string formatted as \'H:mm:ss\'', () => {
    expect(formatTimeString('1:30', 'H:mm', 'H:mm:ss')).to.equal('1:30:00');
  });

  it('should return string formatted as \'mm:ss\'', () => {
    expect(formatTimeString('11:30', 'mm:ss', 'HH:mm:ss')).to.equal('00:11:30');
  });

  it('should throw a formatting error when get invalid time', () => {
    expect(() => formatTimeString('33:30', 'HH:mm', 'HH:mm:ss')).to.throw('Invalid value: 33:30');
  });
});

describe('isTimeValid', () => {
  it('should pass correct time string formatted as \'H:mm\'', () => {
    expect(isTimeValid('1:30', 'H:mm')).to.equal(true);
  });

  it('should not pass incorrect time string formatted as \'H:mm\'', () => {
    expect(isTimeValid('100:30', 'H:mm')).to.equal(false);
  });

  it('should pass correct time string formatted as \'HH:mm\'', () => {
    expect(isTimeValid('22:30', 'HH:mm')).to.equal(true);
  });

  it('should not pass incorrect time string formatted as \'HH:mm\'', () => {
    expect(isTimeValid('25:30', 'HH:mm')).to.equal(false);
  });

  it('should not pass incorrect time string formatted as \'HH:mm:ss\'', () => {
    expect(isTimeValid('25:30:80', 'HH:mm:ss')).to.equal(false);
  });

  it('should not pass empty string as a time string', () => {
    expect(isTimeValid('', 'HH:mm:ss')).to.equal(false);
  });
});

describe('Getting date units', () => {
  it('should return year of unix timestamp', () => {
    expect(getYear(newYear2020UnixTime)).to.equal(2020);
  });

  it('should return month of unix timestamp', () => {
    expect(getMonth(newYear2020UnixTime)).to.equal(0);
  });

  it('should return day of unix timestamp', () => {
    expect(getDay(newYear2020UnixTime)).to.equal(1);
  });

  it('should return hour of unix timestamp', () => {
    expect(getHours(newYear2020UnixTime)).to.equal(0);
  });

  it('should return minute of unix timestamp', () => {
    expect(getMinutes(newYear2020UnixTime)).to.equal(0);
  });
});

describe('getDuration', () => {
  it('should return duration as days, hours and minutes', () => {
    expect(getDuration(1000000)).to.deep.equal({ days: 11, hours: 13, minutes: 46, seconds: 40 });
  });

  it('should return duration as hours and minutes', () => {
    expect(getDuration(10000)).to.deep.equal({ days: 0, hours: 2, minutes: 46,  seconds: 40 });
  });

  it('should return duration as minutes', () => {
    expect(getDuration(1000)).to.deep.equal({ days: 0, hours: 0, minutes: 16, seconds: 40 });
  });
});

describe('Equality checking', () => {
  it('should compare same years', () => {
    expect(isSameYear(new Date(2020, 0, 1), new Date(2020, 0, 2))).to.equal(true);
  });

  it('should compare different years', () => {
    expect(isSameYear(new Date(2020, 0, 1), new Date(2019, 11, 31))).to.equal(false);
  });

  it('should compare same months', () => {
    expect(isSameMonth(new Date(2020, 0, 1), new Date(2020, 0, 2))).to.equal(true);
  });

  it('should compare different months', () => {
    expect(isSameMonth(new Date(2020, 0, 1), new Date(2019, 1, 1))).to.equal(false);
  });

  it('should compare different months of different years', () => {
    expect(isSameMonth(new Date(2020, 0, 1), new Date(2019, 0, 1))).to.equal(false);
  });

  it('should compare same days', () => {
    expect(isSameDay(new Date(2020, 0, 1), new Date(2020, 0, 1, 5))).to.equal(true);
  });

  it('should compare different days', () => {
    expect(isSameDay(new Date(2020, 0, 1), new Date(2019, 0, 2))).to.equal(false);
  });

  it('should compare different days of different years', () => {
    expect(isSameDay(new Date(2020, 0, 1), new Date(2019, 0, 1))).to.equal(false);
  });

  it('should compare same hours', () => {
    expect(isSameHour(new Date(2020, 0, 1, 23), new Date(2020, 0, 1, 23, 50))).to.equal(true);
  });

  it('should compare different hours', () => {
    expect(isSameHour(new Date(2020, 0, 1, 23), new Date(2019, 0, 1, 22))).to.equal(false);
  });

  it('should compare different hours of different years', () => {
    expect(isSameHour(new Date(2020, 0, 1, 23), new Date(2019, 0, 1, 23))).to.equal(false);
  });

  it('should compare same minutes', () => {
    expect(isSameMinute(new Date(2020, 0, 1, 23, 50), new Date(2020, 0, 1, 23, 50, 30))).to.equal(true);
  });

  it('should compare different minutes', () => {
    expect(isSameMinute(new Date(2020, 0, 1, 23, 50), new Date(2019, 0, 1, 23, 51))).to.equal(false);
  });

  it('should compare different minutes of different years', () => {
    expect(isSameMinute(new Date(2020, 0, 1, 23), new Date(2019, 0, 1, 23))).to.equal(false);
  });
});

describe('Getting dates difference', () => {
  it('should return diff in years', () => {
    expect(getDiffInYears(new Date(2020, 0, 1), new Date(2019, 0, 1))).to.equal(1);
  });

  it('should return diff in months', () => {
    expect(getDiffInMonths(new Date(2020, 0, 1), new Date(2020, 4, 1))).to.equal(-4);
  });

  it('should return diff in months of different years', () => {
    expect(getDiffInMonths(new Date(2019, 0, 1), new Date(2020, 4, 1))).to.equal(-16);
  });

  it('should return diff in years in days', () => {
    expect(getDiffInDays(new Date(2020, 0, 1), new Date(2020, 0, 5))).to.equal(-4);
  });

  it('should return diff in days of two unix timestamps', () => {
    expect(getDiffInDays(1572348594627, 1572248594627)).to.equal(1);
  });

  it('should return diff in days of different years', () => {
    expect(getDiffInDays(new Date(2019, 0, 1), new Date(2020, 0, 5))).to.equal(-369);
  });

  it('should return diff in hours', () => {
    expect(getDiffInHours(new Date(2020, 0, 1, 5), new Date(2020, 0, 1))).to.equal(5);
  });

  it('should return diff in hours of different days', () => {
    expect(getDiffInHours(new Date(2020, 0, 2, 5), new Date(2020, 0, 1))).to.equal(29);
  });

  it('should return diff in minutes', () => {
    expect(getDiffInMinutes(new Date(2020, 0, 1), new Date(2020, 0, 1, 1))).to.equal(-60);
  });

  it('should return diff in minutes of two unix timestamps', () => {
    expect(getDiffInMinutes(1572348594627, 1572348283627)).to.equal(5);
  });

  it('should return diff in minutes of different days', () => {
    expect(getDiffInMinutes(new Date(2020, 0, 1), new Date(2020, 0, 2, 1))).to.equal(-(60 * 25));
  });
});

describe('Getting start of date', () => {
  it('should return date of start of the decade', () => {
    expect(getStartOfDecade(new Date(2025, 1, 1, 23, 59))).to.equalTime(new Date(2020, 0, 1, 0, 0));
  });

  it('should return date of start of the decade + 1', () => {
    expect(getStartOfDecade(new Date(2025, 1, 1, 23, 59), 1)).to.equalTime(new Date(2030, 0, 1, 0, 0));
  });

  it('should return date of start of decade - 1', () => {
    expect(getStartOfDecade(new Date(2025, 1, 1, 23, 59), -1)).to.equalTime(new Date(2010, 0, 1, 0, 0));
  });

  it('should return date of start of the year', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59))).to.equalTime(new Date(2020, 0, 1, 0, 0));
  });

  it('should return date of start of the hour', () => {
    expect(getStartOfHours(new Date(2020, 1, 1, 23, 59))).to.equalTime(new Date(2020, 1, 1, 23, 0));
  });

  it('should return date of start of the hour + 1', () => {
    expect(getStartOfHours(new Date(2020, 1, 1, 23, 59), 1)).to.equalTime(new Date(2020, 1, 2, 0, 0));
  });

  it('should return date of start of the hour - 1', () => {
    expect(getStartOfHours(new Date(2020, 1, 1, 23, 59), -1)).to.equalTime(new Date(2020, 1, 1, 22, 0));
  });

  it('should return date of start of the minute', () => {
    expect(getStartOfMinutes(new Date(2020, 1, 1, 23, 59, 30))).to.equalTime(new Date(2020, 1, 1, 23, 59, 0));
  });

  it('should return date of start of the minute + 1', () => {
    expect(getStartOfMinutes(new Date(2020, 1, 1, 23, 59, 30), 1)).to.equalTime(new Date(2020, 1, 2, 0, 0, 0));
  });

  it('should return date of start of the minute - 1', () => {
    expect(getStartOfMinutes(new Date(2020, 1, 1, 23, 59, 30), -1)).to.equalTime(new Date(2020, 1, 1, 23, 58, 0));
  });

  it('should return date of start of the year + 1', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59), 1)).to.equalTime(new Date(2021, 0, 1, 0, 0));
  });

  it('should return date of start of the year - 1', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59), -1)).to.equalTime(new Date(2019, 0, 1, 0, 0));
  });

  it('should return date of start of the month', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59))).to.equalTime(new Date(2020, 2, 1, 0, 0));
  });

  it('should return date of start of the month + 1', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59), 1)).to.equalTime(new Date(2020, 3, 1, 0, 0));
  });

  it('should return date of start of the month - 1', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59), -1)).to.equalTime(new Date(2020, 1, 1, 0, 0));
  });

  it('should return date of start of the day', () => {
    const result = getStartOfDay(new Date(2020, 2, 2, 23, 59));
    expect(result.getTime()).to.equal(new Date(2020, 2, 2, 0, 0, 0, 0).getTime());
  });

  it('should return date of start of the day + 1', () => {
    const result = getStartOfDay(new Date(2020, 2, 2, 23, 59), 1);
    expect(result.getTime()).to.equal(new Date(2020, 2, 3, 0, 0, 0, 0).getTime());
  });

  it('should return date of start of the day - 1', () => {
    const result = getStartOfDay(new Date(2020, 2, 2, 23, 59), -1);
    expect(result.getTime()).to.equal(new Date(2020, 2, 1, 0, 0, 0, 0).getTime());
  });

  it('should return date of start of the week', () => {
    const result = getStartOfWeek(new Date(2020, 0, 1));
    expect(result.getTime()).to.equal(new Date(2019, 11, 30, 0, 0, 0, 0).getTime());
  });

  it('should return date of start of the week + 1', () => {
    const result = getStartOfWeek(new Date(2020, 0, 1), 1);
    expect(result.getTime()).to.equal(new Date(2020, 0, 6, 0, 0, 0, 0).getTime());
  });

  it('should return date of start of the week - 1', () => {
    const result = getStartOfWeek(new Date(2020, 0, 1), -1);
    expect(result.getTime()).to.equal(new Date(2019, 11, 23, 0, 0, 0, 0).getTime());
  });
});

describe('Getting end of date', () => {
  it('should return date of end of the decade', () => {
    expect(getEndOfDecade(new Date(2025, 1, 1))).to.equalTime(new Date(2029, 11, 31, 23, 59, 59, 999));
  });

  it('should return date of end of the decade + 1', () => {
    expect(getEndOfDecade(new Date(2025, 1, 1), 1)).to.equalTime(new Date(2039, 11, 31, 23, 59, 59, 999));
  });

  it('should return date of end of the decade - 1', () => {
    expect(getEndOfDecade(new Date(2025, 1, 1), -1)).to.equalTime(new Date(2019, 11, 31, 23, 59, 59, 999));
  });

  it('should return date of end of the hour', () => {
    expect(getEndOfHours(new Date(2025, 1, 1, 22, 30))).to.equalTime(new Date(2025, 1, 1, 22, 59, 59, 999));
  });

  it('should return date of end of the hour + 1', () => {
    expect(getEndOfHours(new Date(2025, 1, 1, 23, 30), 1)).to.equalTime(new Date(2025, 1, 2, 0, 59, 59, 999));
  });

  it('should return date of end of the hour - 1', () => {
    expect(getEndOfHours(new Date(2025, 1, 1, 23, 30), -1)).to.equalTime(new Date(2025, 1, 1, 22, 59, 59, 999));
  });

  it('should return date of end of the minute', () => {
    expect(getEndOfMinutes(new Date(2025, 1, 1, 22, 30, 30))).to.equalTime(new Date(2025, 1, 1, 22, 30, 59, 999));
  });

  it('should return date of end of the minute + 1', () => {
    expect(getEndOfMinutes(new Date(2025, 1, 1, 23, 30), 1)).to.equalTime(new Date(2025, 1, 1, 23, 31, 59, 999));
  });

  it('should return date of end of the minute - 1', () => {
    expect(getEndOfMinutes(new Date(2025, 1, 1, 23, 30), -1)).to.equalTime(new Date(2025, 1, 1, 23, 29, 59, 999));
  });

  it('should return date of end of the year', () => {
    expect(getEndOfYear(new Date(2020, 1, 1))).to.equalTime(new Date(2020, 11, 31, 23, 59, 59, 999));
  });

  it('should return date of end of the year + 1', () => {
    expect(getEndOfYear(new Date(2020, 1, 1), 1)).to.equalTime(new Date(2021, 11, 31, 23, 59, 59, 999));
  });

  it('should return date of end of the year - 1', () => {
    expect(getEndOfYear(new Date(2020, 1, 1), -1)).to.equalTime(new Date(2019, 11, 31, 23, 59, 59, 999));
  });

  it('should return date of end of the month', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1))).to.equalTime(new Date(2020, 1, 29, 23, 59, 59, 999));
  });

  it('should return date of the end of the month when current date overflows its month', () => {
    expect(getEndOfMonth(new Date(2020, 2, 31))).to.equalDate(new Date(2020, 2, 31, 23, 59, 59, 999));
  });

  it('should return date of end of the month + 1', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1), 1)).to.equalTime(new Date(2020, 2, 31, 23, 59, 59, 999));
  });

  it('should return date of end of the month - 1', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1), -1)).to.equalTime(new Date(2020, 0, 31, 23, 59, 59, 999));
  });

  it('should return date of end of the day', () => {
    const result = getEndOfDay(new Date(2020, 1, 1, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 1, 1, 23, 59, 59, 999).getTime());
  });

  it('should return date of end of the day + 1', () => {
    const result = getEndOfDay(new Date(2020, 1, 1, 0, 0), 1);
    expect(result.getTime()).to.equal(new Date(2020, 1, 2, 23, 59, 59, 999).getTime());
  });

  it('should return date of end of the day - 1', () => {
    const result = getEndOfDay(new Date(2020, 1, 1, 0, 0), -1);
    expect(result.getTime()).to.equal(new Date(2020, 0, 31, 23, 59, 59, 999).getTime());
  });

  it('should return date of end of the week', () => {
    const result = getEndOfWeek(new Date(2020, 0, 1, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 0, 5, 23, 59, 59, 999).getTime());
  });

  it('should return date of end of the week + 1', () => {
    const result = getEndOfWeek(new Date(2020, 0, 1, 0, 0), 1);
    expect(result.getTime()).to.equal(new Date(2020, 0, 12, 23, 59, 59, 999).getTime());
  });

  it('should return date of end of the week - 1', () => {
    const result = getEndOfWeek(new Date(2020, 0, 1, 0, 0), -1);
    expect(result.getTime()).to.equal(new Date(2019, 11, 29, 23, 59, 59, 999).getTime());
  });
});

describe('getRelativeDate', () => {
  it('should return interval string for 1 day', () => {
    expect(getRelativeDate(subtractDays(new Date(), 1))).to.equal(' день');
  });

  it('should return interval string for 2 month', () => {
    expect(getRelativeDate(subtractMonths(new Date(), 2))).to.equal('2 месяца');
  });

  it('should return interval string for 5 hours', () => {
    const now = new Date();
    now.setHours(now.getHours() - 5);

    expect(getRelativeDate(now)).to.equal('5 часов');
  });

  it('should return interval string for less than a minute', () => {
    expect(getRelativeDate(new Date())).to.equal('меньше минуты');
  });

  it('should return interval string for 3 years', () => {
    expect(getRelativeDate(subtractYears(new Date(), 3))).to.equal('3 года');
  });
});

describe('getUtcOffset', () => {
  it('should return UTC offset in hours', () => {
    expect(getUtcOffset(new Date(2020, 0, 1))).to.equal(+localUTCOffset);
  });
});

describe('getTime', () => {
  it('should return unix timestamp', () => {
    expect(getTime(new Date(2020, 0, 1))).to.equal(newYear2020UnixTime);
  });
});

describe('getTimezoneName', () => {
  it('should return name of the current timezone', () => {
    expect(getTimezoneName()).to.equal(Intl.DateTimeFormat().resolvedOptions().timeZone);
  });
});

describe('getWeek', () => {
  it('should return week for 31.12.2019', () => {
    expect(getWeek(new Date(2019, 11, 31))).to.equal(53);
  });

  it('should return week for 01.01.2020', () => {
    expect(getWeek(new Date(2020, 0, 1))).to.equal(1);
  });

  it('should return week for 05.02.2020', () => {
    expect(getWeek(new Date(2020, 1, 5))).to.equal(6);
  });
});