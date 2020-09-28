# Changelog

## 3.1.0 (28.09.2020)

Rewrote `subtract*` functions using `add*` functions. It has led to decreasing 
the total size of the lib.


## 3.0.1 (21.09.2020)

Added `types` field into package.json to fix `tsc` errors and improve IDE's 
autocomplete.


## 3.0.0 (03.09.2020)

**Breaking change:** `getTime` has been renamed to `getUnixTimestamp`. The function's param type definition has been updated too.

Prepared the package for publishing on GitHub. Updated all the deps, added tests coverage & improved tests.

Fixed `formatTimeString` hour formatting (`H`).

Check out the [migration guide](./MIGRATION.md).

## 2.1.0 (03.08.2020)

Removed core-js from peer dependencies.

Improved types declaration.


## 2.0.0 (22.07.2020)

The package has been rewritten to TypeScript.

Also `formatTime` has been renamed to `formatTimeString`. 

Check out the [migration guide](./MIGRATION.md).


## 1.8.0 (30.06.2020)

Added polyfills.


## 1.7.1 (07.04.2020)

Fixed `getEndOfMonth`. Earlier it might return incorrect value when it was fired 
with `diff` param passed. 


## 1.7.0 (14.02.2020)

Made `format` param of `parseDate` optional. When it is not passed
it the function tries to parse the passed string using `Date.parse`. 


## 1.6.2 (10.02.2020)

Fixed `getRelativeDate` several years interval calculation.


## 1.6.1 (10.02.2020)

Fixed `HH` value calculation in `formatDate`. Earlier it returned `24` 
instead of `00` for the beginning of a day.


## 1.6.0 (07.02.2020)

Added `MMM` template into `formatDate`, which allows to add
short month name into the result string (e.g. `янв.`).


## 1.5.0 (05.02.2020)

Added `Z` template into `formatDate` supported templates list, which allows to add
timezone offset into the result string (it's formatted as `±HH:mm`).

Fixed `getUtcOffset`. Earlier it returned only positive values.

Fixed `getRelativeDate`. Now if the returned entity is the only one, 
there won't be a number in returned string. E.g. `минуту назад`
instead of `1 минуту назад`.

Added `getTimezoneName`. It returns timezone name (e.g. `Europe/Moscow`)
using Intl API when it's possible. If it's not then fallback value returned.
[The list of fallback values](./lib/constants/index.js) contains integer offsets only.

So, if there's a user from Colombo (Shi Lanka) with modern browser,
`Asia/Colombo` will be returned (+05:30). But if they use IE 11, then `Asia/Yekaterinburg`
will be returned (+05:00). More precise values aren't used to prevent the lib bloating. 
But may be added in future.

## 1.4.0 (13.01.2020)

Add second param (`format`) to `getMonthName` and `getWeekdayName`.
It may has two values: `long` or `short` like those that used 
in [`Date.prototype.toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
in `options.month` and `options.weekday` accordingly.

Add many new functions:

- `addHours`;
- `addMinutes`;
- `getEndOfHours`;
- `getEndOfMinutes`;
- `getHours`;
- `getMinutes`;
- `getStartOfHours`;
- `getStartOfMinutes`;
- `getWeek`;
- `isSameHour`;
- `isSameMinute`;
- `subtractHours`;
- `subtractMinutes`.


## 1.3.0 (23.12.2019)

Added `getRelativeDate` & `getDiffInHours`.


## 1.2.1 (20.12.2019)

Fixed `formatDate` for IE 11 and old Edges.


## 1.2.0 (04.12.2019)

Added new functions: 

- `getStartOfWeek`; 
- `getEndOfWeek`;
- `formatTime`;
- `isTimeValid`;
- `parseDate`.

Also added seconds to the object returned by `getDuration`.


## 1.1.2 (29.10.2019)

Fixed hours formatting in `formatDate` (sometimes `HH` returned one digit instead of two),
and values rounding in `getDiffInDays` & `getDiffInMinutes`.


## 1.1.1 (24.10.2019)

Replaced `Number.isNaN` with `isNaN`, because the first one doesn't work in IE11.


## 1.1.0 (21.10.2019)

Added the possibility to pass Unix Timestamp as a string to every function that accepts date. 

Added new two functions: `getStartOfDecade` and `getEndOfDecade`.

Renamed functions `getDiffOf*` to `getDiffIn*` (e.g. there was `getDiffOfMinutes`,
and now it's `getDiffInMinutes`). It's a breaking change, but the library isn't used anywhere,
so we're not releasing a major version. 


## 1.0.2 (16.10.2019)

Added flag `files` into package.json, to prevent useless files from putting into npm-package. 


## 1.0.1 (16.10.2019)

Removed flag `private: true` from package.json, to make it possible to publish the package.


## 1.0.0 (16.10.2019)

Initial version.
