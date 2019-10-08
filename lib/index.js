// + moment.unix(timestamp).format(DATETIME_FORMAT.TRACK_TIME_FORMAT);

// + moment().get('year');

// + moment().startOf('day').diff(selectedDate, 'days');
// + moment(newBefore).endOf('day');
// + moment().diff(momentDate, 'minutes');

// + moment().subtract(100, 'years');
// + moment().subtract(60, 'days').startOf('day').unix();
// + moment().subtract(1, 'months').format('D MMMM');

// + moment().add(-2, 'days');
// + momentDate.isSame(moment(), 'day');
// + momentDate.diff(moment(), 'days') === 1;

// + const duration = moment.duration(appStat.usage, 'seconds');
// + const days = duration.days();
// + const hours = duration.hours();
// + const minutes = duration.minutes();

// moment(formattedTime, 'HH:mm').isValid();
// + moment().utcOffset() / 60

export { default as subtractDate } from './subtractDate';
export { default as addDate } from './addDate';
export { default as isSameDate } from './isSameDate';
export { default as getDateDiff } from './getDateDiff';
export { default as getStartOf } from './getStartOf';
export { default as getEndOf } from './getEndOf';
export { default as getDateUnit } from './getDateUnit';
export { default as getDuration } from './getDuration';
export { default as formatDate } from './formatDate';
export { default as getUtcOffset } from './getUtcOffset';
