<div align="center">
  <img src="images/avatar.png" width="80" alt="Аватар Хроноса: выполненное в чёрно-белом стиле изображение грозного античного лица полу-человека полу-часов" />
</div>

<br />

<div align="center">
  <a href="https://www.npmjs.com/package/@funboxteam/chronos">
    <img alt="npm" src="https://img.shields.io/static/v1?label=npm&message=v5.0.0&color=000&labelColor=888" />
  </a>
  
  <a href="https://www.npmjs.com/package/@funboxteam/chronos">
    <img alt="CI status" src="https://img.shields.io/static/v1?label=build&message=passing&color=000&labelColor=888" />
  </a>
  
  <a href="https://www.npmjs.com/package/@funboxteam/chronos">
    <img alt="Code coverage" src="https://img.shields.io/static/v1?label=coverage&message=99%25&color=000&labelColor=888" />
  </a>
</div>

<div align="center">
  <b>Хронос</b> — небольшая, иммутабельная, типизированная библиотека для работы с датами.<br/>
  Содержит всё необходимое и не раздувает бандл.
</div>

## Features

<img src="images/picture.png" align="right" width="250" alt="КДПВ Хроноса: высеченное в камне грозное античное лицо полу-человека полу-часов" />

- **Иммутабельные и чистые функции.** Каждая из них хранится в отдельном файле, не содержит сайд-эффектов, не мутирует параметры.
  При импорте функции в бандл добавляется только то, что необходимо для её работы, и ничего более.
- **ESM & CommonJS.** Работает c Node.js и браузере. Настройте самостоятельно список поддерживаемых браузеров для транспиляции ES6, чтобы получить минимальный набор полифиллов.  
- **TypeScript.** Каждая функция типизирована, и все типы поставляются вместе с пакетом.
- **Нативное АПИ.** Использует `Date` и `Intl` под капотом.
- **Только русская локаль.** Чтобы не добавлять ничего лишнего.

## Мотивация

Давным-давно, когда мы начинали разрабатывать наши фронтенд-проекты, мы выбрали самую популярную на тот момент библиотеку для работы с датами.
Мы использовали всего несколько методов, которые она предоставляла, но в бандл попали все существующие в ней, а в довесок и все имеющиеся локали.

Тогда мы настроили конфиги бандлера таким обарзом, чтобы он вырезал эти локали. Однако, та библиотека всё ещё была самой большой из тех, 
что мы использовали, но пользы от неё было совсем немного. 
Мы попробовали поискать библиотеку, которая бы решала необходимые нам задачи, и при этом была бы небольшой и с удобным АПИ, но таковых не нашлось.

Потому мы просто написали несколько небольших функций, которые делали дело.
А со временем этот набор функций разросся и превратился в Хроноса — простую, но удобную библиотеку для работы с датами, которая работает в каждом нашем проекте. 


## Содержание

- [Установка и использование](#установка-и-использование)
- [Типы](#типы)
  - [ChronosDate](#chronosdate)
  - [Duration](#duration)
- [Функции](#функции)
  - [addMinutes](#addminutes-addhours-adddays-addmonths-addyears)
  - [addHours](#addminutes-addhours-adddays-addmonths-addyears)
  - [addDays](#addminutes-addhours-adddays-addmonths-addyears)
  - [addMonths](#addminutes-addhours-adddays-addmonths-addyears)
  - [addYears](#addminutes-addhours-adddays-addmonths-addyears)
  - [subtractMinutes](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractyears)
  - [subtractHours](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractyears)
  - [subtractDays](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractyears)
  - [subtractMonths](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractyears)
  - [subtractYears](#subtractminutes-subtracthours-subtractdays-subtractmonths-subtractyears)
  - [formatDate](#formatdate)
  - [formatTimeString](#formattimestring)
  - [getMinutes](#getminutes-gethours-getday-getweek-getmonth-getyear)
  - [getHours](#getminutes-gethours-getday-getweek-getmonth-getyear)
  - [getDay](#getminutes-gethours-getday-getweek-getmonth-getyear)
  - [getWeek](#getminutes-gethours-getday-getweek-getmonth-getyear)
  - [getMonth](#getminutes-gethours-getday-getweek-getmonth-getyear)
  - [getYear](#getminutes-gethours-getday-getweek-getmonth-getyear)
  - [getWeekdayName](#getweekdayname-getmonthname)
  - [getMonthName](#getweekdayname-getmonthname)
  - [getDuration](#getduration)
  - [isSameMinute](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [isSameHour](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [isSameDay](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [isSameMonth](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [isSameYear](#issameminute-issamehour-issameday-issamemonth-issameyear)
  - [getDiffInMinutes](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffinmonths-getdiffinyears)
  - [getDiffInHours](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffinmonths-getdiffinyears)
  - [getDiffInDays](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffinmonths-getdiffinyears)
  - [getDiffInMonths](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffinmonths-getdiffinyears)
  - [getDiffInYears](#getdiffinminutes-getdiffinhours-getdiffindays-getdiffinmonths-getdiffinyears)
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
- [Благодарности](#благодарности)

## Установка и использование

Добавить пакет в зависимости проекта:

```bash
npm install --save @funboxteam/chronos
```

Импортировать необходимые функции в JS:

```bash
import { addDate } from '@funboxteam/chronos';
```

## Типы

Библиотека экспортирует несколько типов, доступных для использования где угодно. Но, что более важно, они используются
внутри для обеспечения одинакового поведения функций.

### ChronosDate

```typescript
declare type ChronosDate = Date | number | string;
```

Каждая функция, которая принимает дату в качестве первого параметра, ожидает получить или инстанс `Date`, 
или временную метку в виде строки или числа.

Временная метка может быть выражена как в секундах, так и в миллисекундах (т. е. `1596803254000` и `1596803254` — одно и то же значение).

## Duration

```typescript
declare type Duration = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
```

Тип, описывающий возвращаемое значение функций, которые работают временными интервалами.

## Функции

Каждая функция иммутабельна, а потому если передать в них инстанс `Date`, они всегда вернут новый инстанс `Date`, 
и не будут изменять переданный.

### [addMinutes](./lib/addMinutes.ts), [addHours](./lib/addHours.ts), [addDays](./lib/addDays.ts), [addMonths](./lib/addMonths.ts), [addYears](./lib/addYears.ts)

```typescript
(value: ChronosDate, quantity: number) => Date;
```

#### Параметры

- `value`, дата;
- `quantity`, количество единиц, которые нужно добавить.

#### Пример

```js
addDays(new Date('2020-01-01T00:00:00.000Z'), 1); // 2020-01-02T00:00:00.000Z

// 1577836800 — это 2020-01-01T00:00:00.000Z
addYears(1577836800, 1); // 2021-01-01T00:00:00.000Z

addMonths(new Date(2020, 0, 1), 1); // == new Date(2020, 1, 1);
addMonths(new Date(2020, 0, 31), 1); // == new Date(2020, 2, 2);
```

#### Важное замечание

При добавление месяцев к дате в JS нужно всегда учитывать количество дней в текущем и в получаемом месяце.

Так, если добавить 1 месяц с 31.01.2020 получится 02.03.2020, а не 29.02.2020, потому что не может быть 31.02.2020.


### [subtractMinutes](./lib/subtractMinutes.ts), [subtractHours](./lib/subtractHours.ts), [subtractDays](./lib/subtractDays.ts), [subtractMonths](./lib/subtractMonths.ts), [subtractYears](./lib/subtractYears.ts)

```typescript
(value: ChronosDate, quantity: number) => Date;
```

#### Параметры

- `value`, дата;
- `quantity`, количество единиц, которые нужно вычесть.

#### Пример

```js
subtractDays(new Date('2020-01-01T00:00:00.000Z'), 1); // 2019-12-31T00:00:00.000Z

// 1577836800 — это 2020-01-01T00:00:00.000Z
subtractYears(1577836800, 1); // 2019-01-01T00:00:00.000Z

subtractMonths(new Date(2020, 0, 1), 1); // == new Date(2019, 11, 1);
subtractMonths(new Date(2020, 1, 29), 1); // == new Date(2020, 0, 29);
```

#### Важное замечание

При вычитание месяцев из даты в JS нужно всегда учитывать количество дней в текущем и в получаемом месяце.

Так, если вычесть 1 месяц из 29.02.2020 получится 29.01.2020, а не 31.01.2020.


### [formatDate](./lib/formatDate.ts)

```typescript
(value: ChronosDate, format: string) => string;
```

#### Параметры

- `value`, дата;
- `format`, желаемый формат.

#### Доступные ключи в формате

| Тип        | Ключ   | Значение                                        |
|:-----------|:-------|:------------------------------------------------|
| Секунды    | `ss`   | 00, 01, 02, ..., 57, 58, 59                     |
| Минуты     | `mm`   | 00, 01, 02, ..., 57, 58, 59                     |
| Часы       | `HH`   | 00, 01, 02, ..., 21, 22, 23                     |
| Дни недели | `dddd` | понедельник, вторник, ..., суббота, воскресенье |
| Дни месяца | `DD`   | 01, 02, 03, ..., 29, 30, 31                     |
|            | `D`    | 1, 2, 3, ..., 29, 30, 31                        |
| Месяцы     | `MMMM` | январь, февраль, ..., ноябрь, декабрь           |
|            | `MMM`  | янв, фев, ..., ноя, дек                         |
|            | `MM`   | 01, 02, 03, ..., 10, 11, 12                     |
| Годы       | `YYYY` | Полный год, т. е.: 1885, 1955, 1985, 2015       |
|            | `YY`   | 00, 01, 02, ..., 97, 98, 99                     |
| Смещение   | `Z`    | -12:00, -11:00, ..., +13:00, +14:00             |

#### Пример

```js
formatDate(new Date(2020, 0, 1), 'YYYY-MM-DDTHH:mm:ssZ'); // '2020-01-01T00:00:00+03:00' (для GMT+3)

// 1577836800 — это 2020-01-01T00:00:00.000Z
formatDate(1577836800, 'HH:mm:ss'); // '03:00:00' (для GMT+3)
```

#### Важное замечание

На текущий момент поддерживается только русская локаль!


### [formatTimeString](./lib/formatTimeString.ts)

```typescript
(value: string, valueFormat: string, format: string) => string;
```

#### Параметры

- `value`, время;
- `valueFormat`, шаблон, описывающий формат `value`;
- `format`, желаемый формат.

#### Доступные ключи в формате

| Тип     | Ключ | Значение                    |
|:--------|:-----|:----------------------------|
| Секунды | `ss` | 00, 01, 02, ..., 57, 58, 59 |
| Минуты  | `mm` | 00, 01, 02, ..., 57, 58, 59 |
| Часы    | `HH` | 00, 01, 02, ..., 21, 22, 23 |
|         | `H`  | 0, 1, 2, ..., 21, 22, 23    |

#### Пример

```js
formatTime('22:00', 'HH:mm', 'HH:mm:ss'); // '22:00:00'
```


### [getMinutes](./lib/getMinutes.ts), [getHours](./lib/getHours.ts), [getDay](./lib/getDay.ts), [getWeek](./lib/getWeek.ts), [getMonth](./lib/getMonth.ts), [getYear](./lib/getYear.ts)

```typescript
(value: ChronosDate) => number;
```

#### Параметры

- `value`, дата.

#### Пример

```js
getDay(new Date(2020, 0, 1)); // 1;

// 1577836800 — это 2020-01-01T00:00:00.000Z
getYear(1577836800); // 2020
```

#### Важное замечание

`getWeek` возвращает номер недели, по порядку, с начала текущего года.


### [getWeekdayName](./lib/getWeekdayName.ts), [getMonthName](./lib/getMonthName.ts)

```typescript
(value: ChronosDate, format?: string) => string;
```

#### Параметры

- `value`, дата;
- `format`, формат возвращаемой строки. По умолчанию длинный (`'long'`), может быть короткий (`'short'`). 

#### Пример

```js
getWeekdayName(new Date(2020, 11, 30)); // 'среда' (11-й месяц в JS — это декабрь)
getWeekdayName(new Date(2020, 11, 30), 'short'); // 'ср'
getMonthName(new Date(2020, 0, 1)); // 'январь'
getMonthName(new Date(2020, 0, 1), 'short'); // 'янв'
```


### [getDuration](./lib/getDuration.ts)

```typescript
(seconds: number) => Duration;
```

#### Параметры

- `seconds`, интервал времени в секундах.

#### Пример

```js
getDuration(1000000); // { days: 11, hours: 13, minutes: 46, seconds: 40 }
```


### [isSameMinute](./lib/isSameMinute.ts), [isSameHour](./lib/isSameHour.ts), [isSameDay](./lib/isSameDay.ts), [isSameMonth](./lib/isSameMonth.ts), [isSameYear](./lib/isSameYear.ts)

```typescript
(firstValue: ChronosDate, secondValue: ChronosDate) => boolean;
```

#### Параметры

- `firstDate`, дата;
- `secondDate`, дата.

#### Пример

```js
// 1577750400 — это 2019-12-31T00:00:00.000Z
// 1577836800 — это 2020-01-01T00:00:00.000Z
isSameYear(1577750400, 1577836800); // false
```


### [getDiffInMinutes](./lib/getDiffInMinutes.ts), [getDiffInHours](./lib/getDiffInHours.ts), [getDiffInDays](./lib/getDiffInDays.ts), [getDiffInMonths](./lib/getDiffInMonths.ts), [getDiffInYears](./lib/getDiffInYears.ts)  

```typescript
(firstValue: ChronosDate, secondValue: ChronosDate) => number;
```

#### Параметры

- `firstDate`, дата;
- `secondDate`, дата.

#### Пример

```js
// 1577750400 — это 2019-12-31T00:00:00.000Z
// 1577836800 — это 2020-01-01T00:00:00.000Z
getDiffInDays(1577750400, 1577836800); // -1
```


### [getStartOfMinutes](./lib/getStartOfMinutes.ts), [getStartOfHours](./lib/getStartOfHours.ts), [getStartOfDay](./lib/getStartOfDay.ts), [getStartOfWeek](./lib/getStartOfWeek), [getStartOfMonth](./lib/getStartOfMonth.ts), [getStartOfYear](./lib/getStartOfYear.ts), [getStartOfDecade](./lib/getStartOfDecade.ts)

```typescript
(value: ChronosDate, diff?: number) => Date;
```

#### Параметры

- `value`, дата;
- `diff`, количество единиц, которые нужно добавить в итоговой дате. По умолчанию `0`.

#### Пример

```js
// 1577836800 — это 2020-01-01T00:00:00.000Z
getStartOfDay(1577836800); // 2019-12-31T21:00:00.000Z (для GMT+3)
getStartOfDay(1577836800, 1); // 2020-01-01T21:00:00.000Z (для GMT+3)
getStartOfDay(1577836800, -1); // 2019-12-30T21:00:00.000Z (для GMT+3)
```


### [getEndOfMinutes](./lib/getEndOfMinutes.ts), [getEndOfHours](./lib/getEndOfHours.ts), [getEndOfDay](./lib/getEndOfDay.ts), [getEndOfWeek](./lib/getEndOfWeek.ts), [getEndOfMonth](./lib/getEndOfMonth.ts), [getEndOfYear](./lib/getEndOfYear.ts), [getEndOfDecade](./lib/getEndOfDecade.ts)

```typescript
(value: ChronosDate, diff?: number) => Date;
```

#### Параметры

- `value`, дата;
- `diff`, количество единиц, которые нужно добавить в итоговой дате. По умолчанию `0`.

#### Пример

```js
// 1577836800 — это 2020-01-01T00:00:00.000Z
getEndOfDay(1577836800); // 2020-01-01T20:59:59.999Z (для GMT+3)
getEndOfDay(1577836800, 1); // 2020-01-02T20:59:59.999Z (для GMT+3)
getEndOfDay(1577836800, -1); // 2019-12-31T20:59:59.999Z (для GMT+3)
```


### [getRelativeDate](./lib/getRelativeDate.ts)

```typescript
(value: ChronosDate) => string;
```

#### Параметры

- `value`, дата.

#### Пример

```js
getRelativeDate(1577081613); // '2 месяца' (для 07.02.2020)
getRelativeDate(new Date()); // 'меньше минуты'
```


### [getUtcOffset](./lib/getUtcOffset.ts)

```typescript
(value: ChronosDate) => number;
```

#### Параметры

- `value`, дата.

#### Пример

```js
getUtcOffset(new Date(2020, 0, 1)); // 3 (для GMT+3)
```


### [getUnixTimestamp](./lib/getUnixTimestamp.ts)

```typescript
(value?: ChronosDate) => number;
```

#### Параметры

- `date`, объект Date. По умолчанию `new Date()`.

#### Пример

```js
// сейчас 2020-02-07T08:26:59.422Z
getUnixTimestamp(); // 1581064019 (unixtime от new Date())

getUnixTimestamp(new Date(2020, 0, 1)); // 1577826000 (для GMT+3)
```


### [getTimezoneName](./lib/getTimezoneName)

```typescript
() => string;
```

#### Пример

```js
getTimezoneName(); // 'Europe/Moscow' (для GMT+3 в ИЕ11 и для MSK в новых браузерах)
```

#### Важное замечение

В случае отсутствия поддержки Intl API в текущем браузере, будет возвращена ближайшая к пользователю таймзона,
смещение которое выражено _целым числом часов_.


### [isTimeValid](./lib/isTimeValid.ts)

```typescript
(value: string, format: string) => boolean;
```

#### Параметры

- `value`, строка с временем;
- `format`, строка с форматом, который нужно использовать для валидации.

#### Пример

```js
isTimeValid('22:30', 'HH:mm'); // true
```


### [parseDate](./lib/parseDate.ts)

```typescript
(value: string, format: string) => Date;
```

#### Параметры

- `value`, строка с датой;
- `format`, строка с форматом, который нужно использовать для парсинга.

#### Доступные ключи в формате

| Тип         | Ключ   | Распознаваемые значения                 |
|:------------|:-------|:----------------------------------------|
| День месяца | `DD`   | 01, 02, 03, ..., 29, 30, 31             |
|             | `D`    | 1, 2, 3, ..., 29, 30, 31                |
| Месяц       | `MM`   | 01, 02, 03, ..., 10, 11, 12             |
| Год         | `YYYY` | Full year, e.g.: 1885, 1955, 1985, 2015 |
|             | `YY`   | 00, 01, 02, ..., 97, 98, 99             |

#### Пример

```js
parseDate('2000-01-21', 'YYYY-MM-DD'); // == new Date(2000, 0, 21)
parseDate('2020-01-01T00:00:00+03:00'); // == new Date(2020, 0, 1) (для GMT+3)
```

#### Important notes

Если `format` не передан, то функция пытается распарсить `value` используя встроенный `Date.parse`.
Теоретически он поддерживает ISO 8691 и RFC 2822. Другие форматы не рекомендуется парсить без явного указания `format`.


## Благодарности

Картинки для репозитория нарисовал [Игорь Гарибальди](https://pandabanda.com/).


[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_grayscale.svg)](https://funbox.ru)
