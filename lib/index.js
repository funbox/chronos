// moment() - getDateSeconds()

// moment.unix(timestamp).format(DATETIME_FORMAT.TRACK_TIME_FORMAT); - getDateFormat(seconds, DATE_FORMAT)
// moment(date, DATE_FORMAT).get('year') - getDate(date, DATE_FORMAT).get('year')
// moment().get('year') - getDateYear('year')
// moment().startOf('day').diff(selectedDate, 'days');
// moment(newBefore).endOf('day');
// moment().diff(momentDate, 'minutes');

// + moment().subtract(100, 'years'), - subtractDate()
// + moment().subtract(60, 'days').startOf('day').unix();
// + moment().subtract(1, 'months').format('D MMMM');

// moment().add(-2, 'days').format(SERVER_TIME_FORMAT);
// momentDate.isSame(moment(), 'd');
// momentDate.diff(moment(), 'days') === 1;
// const duration = moment.duration(appStat.usage, 'seconds');
// const days = duration.days();
// const hours = duration.hours();
// const minutes = duration.minutes();
// moment(formattedTime, 'HH:mm').isValid();
// moment().utcOffset() / 60

export { default as subtractDate } from './subtractDate';
