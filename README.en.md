# date-util

## Description

The library for date manipulation.

### Installation

Add the package into deps

```bash
npm install --save date-util
```

Import functions

```bash
import { addDate } from date-util
```

### Available functions

### [addDate](./lib/addDate.js)

Adds passed unit to the passed date and returns new Date instance.

**Syntax**
```bash
addDate(date, quantity, unit);
```
Params:
- `date` - Date instance or Unix timestamp;
- `quantity` - Number, number of units;
- `unit` - String, unit. Available values `days`, `months`, `years`.

Example
```bash
addDate(new Date(), 1 'days');

addDate(1577826000, 1, 'years');
```

### [subtractDate](./lib/subtractDate.js)

Subtract passed unit from the passed date and returns new Date instance.

**Syntax**
```bash
subtractDate(date, quantity, unit);
```
Params:
- `date` - Date instance or Unix timestamp;
- `quantity` - Number, number of units;
- `unit` - String, unit. Available values `days`, `months`, `years`.

Example
```bash
subtractDate(new Date(), 1 'days');

subtractDate(1577826000, 1, 'years');
```

### [formatDate](./lib/formatDate.js)

Formats the passed date into the string by the passed pattern.

**Syntax**
```bash
formatDate(date, pattern);
```
Params:
- `date` - Date instance or Unix timestamp;
- `pattern` - String, format pattern.    
      
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

### [getDateUnit](./lib/getDateUnit.js)

Returns the passed time unit from the passed date.

**Syntax**
```bash
getDateUnit(date, unit);
```

Params:
- `date` - Date instance or Unix timestamp;
- `unit` - String, unit. Available values `day`, `month`, `year`.

Example
```bash
getDateUnit(new Date(2020, 0, 1), 'day');

getDateUnit(1577826000, 'year');
```

### [getDuration](./lib/getDuration.js)

Returns an object containing interval value in days, hours and minutes.

**Syntax**
```bash
getDuration(seconds);
```

Params:
- `seconds` - Number, interval value in seconds.

Example
```bash
getDuration(1000000); // { days: 11, hours: 13, minutes: 46 }
```

### [isSameDate](./lib/isSameDate.js)

Checks the dates equality.

**Syntax**
```bash
isSameDate(firstDate, secondDate, unit);
```

Params:
- `firstDate` - Date instance or Number with Unix timestamp;
- `secondDate` - Date instance or Number with Unix timestamp;
- `unit` - String, unit. Available values `day`, `month`, `year`.

Example
```bash
isSameDate(1577826000, 1577912400, 'year');
```

### [getDateDiff](./lib/getDateDiff.js)

Returns the difference between two dates in passed units.

**Syntax**
```bash
getDateDiff(firstDate, secondDate, unit);
```

Params:
- `firstDate` - Date instance or Number with Unix timestamp;
- `secondDate` - Date instance or Number with Unix timestamp;
- `unit` - String, unit. Available values `minutes`, `days`, `months`, `years`.

Example
```bash
getDateDiff(1577826000, 1577912400, 'days');
```

### [getStartOf](./lib/getStartOf.js)

Returns the start of the passed time unit of the passed date.

**Syntax**
```bash
getStartOf(date, unit);
```

Params:
- `date` - Date instance or Unix timestamp;
- `unit` - String, unit. Available values `day`, `month`, `year`.

Example
```bash
getStartOf(1577912400, 'year');
```

### [getEndOf](./lib/getEndOf.js)

Returns the end of the passed time unit of the passed date.

**Syntax**
```bash
getEndOf(date, unit);
```

Params:
- `date` - Date instance or Unix timestamp;
- `unit` - String, unit. Available values `day`, `month`, `year`.

Example
```bash
getEndOf(1577912400, 'year');
```

### [getUtcOffset](./lib/getUtcOffset.js)

Returns UTF offset in hours.

**Syntax**
```bash
getUtcOffset(date);
```

Params:
- `date` - Date instance or Unix timestamp;

Example
```bash
getUtcOffset(new Date(2020, 0, 1);
```
