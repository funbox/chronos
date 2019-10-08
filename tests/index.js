const chai = require('chai');
require('chai').use(require('chai-datetime'));

const expect = chai.expect;

const {
  addDate,
  formatDate,
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
