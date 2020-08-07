# @funboxteam/chronos

[![npm](https://img.shields.io/npm/v/@funboxteam/chronos.svg)](https://www.npmjs.com/package/@funboxteam/chronos)

The library for date manipulation.

[По-русски](./README.ru.md)

## Installation

Add the package into deps:

```bash
npm install --save @funboxteam/chronos
```

Import functions:

```js
import { addYears } from '@funboxteam/chronos';
```


## Types

The library exports several types that may be used elsewhere, but the most important that they used inside the lib
to guarantee type safety.

### ChronosDate

```typescript
declare type ChronosDate = Date | number | string;
```

Every function that accepts date as a first param expects to get instance of `Date`, or Unix timestamp as number or string.

Unix timestamp may be present as seconds or milliseconds (e.g. `1596803254000` and `1596803254` is the same value).

### Duration

```typescript
declare type Duration = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
```

Type describing return value of functions that work with time intervals. 

## Functions

Every function is immutable and those which accept `Date` instances and return `Date` instance always return 
new `Date` instance and do not mutate the passed one.

### [addMinutes](./lib/addMinutes.ts), [addHours](./lib/addHours.ts), [addDays](./lib/addDays.ts), [addMonths](./lib/addMonths.ts), [addYears](./lib/addYears.ts)

```typescript
(value: ChronosDate, quantity: number) => Date;
```

#### Params

- `value`, date value;
- `quantity`, number of units to add.

#### Example

```js
addDays(new Date('2020-01-01T00:00:00.000Z'), 1); // 2020-01-02T00:00:00.000Z

// 1577836800 is 2020-01-01T00:00:00.000Z
addYears(1577836800, 1); // 2021-01-01T00:00:00.000Z

addMonths(new Date(2020, 0, 1), 1); // == new Date(2020, 1, 1);
addMonths(new Date(2020, 0, 31), 1); // == new Date(2020, 2, 2);
```

#### Important notes

When adding months to date in JS one should mind the amount of days in the current and the result month. 

E.g. adding 1 month to 31.01.2020 leads to getting 02.03.2020, not 29.02.2020, because there can't be 31.02.2020.


### [subtractMinutes](./lib/subtractMinutes.ts), [subtractHours](./lib/subtractHours.ts), [subtractDays](./lib/subtractDays.ts), [subtractMonths](./lib/subtractMonths.ts), [subtractYears](./lib/subtractYears.ts)

```typescript
(value: ChronosDate, quantity: number) => Date;
```

#### Params

- `value`, date value;
- `quantity`, number of units to subtract.

#### Example

```js
subtractDays(new Date('2020-01-01T00:00:00.000Z'), 1); // 2019-12-31T00:00:00.000Z

// 1577836800 is 2020-01-01T00:00:00.000Z
subtractYears(1577836800, 1); // 2019-01-01T00:00:00.000Z

subtractMonths(new Date(2020, 0, 1), 1); // == new Date(2019, 11, 1);
subtractMonths(new Date(2020, 1, 29), 1); // == new Date(2020, 0, 29);
```

#### Important notes

When subtracting months to date in JS one should mind the amount of days in the current and the result month.

E.g. subtracting 1 month to 29.02.2020 leads to getting 29.01.2020, not 31.01.2020.


### [formatDate](./lib/formatDate.ts)

```typescript
(value: ChronosDate, format: string) => string;
```

#### Params

- `value`, date value;
- `format`, desired format.

#### Available format tokens
      
| Type            | Token  | Value                                           |
|:----------------|:-------|:------------------------------------------------|
| Second          | `ss`   | 00, 01, 02, ..., 57, 58, 59                     |
| Minute          | `mm`   | 00, 01, 02, ..., 57, 58, 59                     |
| Hour            | `HH`   | 00, 01, 02, ..., 21, 22, 23                     |
| Day of Week     | `dddd` | понедельник, вторник, ..., суббота, воскресенье |
| Day of Month    | `DD`   | 01, 02, 03, ..., 29, 30, 31                     |
|                 | `D`    | 1, 2, 3, ..., 29, 30, 31                        |
| Month           | `MMMM` | январь, февраль, ..., ноябрь, декабрь           |
|                 | `MMM`  | янв, фев, ..., ноя, дек                         |
|                 | `MM`   | 01, 02, 03, ..., 10, 11, 12                     |
| Year            | `YYYY` | Full year, e.g.: 1885, 1955, 1985, 2015         |
|                 | `YY`   | 00, 01, 02, ..., 97, 98, 99                     |
| UTC time offset | `Z`    | -12:00, -11:00, ..., +13:00, +14:00             |
   
#### Example

```js
formatDate(new Date(2020, 0, 1), 'YYYY-MM-DDTHH:mm:ssZ'); // '2020-01-01T00:00:00+03:00' (for GMT+3)

// 1577836800 is 2020-01-01T00:00:00.000Z
formatDate(1577836800, 'HH:mm:ss'); // '03:00:00' (for GMT+3)
```

#### Important notes

Only Russian locale is supported for the current moment!

Other locales support is the possible task for the roadmap. But we have to be sure that there're users who want to get them. 
If you need one, please [fill the issue](https://github.com/funbox/chronos/issues/new?title=Add%20[YOUR_LOCALE_HERE]%20locale%20support).


### [formatTimeString](./lib/formatTimeString.ts)

```typescript
(value: string, valueFormat: string, format: string) => string;
```

#### Params

- `value`, time string;
- `valueFormat`, template describing `value` format;
- `format`, desired format.

#### Available format tokens

| Type            | Token  | Value                                           |
|:----------------|:-------|:------------------------------------------------|
| Second          | `ss`   | 00, 01, 02, ..., 57, 58, 59                     |
| Minute          | `mm`   | 00, 01, 02, ..., 57, 58, 59                     |
| Hour            | `HH`   | 00, 01, 02, ..., 21, 22, 23                     |
|                 | `H`    | 0, 1, 2, ..., 21, 22, 23                        |

#### Example

```js
formatTimeString('22:00', 'HH:mm', 'HH:mm:ss'); // '22:00:00'
```


### [getMinutes](./lib/getMinutes.ts), [getHours](./lib/getHours.ts), [getDay](./lib/getDay.ts), [getWeek](./lib/getWeek.ts), [getMonth](./lib/getMonth.ts), [getYear](./lib/getYear.ts)

```typescript
(value: ChronosDate) => number;
```

#### Params

- `value`, date value.

#### Example

```js
getDay(new Date(2020, 0, 1)); // 1;

// 1577836800 is 2020-01-01T00:00:00.000Z
getYear(1577836800); // 2020
```

#### Important notes

`getWeek` returns number of the week starting from the beginning of the year.


### [getWeekdayName](./lib/getWeekdayName.ts), [getMonthName](./lib/getMonthName.ts)

```typescript
(value: ChronosDate, format?: string) => string;
```

#### Params

- `value`, date value;
- `format`, format of the returned string. `'long'` (by default) or `'short'`. 

#### Example

```js
getWeekdayName(new Date(2020, 11, 30)); // 'среда' (11th month in JS is December)
getWeekdayName(new Date(2020, 11, 30), 'short'); // 'ср'
getMonthName(new Date(2020, 0, 1)); // 'январь'
getMonthName(new Date(2020, 0, 1), 'short'); // 'янв'
```


### [getDuration](./lib/getDuration.ts)

```typescript
(seconds: number) => Duration;
```

### Params

- `seconds`, interval value in seconds.

#### Example

```js
getDuration(1000000); // { days: 11, hours: 13, minutes: 46, seconds: 40 }
```


### [isSameMinute](./lib/isSameMinute.ts), [isSameHour](./lib/isSameHour.ts), [isSameDay](./lib/isSameDay.ts), [isSameMonth](./lib/isSameMonth.ts), [isSameYear](./lib/isSameYear.ts)

```typescript
(firstValue: ChronosDate, secondValue: ChronosDate) => boolean;
```

#### Params

- `firstValue`, date value;
- `secondValue`, date value.

#### Example

```js
// 1577750400 is 2019-12-31T00:00:00.000Z
// 1577836800 is 2020-01-01T00:00:00.000Z
isSameYear(1577750400, 1577836800); // false
```


### [getDiffInMinutes](./lib/getDiffInMinutes.ts), [getDiffInHours](./lib/getDiffInHours.ts), [getDiffInDays](./lib/getDiffInDays.ts), [getDiffInMonths](./lib/getDiffInMonths.ts), [getDiffInYears](./lib/getDiffInYears.ts)

```typescript
(firstValue: ChronosDate, secondValue: ChronosDate) => number;
```

#### Params

- `firstValue`, date value;
- `secondValue`, date value.

#### Example

```js
// 1577750400 is 2019-12-31T00:00:00.000Z
// 1577836800 is 2020-01-01T00:00:00.000Z
getDiffInDays(1577750400, 1577836800); // -1
```


### [getStartOfMinutes](./lib/getStartOfMinutes.ts), [getStartOfHours](./lib/getStartOfHours.ts), [getStartOfDay](./lib/getStartOfDay.ts), [getStartOfWeek](./lib/getStartOfWeek), [getStartOfMonth](./lib/getStartOfMonth.ts), [getStartOfYear](./lib/getStartOfYear.ts), [getStartOfDecade](./lib/getStartOfDecade.ts)

```typescript
(value: ChronosDate, diff?: number) => Date;
```

#### Params
- `value`, date value;
- `diff`, number of units to add to the result date. `0` by default.

#### Example

```js
// 1577836800 is 2020-01-01T00:00:00.000Z
getStartOfDay(1577836800); // 2019-12-31T21:00:00.000Z (for GMT+3)
getStartOfDay(1577836800, 1); // 2020-01-01T21:00:00.000Z (for GMT+3)
getStartOfDay(1577836800, -1); // 2019-12-30T21:00:00.000Z (for GMT+3)
```


### [getEndOfMinutes](./lib/getEndOfMinutes.ts), [getEndOfHours](./lib/getEndOfHours.ts), [getEndOfDay](./lib/getEndOfDay.ts), [getEndOfWeek](./lib/getEndOfWeek.ts), [getEndOfMonth](./lib/getEndOfMonth.ts), [getEndOfYear](./lib/getEndOfYear.ts), [getEndOfDecade](./lib/getEndOfDecade.ts)

```typescript
(value: ChronosDate, diff?: number) => Date;
```

#### Params
- `value`, date value;
- `diff`, number of units to add to the result date. `0` by default.

#### Example

```js
// 1577836800 is 2020-01-01T00:00:00.000Z
getEndOfDay(1577836800); // 2020-01-01T20:59:59.999Z (for GMT+3)
getEndOfDay(1577836800, 1); // 2020-01-02T20:59:59.999Z (for GMT+3)
getEndOfDay(1577836800, -1); // 2019-12-31T20:59:59.999Z (for GMT+3)
```


### [getRelativeDate](./lib/getRelativeDate.ts)

```typescript
(value: ChronosDate) => string;
```

#### Params

- `value`, date value.

#### Example

```js
getRelativeDate(1577081613); // '2 месяца' (for 07.02.2020)
getRelativeDate(new Date()); // 'меньше минуты'
```


### [getUtcOffset](./lib/getUtcOffset.ts)

```typescript
(value: ChronosDate) => number;
```
#### Params

- `value`, date value.

#### Example

```js
getUtcOffset(new Date(2020, 0, 1)); // 3 (for GMT+3)
```


### [getTime](./lib/getTime.ts)

```typescript
(date?: Date) => number;
```

#### Params

- `date`, Date instance. `new Date()` by default.

#### Example

```js
// now is 2020-02-07T08:26:59.422Z
getTime(); // 1581064019 (unix timestamp for new Date())

getTime(new Date(2020, 0, 1)); // 1577826000 (for GMT+3)
```


### [getTimezoneName](./lib/getTimezoneName.ts)

```typescript
() => string;
```

#### Example

```js
getTimezoneName(); // 'Europe/Moscow' (for any GMT+3 timezone in IE11 and for MSK in modern browsers)
```

#### Important notes

In case of lack of Intl API support returns nearest to the user timezone 
which has integer offset.


### [isTimeValid](./lib/isTimeValid.ts)

```typescript
(value: string, format: string) => boolean;
```

#### Params

- `value`, time string;
- `format`, format string that should be used for validation.

#### Example

```js
isTimeValid('22:30', 'HH:mm'); // true
```


### [parseDate](./lib/parseDate.ts)

```typescript
(value: string, format: string) => Date;
```

#### Params

- `value`, date string;
- `format`, format string that should be used for parsing.

#### Available format tokens    
      
| Type            | Token  | Recognized values                       |
|:----------------|:-------|:----------------------------------------|
| Day of Month    | `DD`   | 01, 02, 03, ..., 29, 30, 31             |
|                 | `D`    | 1, 2, 3, ..., 29, 30, 31                |
| Month           | `MM`   | 01, 02, 03, ..., 10, 11, 12             |
| Year            | `YYYY` | Full year, e.g.: 1885, 1955, 1985, 2015 |
|                 | `YY`   | 00, 01, 02, ..., 97, 98, 99             |

#### Example

```js
parseDate('2000-01-21', 'YYYY-MM-DD'); // == new Date(2000, 0, 21)
```

#### Important notes

If `format` is not passed it tries to parse `value` using native
`Date.parse`. It should support ISO 8601 and RFC 2822. Other formats
are not recommended to parse without explicit `format` set.


[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
