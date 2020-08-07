# @funboxteam/chronos

[![npm](https://img.shields.io/npm/v/@funboxteam/chronos.svg)](https://www.npmjs.com/package/@funboxteam/chronos)

The library for date manipulation.

[По-русски](./README.ru.md)

### Installation

Add the package into deps:

```bash
npm install --save @funboxteam/chronos
```

Import functions:

```js
import { addDate } from '@funboxteam/chronos';
```


### Available functions

### [addMinutes](./lib/addMinutes.js), [addHours](./lib/addHours.js), [addDays](./lib/addDays.js), [addMonths](./lib/addMonths.js), [addYears](./lib/addYears.js)

Adds time unit to the passed date and returns new Date instance.

When adding months to date in JS one should remember the amount of days
in the current and the result month. E.g. when we add 1 month to 31.01.2020 we get 02.03.2020, not 29.02.2020.

**Usage**

```js
addDays(date, quantity);
addMonths(date, quantity);
addYears(date, quantity);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `quantity` — Number, number of units.

Example:

```js
addDays(new Date('2020-01-01T00:00:00.000Z'), 1); // 2020-01-02T00:00:00.000Z

// 1577836800 is 2020-01-01T00:00:00.000Z
addYears(1577836800, 1); // 2021-01-01T00:00:00.000Z

addMonths(new Date(2020, 0, 1), 1); // == new Date(2020, 1, 1);
addMonths(new Date(2020, 0, 31), 1); // == new Date(2020, 2, 2);
```


### [subtractMinutes](./lib/subtractMinutes.js), [subtractHours](./lib/subtractHours.js), [subtractDays](./lib/subtractDays.js), [subtractMonths](./lib/subtractMonths.js), [subtractYears](./lib/subtractYears.js)

Subtracts time unit from the passed date and returns new Date instance.

When subtracting months in JS one should remember the amount of days
in the current and the result month. E.g. when we subtract 1 month
from 29.02.2020 we get 29.01.2020, not 31.01.2020.

**Usage**

```js
subtractDays(date, quantity);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `quantity` — Number, number of units.

Example:

```js
subtractDays(new Date('2020-01-01T00:00:00.000Z'), 1); // 2019-12-31T00:00:00.000Z

// 1577836800 is 2020-01-01T00:00:00.000Z
subtractYears(1577836800, 1); // 2019-01-01T00:00:00.000Z

subtractMonths(new Date(2020, 0, 1), 1); // == new Date(2019, 11, 1);
subtractMonths(new Date(2020, 1, 29), 1); // == new Date(2020, 0, 29);
```


### [formatDate](./lib/formatDate.js)

Formats the passed date into the string by the passed format.

**Usage**

```js
formatDate(date, format);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `format` — String, format.    
      
| Template  | Description                          |
|-----------|--------------------------------------|
| `ss`      | Two-digit seconds value              |
| `mm`      | Two-digit minutes value              |
| `HH`      | Two-digit hours value                |
| `dddd`    | Weekday name                         |
| `DD`      | Two-digit day value                  |
| `D`       | Day value from 1 till 31             |
| `MMMM`    | Month name                           |
| `MMM`     | Short month name                     |
| `MM`      | Two-digit month value                |
| `YYYY`    | Four-digit year value                |
| `YY`      | Last to digits of the year           |
| `Z`       | Timezone offset in hours and minutes |
    
Example:

```js
formatDate(new Date(2020, 0, 1), 'YYYY-MM-DDTHH:mm:ssZ'); // '2020-01-01T00:00:00+03:00' (for GMT+3)

// 1577836800 is 2020-01-01T00:00:00.000Z
formatDate(1577836800, 'HH:mm:ss'); // '03:00:00' (for GMT+3)
```


### [formatTime](./lib/formatTime.js)

Formats the passed time string into the string by the passed format.

**Usage**

```js
formatTime(value, valueFormat, format);

```

Params:
- `value` — String, time string;
- `valueFormat` – String, format of the passed time string;
- `format` – String, desired format.

| Template  | Description                |
|-----------|----------------------------|
| `ss`      | Two-digit seconds value    |
| `mm`      | Two-digit minutes value    |
| `HH`      | Two-digit hours value      |
| `H`       |  Hour value from 0 till 23 |

Example:

```js
formatTime('22:00', 'HH:mm', 'HH:mm:ss'); // '22:00:00'
```


### [getMinutes](./lib/getMinutes.js), [getHours](./lib/getHours.js), [getDay](./lib/getDay.js), [getWeek](./lib/getWeek.js), [getMonth](./lib/getMonth.js), [getYear](./lib/getYear.js)

Returns unit from the passed date.

_`getWeek` returns number of the week starting from the beginning of the year._

**Usage**

```js
getDay(date);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String).

Example:

```js
getDay(new Date(2020, 0, 1)); // 1;

// 1577836800 is 2020-01-01T00:00:00.000Z
getYear(1577836800); // 2020
```


### [getWeekdayName](./lib/getWeekdayName.js), [getMonthName](./lib/getMonthName.js)

Returns name of the unit.

**Usage**

```js
getWeekdayName(date, format);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `format` – String, format of the returned string. 'long' by default, 'short' is available too. 

Example:

```js
getWeekdayName(new Date(2020, 11, 30)); // 'среда' (11th month in JS is December)
getWeekdayName(new Date(2020, 11, 30), 'short'); // 'ср'
getMonthName(new Date(2020, 0, 1)); // 'январь'
getMonthName(new Date(2020, 0, 1), 'short'); // 'янв'
```


### [getDuration](./lib/getDuration.js)

Returns an object containing interval value in days, hours, minutes and seconds.

**Usage**

```js
getDuration(seconds);
```

Params:
- `seconds` — Number, interval value in seconds.

Example:

```js
getDuration(1000000); // { days: 11, hours: 13, minutes: 46, seconds: 40 }
```


### [isSameMinute](./lib/isSameMinute.js), [isSameHour](./lib/isSameHour.js), [isSameDay](./lib/isSameDay.js), [isSameMonth](./lib/isSameMonth.js), [isSameYear](./lib/isSameYear.js)

Checks the dates equality.

**Usage**

```js
isSameYear(firstDate, secondDate);
```

Params:
- `firstDate` — Date instance or Unix timestamp (Number, String);
- `secondDate` — Date instance or Unix timestamp (Number, String).

Example:

```js
// 1577750400 is 2019-12-31T00:00:00.000Z
// 1577836800 is 2020-01-01T00:00:00.000Z
isSameYear(1577750400, 1577836800); // false
```


### [getDiffInMinutes](./lib/getDiffInMinutes.js), [getDiffInHours](./lib/getDiffInHours.js), [getDiffInDays](./lib/getDiffInDays.js), [getDiffInMonths](./lib/getDiffInMonths.js), [getDiffInYears](./lib/getDiffInYears.js)

Returns the difference between two dates in units.

**Usage**

```js
getDiffInDays(firstDate, secondDate);
```

Params:
- `firstDate` — Date instance or Unix timestamp (Number, String);
- `secondDate` — Date instance or Unix timestamp (Number, String).

Example:

```js
// 1577750400 is 2019-12-31T00:00:00.000Z
// 1577836800 is 2020-01-01T00:00:00.000Z
getDiffInDays(1577750400, 1577836800); // -1
```


### [getStartOfMinutes](./lib/getStartOfMinutes.js), [getStartOfHours](./lib/getStartOfHours.js), [getStartOfDay](./lib/getStartOfDay.js), [getStartOfWeek](./lib/getStartOfWeek), [getStartOfMonth](./lib/getStartOfMonth.js), [getStartOfYear](./lib/getStartOfYear.js), [getStartOfDecade](./lib/getStartOfDecade.js)

Returns the start of unit of the passed date.

**Usage**

```js
getStartOfDay(date);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `diff` – Number, number of units to add to the result date.
  `0` by default.

Example:

```js
// 1577836800 is 2020-01-01T00:00:00.000Z
getStartOfDay(1577836800); // 2019-12-31T21:00:00.000Z (for GMT+3)
getStartOfDay(1577836800, 1); // 2020-01-01T21:00:00.000Z (for GMT+3)
getStartOfDay(1577836800, -1); // 2019-12-30T21:00:00.000Z (for GMT+3)
```


### [getEndOfMinutes](./lib/getEndOfMinutes.js), [getEndOfHours](./lib/getEndOfHours.js), [getEndOfDay](./lib/getEndOfDay.js), [getEndOfWeek](./lib/getEndOfWeek.js), [getEndOfMonth](./lib/getEndOfMonth.js), [getEndOfYear](./lib/getEndOfYear.js), [getEndOfDecade](./lib/getEndOfDecade.js)

Returns the end of unit of the passed date.

**Usage**

```js
getEndOfDay(date);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `diff` – Number, number of units to add to the result date.
  `0` by default.

Example:

```js
getEndOfDay(1577912400);
getEndOfDay(1577912400, 1);
getEndOfDay(1577912400, -1);
```


### [getRelativeDate](./lib/getRelativeDate.js)

Returns string with time interval between the passed date and the current time.

**Usage**

```js
getRelativeDate(date);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String).

Example:

```js
getRelativeDate(1577081613); // '2 месяца' (for 07.02.2020)
getRelativeDate(new Date()); // 'меньше минуты'
```


### [getUtcOffset](./lib/getUtcOffset.js)

Returns UTF offset in hours, floored to integer.

**Usage**

```js
getUtcOffset(date);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String).

Example:

```js
getUtcOffset(new Date(2020, 0, 1)); // 3 (for GMT+3)
```


### [getTime](./lib/getTime.js)

Returns Unix timestamp of the passed date.

**Usage**

```js
getTime(date);
```

Params:
- `date` — Date instance;

Example:

```js
// now is 2020-02-07T08:26:59.422Z
getTime(); // 1581064019 (unix time of new Date())

getTime(new Date(2020, 0, 1)); // 1577826000 (for GMT+3)
```


### [getTimezoneName](./lib/getTimezoneName)

Returns the name of the current timezone.

In case of lack of Intl API support returns nearest timezone to the user 
which has integer offset.

**Usage**

```js
getTimezoneName();
```

Example:

```js
getTimezoneName(); // 'Europe/Moscow' (for GMT+3 in ИЕ11 and for MSK in modern browsers)
```


### [isTimeValid](./lib/isTimeValid.js)

Checks time string validity by passed format string.

**Usage**

```js
isTimeValid(value, format);
```

Params:
- `value` – String, time string;
- `format` – String, validation format.

Example:

```js
isTimeValid('22:30', 'HH:mm'); // true
```


### [parseDate](./lib/parseDate.js)

Returns Date instance parsed from the passed string by passed format

If `format` is not passed it tries to parse `value` using native
`Date.parse`. It should support ISO 8601 and RFC 2822. Other formats
are not recommended to parse without explicit `format` set. 

**Usage**

```js
parseDate(value, format);

```

Params:
- `value` – String, date string;
- `format` – String, format of date string.

| Value  | Description                |
|--------|----------------------------|
| `DD`   | Two-digit day value        |
| `D`    | Day value from 1 till 31   |
| `MM`   | Two-digit month value      |
| `YYYY` | Four-digit year value      |
| `YY`   | Last to digits of the year |

Example:

```js
parseDate('2000-01-21', 'YYYY-MM-DD'); // == new Date(2000, 0, 21)
```

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
