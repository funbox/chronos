<div align="center">
  <img src="images/avatar.png" width="80" alt="Chronos avatar: white-on-black gloomy antique half-human half-clock face" />
</div>

<br />

<div align="center">
  <a href="https://www.npmjs.com/package/@funboxteam/chronos">
    <img alt="npm" src="https://img.shields.io/npm/v/@funboxteam/chronos.svg?color=000&labelColor=888" />
  </a>
  
  <a href="https://github.com/funbox/chronos/actions/workflows/node.js.yml">
    <img alt="CI status" src="https://img.shields.io/github/actions/workflow/status/funbox/chronos/node.js.yml?color=000&labelColor=888" />
  </a>
  
  <a href="https://coveralls.io/github/funbox/chronos">
    <img alt="Code coverage" src="https://img.shields.io/coveralls/github/funbox/chronos?color=000&labelColor=888">
  </a>
</div>

<div align="center">
  <b>Chronos</b> is a tiny, immutable, typed date manipulation library which does not bloat your JS bundle,<br/>
  but does everything you need.
</div>

## Features

<img src="images/picture.png" align="right" width="250" alt="Chronos picture: gloomy antique half-human half-clock carved in stone face" />

- **Immutable & pure function per file.** Every function does not have side effects, nor mutates the params.
  If you use a function, only this function is added to your bundle, not the whole lib.
- **ESM & CommonJS.** Works in Node.js and browser. Setup the target browsers for transpiling ES6 by your own in your bundler.  
- **TypeScript.** Every function is typed and the typings are bundled with the package.
- **Native API.** Uses `Date` and `Intl` under the hood.
- **Russian locale only.** And it has docs [in Russian](./README.ru.md).

## Rationale

When we started to develop our projects, we picked the most popular date library that existed back then. 
We had used only two methods it provided, but got all the bundled ones, with all the possible locales.

OK, we set up our bundler configs to remove those locales, but still that library was the biggest that we used, but the profit wasn't so huge.
We decided to look around for the date library that we need, but all of them had a lot of features that we didn't want to use.

So we replaced it with small and lightweight functions that just worked. 
Step by step those functions have evolved into Chronos—simple yet useful date manipulation library that works in every our project.


## Table of Contents

- [Getting Started](#getting-started)
- [Types](#types)
  - [ChronosDate](#chronosdate)
  - [Duration](#duration)
- [Functions](#functions)
  - [addMinutes](#addminutes-addhours-adddays-addmonths-addcalendarmonths-addyears)
  - [addHours](#addminutes-addhours-adddays-addmonths-addcalendarmonths-addyears)
  - [addDays](#addminutes-addhours-adddays-addmonths-addcalendarmonths-addyears)
  - [addMonths](#addminutes-addhours-adddays-addmonths-addcalendarmonths-addyears)
  - [addCalendarMonths](#addminutes-addhours-adddays-addmonths-addcalendarmonths-addyears)
  - [addYears](#addminutes-addhours-adddays-addmonths-addcalendarmonths-addyears)
  - [subtractMinutes](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractcalendarmonths-subtractyears)
  - [subtractHours](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractcalendarmonths-subtractyears)
  - [subtractDays](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractcalendarmonths-subtractyears)
  - [subtractMonths](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractcalendarmonths-subtractyears)
  - [subtractCalendarMonths](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractcalendarmonths-subtractyears)
  - [subtractYears](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractcalendarmonths-subtractyears)
  - [formatDate](#formatdate)
  - [formatTimeString](#formattimestring)
  - [getMinutes](#getminutes-gethours-getday-getmonth-getyear)
  - [getHours](#getminutes-gethours-getday-getmonth-getyear)
  - [getDay](#getminutes-gethours-getday-getmonth-getyear)
  - [getMonth](#getminutes-gethours-getday-getmonth-getyear)
  - [getYear](#getminutes-gethours-getday-getmonth-getyear)
  - [getWeekdayName](#getweekdayname-getmonthname)
  - [getMonthName](#getweekdayname-getmonthname)
  - [getDuration](#getduration)
  - [isSameMinute](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [isSameHour](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [isSameDay](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [isSameMonth](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [isSameYear](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [getDiffInMinutes](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffincalendardays-getdiffinmonths-getdiffincalendarmonths-getdiffinyears-getdiffincalendaryears)
  - [getDiffInHours](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffincalendardays-getdiffinmonths-getdiffincalendarmonths-getdiffinyears-getdiffincalendaryears)
  - [getDiffInDays](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffincalendardays-getdiffinmonths-getdiffincalendarmonths-getdiffinyears-getdiffincalendaryears)
  - [getDiffInCalendarDays](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffincalendardays-getdiffinmonths-getdiffincalendarmonths-getdiffinyears-getdiffincalendaryears)
  - [getDiffInMonths](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffincalendardays-getdiffinmonths-getdiffincalendarmonths-getdiffinyears-getdiffincalendaryears)
  - [getDiffInCalendarMonths](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffincalendardays-getdiffinmonths-getdiffincalendarmonths-getdiffinyears-getdiffincalendaryears)
  - [getDiffInYears](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffincalendardays-getdiffinmonths-getdiffincalendarmonths-getdiffinyears-getdiffincalendaryears)
  - [getDiffInCalendarYears](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffincalendardays-getdiffinmonths-getdiffincalendarmonths-getdiffinyears-getdiffincalendaryears)
  - [getStartOfMinutes](#getstartofminutes-getstartofhours-getstartofday-getstartofweek-getstartofmonth-getstartofyear-getstartofdecade)
  - [getStartOfHours](#getstartofminutes-getstartofhours-getstartofday-getstartofweek-getstartofmonth-getstartofyear-getstartofdecade)
  - [getStartOfDay](#getstartofminutes-getstartofhours-getstartofday-getstartofweek-getstartofmonth-getstartofyear-getstartofdecade)
  - [getStartOfWeek](#getstartofminutes-getstartofhours-getstartofday-getstartofweek-getstartofmonth-getstartofyear-getstartofdecade)
  - [getStartOfMonth](#getstartofminutes-getstartofhours-getstartofday-getstartofweek-getstartofmonth-getstartofyear-getstartofdecade)
  - [getStartOfYear](#getstartofminutes-getstartofhours-getstartofday-getstartofweek-getstartofmonth-getstartofyear-getstartofdecade)
  - [getStartOfDecade](#getstartofminutes-getstartofhours-getstartofday-getstartofweek-getstartofmonth-getstartofyear-getstartofdecade)
  - [getEndOfMinutes](#getendofminutes-getendofhours-getendofday-getendofweek-getendofmonth-getendofyear-getendofdecade)
  - [getEndOfHours](#getendofminutes-getendofhours-getendofday-getendofweek-getendofmonth-getendofyear-getendofdecade)
  - [getEndOfDay](#getendofminutes-getendofhours-getendofday-getendofweek-getendofmonth-getendofyear-getendofdecade)
  - [getEndOfWeek](#getendofminutes-getendofhours-getendofday-getendofweek-getendofmonth-getendofyear-getendofdecade)
  - [getEndOfMonth](#getendofminutes-getendofhours-getendofday-getendofweek-getendofmonth-getendofyear-getendofdecade)
  - [getEndOfYear](#getendofminutes-getendofhours-getendofday-getendofweek-getendofmonth-getendofyear-getendofdecade)
  - [getEndOfDecade](#getendofminutes-getendofhours-getendofday-getendofweek-getendofmonth-getendofyear-getendofdecade)
  - [getRelativeDate](#getrelativedate)
  - [getUtcOffset](#getutcoffset)
  - [getUnixTimestamp](#getunixtimestamp)
  - [getTimezoneName](#gettimezonename)
  - [isTimeValid](#istimevalid)
  - [parseDate](#parsedate)
- [Credits](#credits)

## Getting Started

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

Every function that accepts date as a first param expects to get an instance of `Date`, or a timestamp as number or string.

The timestamp may be present as seconds or milliseconds (e.g. `1596803254000` and `1596803254` is the same value).

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

### [addMinutes](./lib/addMinutes.ts), [addHours](./lib/addHours.ts), [addDays](./lib/addDays.ts), [addMonths](./lib/addMonths.ts), [addCalendarMonths](./lib/addCalendarMonths.ts), [addYears](./lib/addYears.ts)

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

addCalendarMonths(new Date(2020, 0, 1), 1); // == new Date(2020, 1, 1);
addCalendarMonths(new Date(2020, 0, 31), 1); // == new Date(2020, 1, 29);
```

### [subtractMinutes](./lib/subtractMinutes.ts), [subtractHours](./lib/subtractHours.ts), [subtractDays](./lib/subtractDays.ts), [subtractMonths](./lib/subtractMonths.ts), [subtractCalendarMonths](./lib/subtractCalendarMonths.ts), [subtractYears](./lib/subtractYears.ts)

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
subtractMonths(new Date(2020, 2, 31), 1); // == new Date(2020, 2, 2);

subtractCalendarMonths(new Date(2020, 0, 1), 1); // == new Date(2019, 11, 1);
subtractCalendarMonths(new Date(2020, 2, 31), 1); // == new Date(2020, 1, 29);
```

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
| UTC time offset | `ZZ`   | -1200, -1100, ..., +1300, +1400                 |
|                 | `Z`    | -12:00, -11:00, ..., +13:00, +14:00             |
   
#### Example

```js
formatDate(new Date(2020, 0, 1), 'YYYY-MM-DDTHH:mm:ssZ'); // '2020-01-01T00:00:00+03:00' (for GMT+3)

// 1577836800 is 2020-01-01T00:00:00.000Z
formatDate(1577836800, 'HH:mm:ss'); // '03:00:00' (for GMT+3)
```

#### Important notes

Only Russian locale is supported for now!


### [formatTimeString](./lib/formatTimeString.ts)

```typescript
(value: string, valueFormat: string, format: string) => string;
```

#### Params

- `value`, time string;
- `valueFormat`, template describing `value` format;
- `format`, desired format.

#### Available format tokens

| Type   | Token | Value                       |
|:-------|:------|:----------------------------|
| Second | `ss`  | 00, 01, 02, ..., 57, 58, 59 |
| Minute | `mm`  | 00, 01, 02, ..., 57, 58, 59 |
| Hour   | `HH`  | 00, 01, 02, ..., 21, 22, 23 |
|        | `H`   | 0, 1, 2, ..., 21, 22, 23    |

#### Example

```js
formatTimeString('22:00', 'HH:mm', 'HH:mm:ss'); // '22:00:00'
```


### [getMinutes](./lib/getMinutes.ts), [getHours](./lib/getHours.ts), [getDay](./lib/getDay.ts), [getMonth](./lib/getMonth.ts), [getYear](./lib/getYear.ts)

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


### [getDiffInMinutes](./lib/getDiffInMinutes.ts), [getDiffInHours](./lib/getDiffInHours.ts), [getDiffInDays](./lib/getDiffInDays.ts), [getDiffInCalendarDays](./lib/getDiffInCalendarDays.ts), [getDiffInMonths](./lib/getDiffInMonths.ts), [getDiffInCalendarMonths](./lib/getDiffInCalendarMonths.ts), [getDiffInYears](./lib/getDiffInYears.ts), [getDiffInCalendarYears](./lib/getDiffInCalendarYears.ts)

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


### [getUnixTimestamp](./lib/getUnixTimestamp.ts)

```typescript
(date?: Date) => number;
```

#### Params

- `date`, Date instance. `new Date()` by default.

#### Example

```js
// now is 2020-02-07T08:26:59.422Z
getUnixTimestamp(); // 1581064019 (unix timestamp for new Date())

getUnixTimestamp(new Date(2020, 0, 1)); // 1577826000 (for GMT+3)
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
which has _integer hours offset_.


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
      
| Type         | Token  | Recognized values                       |
|:-------------|:-------|:----------------------------------------|
| Day of Month | `DD`   | 01, 02, 03, ..., 29, 30, 31             |
|              | `D`    | 1, 2, 3, ..., 29, 30, 31                |
| Month        | `MM`   | 01, 02, 03, ..., 10, 11, 12             |
| Year         | `YYYY` | Full year, e.g.: 1885, 1955, 1985, 2015 |
|              | `YY`   | 00, 01, 02, ..., 97, 98, 99             |

#### Example

```js
parseDate('2000-01-21', 'YYYY-MM-DD'); // == new Date(2000, 0, 21)
parseDate('2020-01-01T00:00:00+03:00'); // == new Date(2020, 0, 1) (for GMT+3)
```

#### Important notes

If `format` is not passed it tries to parse `value` using native
`Date.parse`. It should support ISO 8601 and RFC 2822. Other formats
are not recommended to parse without explicit `format` set.


## Credits

Project's pictures were made by [Igor Garybaldi](https://pandabanda.com/).


[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_grayscale.svg)](https://funbox.ru)
