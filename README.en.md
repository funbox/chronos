# @funboxteam/chronos

## Description

The library for date manipulation.

### Installation

Add the package into deps

```bash
npm install --save @funboxteam/chronos
```

Import functions

```bash
import { addDate } from @funboxteam/chronos
```

### Available functions

### [addDays](./lib/addDays.js), [addMonths](./lib/addMonths.js), [addYears](./lib/addYears.js)

Adds days, months or years to the passed date and returns new Date instance.

**Usage**
```bash
addDays(date, quantity);
addMonths(date, quantity);
addYears(date, quantity);
```
Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `quantity` — Number, number of units.

Example
```bash
addDays(new Date(), 1);

addYears(1577826000, 1);
```

### [subtractDays](./lib/subtractDays.js), [subtractMonths](./lib/subtractMonths.js), [subtractYears](./lib/subtractYears.js)

Subtracts days, months or years from the passed date and returns new Date instance.

**Usage**
```bash
subtractDays(date, quantity);
```
Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `quantity` — Number, number of units.

Example
```bash
subtractDays(new Date(), 1);

subtractYears(1577826000, 1);
```

### [formatDate](./lib/formatDate.js)

Formats the passed date into the string by the passed format.

**Usage**
```bash
formatDate(date, format);
```
Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `format` — String, format.    
      
| Value  | Description  |
|---|---|
| `ss`  | Two-digit seconds value  |
| `mm`  | Two-digit minutes value  |
| `HH` | Two-digit hours value  |
| `dddd`  | Weekday name |
| `DD`  | Two-digit day value  |
| `D` | Day value from 1 till 31 |
| `MMMM` | Month name  |
| `MM` | Two-digit month value |
| `YYYY`  | Four-digit year value |
| `YY`  | Last to digits of the year |
    
Example
```bash
formatDate(new Date(2020, 0, 1), 'YYYY-MM-DD');

formatDate(1577826000, 'HH:mm:ss');
```

### [formatTime](./lib/formatTime.js)

Formats the passed time string into the string by the passed format.

**Usage**
```bash
formatTime(value, valueFormat, format);

```
Params:
- `value` — String, time string;
- `valueFormat` – String, format of the passed time string;
- `format` – String, desired format.

| Value  | Description  |
|---|---|
| `ss`  | Two-digit seconds value  |
| `mm`  | Two-digit minutes value  |
| `H` |  Hour value from 0 till 23  |
| `HH` | Two-digit hours value  |

Example
```bash
formatTime('22:00', 'HH:mm', 'HH:mm:ss'); // '22:00:00'
```

### [getDay](./lib/getDay.js), [getWeekdayName](./lib/getWeekdayName.js), [getMonth](./lib/getMonth.js), [getMonthName](./lib/getMonthName.js), [getYear](./lib/getYear.js)

Returns unit from the passed date.

**Usage**
```bash
getDay(date);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String).

`getWeekdayName` returns name of the day, `getMonthName` returns name of the month.

Example
```bash
getDay(new Date(2020, 0, 1));

getYear(1577826000);
```

### [getDuration](./lib/getDuration.js)

Returns an object containing interval value in days, hours and minutes.

**Usage**
```bash
getDuration(seconds);
```

Params:
- `seconds` — Number, interval value in seconds.

Example
```bash
getDuration(1000000); // { days: 11, hours: 13, minutes: 46, seconds: 40 }
```

### [isSameDay](./lib/isSameDay.js), [isSameMonth](./lib/isSameMonth.js), [isSameYear](./lib/isSameYear.js)

Checks the dates equality.

**Usage**
```bash
isSameYear(firstDate, secondDate);
```

Params:
- `firstDate` — Date instance or Unix timestamp (Number, String);
- `secondDate` — Date instance or Unix timestamp (Number, String).

Example
```bash
isSameYear(1577826000, 1577912400);
```

### [getDiffInDays](./lib/getDiffInDays.js), [getDiffInMinutes](./lib/getDiffInMinutes.js), [getDiffInMonths](./lib/getDiffInMonths.js), [getDiffInYears](./lib/getDiffInYears.js)

Returns the difference between two dates in units.

**Usage**
```bash
getDiffInDays(firstDate, secondDate);
```

Params:
- `firstDate` — Date instance or Unix timestamp (Number, String);
- `secondDate` — Date instance or Unix timestamp (Number, String).

Example
```bash
getDiffInDays(1577826000, 1577912400);
```

### [getStartOfDay](./lib/getStartOfDay.js), [getStartOfDecade](./lib/getStartOfDecade.js), [getStartOfMonth](./lib/getStartOfMonth.js), [getStartOfWeek](./lib/getStartOfWeek), [getStartOfYear](./lib/getStartOfYear.js)

Returns the start of unit of the passed date.

**Usage**
```bash
getStartOfDay(date);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `diff` – Number, number of units to add / subtract from the date.

Example
```bash
getStartOfDay(1577912400);
getStartOfDay(1577912400, 1);
getStartOfDay(1577912400, -1);
```

### [getEndOfDay](./lib/getEndOfDay.js), [getEndOfDecade](./lib/getEndOfDecade.js), [getEndOfMonth](./lib/getEndOfMonth.js), [getEndOfWeek](./lib/getEndOfWeek.js), [getEndOfYear](./lib/getEndOfYear.js)

Returns the end of unit of the passed date.

**Usage**
```bash
getEndOfDay(date);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String);
- `diff` – Number, number of units to add / subtract from the date.

Example
```bash
getEndOfDay(1577912400);
getEndOfDay(1577912400, 1);
getEndOfDay(1577912400, -1);
```

### [getUtcOffset](./lib/getUtcOffset.js)

Returns UTF offset in hours.

**Usage**
```bash
getUtcOffset(date);
```

Params:
- `date` — Date instance or Unix timestamp (Number, String).

Example
```bash
getUtcOffset(new Date(2020, 0, 1);
```

### [getTime](./lib/getTime.js)

Returns Unix timestamp of the passed date.

**Usage**
```bash
getTime(date);
```

Params:
- `date` — Date instance;

Example
```bash
getTime(); // unixtime of new Date();

getTime(new Date(2020, 0, 1);
```

### [isTimeValid](./lib/isTimeValid.js)

Checks time string validity by passed format string.

**Usage**
```bash
isTimeValid(value, format);
```

Params:
- `value` – String, time string;
- `format` – String, validation format.

Example
```bash
isTimeValid('22:30', 'HH:mm');
```

### [parseDate](./lib/parseDate.js)

Returns Date instance parsed from the passed string by passed format

**Usage**
```bash
parseDate(value, format);

```

Params:
- `value` – String, date string;
- `format` – String, format of date string.

| Value  | Description  |
|---|---|
| `DD`  | Two-digit day value  |
| `D` | Day value from 1 till 31 |
| `MM` | Two-digit month value |
| `YYYY`  | Four-digit year value |
| `YY`  | Last to digits of the year |

Example
```bash
parseDate('2000-01-21', 'YYYY-MM-DD'); // new Date(2000, 0, 21)
```

