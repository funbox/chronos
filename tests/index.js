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
  getDateUnit,
  getDuration,
  isSameDay,
  isSameMonth,
  isSameYear,
  getDateDiff,
  getStartOfDay,
  getStartOfMonth,
  getStartOfYear,
  getEndOfDay,
  getEndOfMonth,
  getEndOfYear,
  getUtcOffset,
  getTime,
} = require('../dist');

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

describe('getDateUnit', () => {
   it('should return year of unix timestamp', () => {
     expect(getDateUnit(1577826000, 'year')).to.equal(2020);
   });

  it('should return month of unix timestamp', () => {
    expect(getDateUnit(1577826000, 'month')).to.equal(0);
  });

  it('should return day of unix timestamp', () => {
    expect(getDateUnit(1577826000, 'day')).to.equal(1);
  });
});

describe('getDuration', () => {
  it('should return duration as days, hours and minutes', () => {
    expect(getDuration(1000000)).to.deep.equal({ days: 11, hours: 13, minutes: 46 });
  });

  it('should return duration as hours and minutes', () => {
    expect(getDuration(10000)).to.deep.equal({ days: 0, hours: 2, minutes: 46 });
  });

  it('should return duration as minutes', () => {
    expect(getDuration(1000)).to.deep.equal({ days: 0, hours: 0, minutes: 16 });
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
    expect(isSameMonth(new Date(2020, 0, 1), new Date(2019, 0, 1))).to.equal(false);
  });

  it('should compare same days', () => {
    expect(isSameDay(new Date(2020, 0, 1), new Date(2020, 0, 1, 5))).to.equal(true);
  });

  it('should compare different days', () => {
    expect(isSameDay(new Date(2020, 0, 1), new Date(2019, 0, 2))).to.equal(false);
    expect(isSameDay(new Date(2020, 0, 1), new Date(2019, 0, 1))).to.equal(false);
  });
});

describe('getDateDiff', () => {
  it('should return diff in years', () => {
    expect(getDateDiff(new Date(2020, 0, 1), new Date(2019, 0, 1), 'years')).to.equal(1);
  });

  it('should return diff in years months', () => {
    expect(getDateDiff(new Date(2020, 0, 1), new Date(2020, 4, 1), 'months')).to.equal(-4);
  });

  it('should return diff in years in days', () => {
    expect(getDateDiff(new Date(2020, 0, 1), new Date(2020, 0, 5), 'days')).to.equal(-4);
  });
});

describe('Getting start of date', () => {
  it('should return date of start of the year', () => {
    expect(getStartOfYear(new Date(2020, 1, 1, 23, 59))).to.equalDate(new Date(2020, 0, 1, 0, 0));
  });

  it('should return date of start of the month', () => {
    expect(getStartOfMonth(new Date(2020, 2, 2, 23, 59))).to.equalDate(new Date(2020, 2, 1, 0, 0));
  });

  it('should return date of start of the day', () => {
    const result = getStartOfDay(new Date(2020, 2, 2, 23, 59));
    expect(result.getTime()).to.equal(new Date(2020, 2, 2, 0, 0, 0, 0).getTime());
  });
});

describe('Getting end of date', () => {
  it('should return date of end of the year', () => {
    expect(getEndOfYear(new Date(2020, 1, 1))).to.equalDate(new Date(2020, 11, 31));
  });

  it('should return date of end of the month', () => {
    expect(getEndOfMonth(new Date(2020, 1, 1))).to.equalDate(new Date(2020, 1, 29));
  });

  it('should return date of end of the day', () => {
    const result = getEndOfDay(new Date(2020, 1, 1, 0, 0));
    expect(result.getTime()).to.equal(new Date(2020, 1, 1, 23, 59, 59, 999).getTime());
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
