const chai = require('chai');
require('chai').use(require('chai-datetime'));

const expect = chai.expect;

const {
  addDays,
  addMonths,
  addYears,
  subtractDays,
  subtractMonths,
  subtractYears,
  formatDate,
  formatTime,
  formatToDate,
  getDay,
  getMonth,
  getYear,
  getDuration,
  isSameDay,
  isSameMonth,
  isSameYear,
  getDiffInDays,
  getDiffInMinutes,
  getDiffInMonths,
  getDiffInYears,
  getStartOfDay,
  getStartOfDecade,
  getStartOfMonth,
  getStartOfWeek,
  getStartOfYear,
  getEndOfDay,
  getEndOfDecade,
  getEndOfMonth,
  getEndOfWeek,
  getEndOfYear,
  getUtcOffset,
  getTime,
  isTimeValid,
} = require('../lib');

describe('Addition', () => {
  it('should add 1 year', () => {
    expect(addYears(1577826000, 1)).to.equalDate(new Date(2021, 0, 1));
  });

  it('should add 1 month', () => {
    expect(addMonths(1577826000, 1)).to.equalDate(new Date(2020, 1, 1));
  });

  it('should add 1 day', () => {
    expect(addDays(1577826000, 1)).to.equalDate(new Date(2020, 0, 2));
  });
});

describe('Subtraction', () => {
  it('should subtract 1 year', () => {
    expect(subtractYears(1577826000, 1)).to.equalDate(new Date(2019, 0, 1));
  });

  it('should subtract 1 month', () => {
    expect(subtractMonths(1577826000, 1)).to.equalDate(new Date(2019, 11, 1));
  });

  it('should subtract 1 day', () => {
    expect(subtractDays(1577826000, 1)).to.equalDate(new Date(2019, 11, 31));
  });
});

describe('formatDate', () => {
  it('should format unix timestamp to \'HH:mm:ss\'', () => {
    expect(formatDate(1577826000, 'HH:mm:ss')).to.equal('00:00:00');
  });

  it('should format unix timestamp to \'DD.MM.YYYY\'', () => {
    expect(formatDate(1577826000, 'DD.MM.YYYY')).to.equal('01.01.2020');
  });

  it('should format Date instance to \'YYYY-MM-DD\'', () => {
    expect(formatDate(new Date(2020, 0, 1), 'YYYY-MM-DD')).to.equal('2020-01-01');
  });
});

describe('formatToDate', () => {
  it('should return Date instance from the string formatted as \'YYYY-MM-DD\'', () => {
    expect(formatToDate('2000-01-21', 'YYYY-MM-DD')).to.equalDate(new Date(2000, 0, 21));
  });

  it('should return Date instance from the string formatted as \'DD.MM.YYYY\'', () => {
    expect(formatToDate('31.12.2019', 'DD.MM.YYYY')).to.equalDate(new Date(2019, 11, 31));
  });

  it('should return Date instance from the string formatted as \'D.MM.YYYY\'', () => {
    expect(formatToDate('1.12.2019', 'D.MM.YYYY')).to.equalDate(new Date(2019, 11, 1));
  });

  it('should throw when string formatted as \'D.MM.YYYY\' does not contain valid date', () => {
    expect(function() { formatToDate('1.120.2019', 'D.MM.YYYY'); }).to.throw('Invalid date value: 1.120.2019');
  });
});

describe('formatTime', () => {
  it('should return string formatted as \'HH:mm:ss\'', () => {
    expect(formatTime('1:30', 'H:mm', 'HH:mm:ss')).to.equal('01:30:00');
  });

  it('should return string formatted as \'mm:ss\'', () => {
    expect(formatTime('11:30', 'mm:ss', 'HH:mm:ss')).to.equal('00:11:30');
  });

  it('should throw a formatting error when get invalid time', () => {
    expect(function() { formatTime('33:30', 'HH:mm', 'HH:mm:ss'); }).to.throw('Invalid time value: 33:30');
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
     expect(getYear(1577826000)).to.equal(2020);
   });

  it('should return month of unix timestamp', () => {
    expect(getMonth(1577826000)).to.equal(0);
  });

  it('should return day of unix timestamp', () => {
    expect(getDay(1577826000)).to.equal(1);
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

  it('should return diff in minutes', () => {
    expect(getDiffInMinutes(new Date(2020, 0, 1), new Date(2020, 0, 1, 1))).to.equal(-60);
  });

  it('should return diff in minutes of two unix timestamps', () => {
    expect(getDiffInMinutes(1572348594627, 1572348283627)).to.equal(5);
  });

  it('should return diff in minutes of different days', () => {
    expect(getDiffInMinutes(new Date(2020, 0, 1), new Date(2020, 0, 2, 1))).to.equal(-(60*25));
  });
});

describe('Getting start of date', () => {
  it('should return date of start of the decade', () => {
    expect(getStartOfDecade(new Date(2025, 1, 1, 23, 59))).to.equalDate(new Date(2020, 0, 1, 0, 0));
  });

  it('should return date of start of the decade + 1', () => {
    expect(getStartOfDecade(new Date(2025, 1, 1, 23, 59), 1)).to.equalDate(new Date(2030, 0, 1, 0, 0));
  });

  it('should return date of start of decade - 1', () => {
    expect(getStartOfDecade(new Date(2025, 1, 1, 23, 59), -1)).to.equalDate(new Date(2010, 0, 1, 0, 0));
  });

  it('should return date of start of the year', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59))).to.equalDate(new Date(2020, 0, 1, 0, 0));
  });

  it('should return date of start of the year + 1', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59), 1)).to.equalDate(new Date(2021, 0, 1, 0, 0));
  });

  it('should return date of start of the year - 1', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59), -1)).to.equalDate(new Date(2019, 0, 1, 0, 0));
  });

  it('should return date of start of the month', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59))).to.equalDate(new Date(2020, 2, 1, 0, 0));
  });

  it('should return date of start of the month + 1', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59), 1)).to.equalDate(new Date(2020, 3, 1, 0, 0));
  });

  it('should return date of start of the month - 1', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59), -1)).to.equalDate(new Date(2020, 1, 1, 0, 0));
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
    expect(getEndOfDecade(new Date(2025, 1, 1))).to.equalDate(new Date(2029, 11, 31));
  });

  it('should return date of end of the decade + 1', () => {
    expect(getEndOfDecade(new Date(2025, 1, 1), 1)).to.equalDate(new Date(2039, 11, 31));
  });

  it('should return date of end of the decade - 1', () => {
    expect(getEndOfDecade(new Date(2025, 1, 1), -1)).to.equalDate(new Date(2019, 11, 31));
  });

  it('should return date of end of the year', () => {
    expect(getEndOfYear(new Date(2020, 1, 1))).to.equalDate(new Date(2020, 11, 31));
  });

  it('should return date of end of the year + 1', () => {
    expect(getEndOfYear(new Date(2020, 1, 1), 1)).to.equalDate(new Date(2021, 11, 31));
  });

  it('should return date of end of the year - 1', () => {
    expect(getEndOfYear(new Date(2020, 1, 1), -1)).to.equalDate(new Date(2019, 11, 31));
  });

  it('should return date of end of the month', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1))).to.equalDate(new Date(2020, 1, 29));
  });

  it('should return date of end of the month + 1', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1), 1)).to.equalDate(new Date(2020, 2, 31));
  });

  it('should return date of end of the month - 1', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1), -1)).to.equalDate(new Date(2020, 0, 31));
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

describe('getUtcOffset', () => {
  it('should return UTC offset in hours', () => {
    expect(getUtcOffset(new Date(2020, 0, 1))).to.equal(3);
  });
});

describe('getTime', () => {
  it('should return unix timestamp', () => {
    expect(getTime(new Date(2020, 0, 1))).to.equal(1577826000);
  });
});
