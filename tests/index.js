const chai = require('chai');
require('chai').use(require('chai-datetime'));

const expect = chai.expect;

const {
  addDate,
  subtractDate,
  formatDate,
  getDateUnit,
  getDuration,
  isSameDate,
} = require('../dist');

describe('addDate', () => {
  it('should add 1 year', () => {
    expect(addDate(1577826000, 1, 'years')).to.equalDate(new Date(2021, 0, 1));
  });

  it('should add 1 month', () => {
    expect(addDate(1577826000, 1, 'months')).to.equalDate(new Date(2020, 1, 1));
  });

  it('should add 1 day', () => {
    expect(addDate(1577826000, 1, 'days')).to.equalDate(new Date(2020, 0, 2));
  });
});

describe('subtractDate', () => {
  it('should subtract 1 year', () => {
    expect(subtractDate(1577826000, 1, 'years')).to.equalDate(new Date(2019, 0, 1));
  });

  it('should subtract 1 month', () => {
    expect(subtractDate(1577826000, 1, 'months')).to.equalDate(new Date(2019, 11, 1));
  });

  it('should subtract 1 day', () => {
    expect(subtractDate(1577826000, 1, 'days')).to.equalDate(new Date(2019, 11, 31));
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
    expect(getDuration(10000)).to.deep.equal({ days: 0, hours: 13, minutes: 46 });
  });

  it('should return duration as minutes', () => {
    expect(getDuration(1000)).to.deep.equal({ days: 0, hours: 0, minutes: 16 });
  });
});

describe('isSameDate', () => {
  it('should compare same years', () => {
    expect(isSameDate(new Date(2020, 0, 1), new Date(2020, 0, 2), 'year')).to.equal(true);
  });

  it('should compare different years', () => {
    expect(isSameDate(new Date(2020, 0, 1), new Date(2019, 11, 31), 'year')).to.equal(false);
  });

  it('should compare same months', () => {
    expect(isSameDate(new Date(2020, 0, 1), new Date(2020, 0, 2), 'month')).to.equal(true);
  });

  it('should compare different months', () => {
    expect(isSameDate(new Date(2020, 0, 1), new Date(2019, 1, 1), 'month')).to.equal(false);
  });

  it('should compare same days', () => {
    expect(isSameDate(new Date(2020, 0, 1), new Date(2020, 0, 1, 5), 'day')).to.equal(true);
  });

  it('should compare different days', () => {
    expect(isSameDate(new Date(2020, 0, 1), new Date(2019, 0, 2), 'day')).to.equal(false);
  });
});
