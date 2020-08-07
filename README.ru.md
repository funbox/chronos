# @funboxteam/chronos

[![npm](https://img.shields.io/npm/v/@funboxteam/chronos.svg)](https://www.npmjs.com/package/@funboxteam/chronos)

Библиотека для работы с датой.


## Установка

Добавить пакет в зависимости проекта:

```bash
npm install --save @funboxteam/chronos
```

Импортировать необходимые функции в JS:

```bash
import { addDate } from '@funboxteam/chronos';
```


## Список доступных функций

### [addMinutes](./lib/addMinutes.ts), [addHours](./lib/addHours.ts), [addDays](./lib/addDays.ts), [addMonths](./lib/addMonths.ts), [addYears](./lib/addYears.ts)

Добавляют единицу времени и возвращают новый объект Date.

Стоит иметь в виду, что в JS при добавлении месяцев к дате в последних числах 
месяца (28-31) нужно учитывать количество дней в текущем и итоговом месяце.

**Использование**

```js
addDays(date, quantity);
addMonths(date, quantity);
addYears(date, quantity);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `quantity` – Number, количество единиц.

Пример:

```js
addDays(new Date('2020-01-01T00:00:00.000Z'), 1); // 2020-01-02T00:00:00.000Z

// 1577836800 — это 2020-01-01T00:00:00.000Z
addYears(1577836800, 1); // 2021-01-01T00:00:00.000Z

addMonths(new Date(2020, 0, 1), 1); // == new Date(2020, 1, 1);
addMonths(new Date(2020, 0, 31), 1); // == new Date(2020, 2, 2);
```


### [subtractMinutes](./lib/subtractMinutes.ts), [subtractHours](./lib/subtractHours.ts), [subtractDays](./lib/subtractDays.ts), [subtractMonths](./lib/subtractMonths.ts), [subtractYears](./lib/subtractYears.ts)

Вычитают единицу времени и возвращают новый объект Date.

Стоит иметь в виду, что в JS при вычитании месяцев из даты в последних числах 
месяца (28-31) нужно учитывать количество дней в текущем и итоговом месяце.

**Использование**

```js
subtractDays(date, quantity);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `quantity` – Number, количество единиц.

Пример:

```js
subtractDays(new Date('2020-01-01T00:00:00.000Z'), 1); // 2019-12-31T00:00:00.000Z

// 1577836800 — это 2020-01-01T00:00:00.000Z
subtractYears(1577836800, 1); // 2019-01-01T00:00:00.000Z

subtractMonths(new Date(2020, 0, 1), 1); // == new Date(2019, 11, 1);
subtractMonths(new Date(2020, 1, 29), 1); // == new Date(2020, 0, 29);
```


### [formatDate](./lib/formatDate.ts)

Форматирует дату в строку по указанному шаблону. 

**Использование**

```js
formatDate(date, format);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `format` – String, шаблон форматирования времени.    

| Шаблон | Описание                                          |
|--------|---------------------------------------------------|
| `ss`   | Двузначное представление секунд                   |
| `mm`   | Двузначное представление минут                    |
| `HH`   | Двузначное представление часа                     |
| `dddd` | Название дня недели                               |
| `DD`   | Двузначное представление дня месяца               |
| `D`    | Значение дня месяца от 1 до 31                    |
| `MMMM` | Название месяца                                   |
| `MMM`  | Короткое представление названия месяца            |
| `MM`   | Двузначное представление месяца                   |
| `YYYY` | Значение года                                     |
| `YY`   | Две последние цифры значения года                 |
| `Z`    | Представление смещения таймзоны в часах и минутах |

Пример:

```js
formatDate(new Date(2020, 0, 1), 'YYYY-MM-DDTHH:mm:ssZ'); // '2020-01-01T00:00:00+03:00' (для GMT+3)

// 1577836800 — это 2020-01-01T00:00:00.000Z
formatDate(1577836800, 'HH:mm:ss'); // '03:00:00' (для GMT+3)
```


### [formatTime](./lib/formatTime.ts)

Форматирует строку времени по указанному шаблону.

**Использование**

```js
formatTime(value, valueFormat, format);
```

Параметры:
- `value` – String, представление времени;
- `valueFormat` – String, шаблон переданной строки времени;
- `format` – String, шаблон форматирования времени.

| Шаблон | Описание                        |
|--------|---------------------------------|
| `ss`   | Двузначное представление секунд |
| `mm`   | Двузначное представление минут  |
| `HH`   | Двузначное представление часа   |
| `H`    | Представление часа от 0 до 23   |

Пример:

```js
formatTime('22:00', 'HH:mm', 'HH:mm:ss'); // '22:00:00'
```


### [getMinutes](./lib/getMinutes.ts), [getHours](./lib/getHours.ts), [getDay](./lib/getDay.ts), [getWeek](./lib/getWeek.ts), [getMonth](./lib/getMonth.ts), [getYear](./lib/getYear.ts)

Возвращает единицу времени.

_`getWeek` возвращает номер недели начиная с начала текущего года._

**Использование**

```js
getDay(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String).

Пример:

```js
getDay(new Date(2020, 0, 1)); // 1;

// 1577836800 — это 2020-01-01T00:00:00.000Z
getYear(1577836800); // 2020
```


### [getWeekdayName](./lib/getWeekdayName.ts), [getMonthName](./lib/getMonthName.ts)

Возвращает название единицы времени.

**Использование**

```js
getWeekdayName(date, format);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `format` – String, формат названия единицы времени. По умолчанию длинный 
(`'long'`), может быть короткий (`'short'`). 

Пример:

```js
getWeekdayName(new Date(2020, 11, 30)); // 'среда' (11-й месяц в JS — это декабрь)
getWeekdayName(new Date(2020, 11, 30), 'short'); // 'ср'
getMonthName(new Date(2020, 0, 1)); // 'январь'
getMonthName(new Date(2020, 0, 1), 'short'); // 'янв'
```


### [getDuration](./lib/getDuration.ts)

Возвращает объект, который содержит значение интервала времени в днях, часах, 
минутах и секундах.

**Использование**

```js
getDuration(seconds);
```

Параметры:
- `seconds` – Number, интервал времени в секундах.

Пример:

```js
getDuration(1000000); // { days: 11, hours: 13, minutes: 46, seconds: 40 }
```


### [isSameMinute](./lib/isSameMinute.ts), [isSameHour](./lib/isSameHour.ts), [isSameDay](./lib/isSameDay.ts), [isSameMonth](./lib/isSameMonth.ts), [isSameYear](./lib/isSameYear.ts)

Проверяет равенство единицы времени двух дат.

**Использование**

```js
isSameYear(firstDate, secondDate);
```

Параметры:
- `firstDate` – объект Date или временная метка Unix (Number, String);
- `secondDate` – объект Date или временная метка Unix (Number, String).

Пример:

```js
// 1577750400 — это 2019-12-31T00:00:00.000Z
// 1577836800 — это 2020-01-01T00:00:00.000Z
isSameYear(1577750400, 1577836800); // false
```


### [getDiffInMinutes](./lib/getDiffInMinutes.ts), [getDiffInHours](./lib/getDiffInHours.ts), [getDiffInDays](./lib/getDiffInDays.ts), [getDiffInMonths](./lib/getDiffInMonths.ts), [getDiffInYears](./lib/getDiffInYears.ts)  

Возвращает значение разницы в единицах времени двух дат.

**Использование**

```js
getDiffInDays(firstDate, secondDate);
```

Параметры:
- `firstDate` – объект Date или временная метка Unix (Number, String);
- `secondDate` – объект Date или временная метка Unix (Number, String).

Пример:

```js
// 1577750400 — это 2019-12-31T00:00:00.000Z
// 1577836800 — это 2020-01-01T00:00:00.000Z
getDiffInDays(1577750400, 1577836800); // -1
```


### [getStartOfMinutes](./lib/getStartOfMinutes.ts), [getStartOfHours](./lib/getStartOfHours.ts), [getStartOfDay](./lib/getStartOfDay.ts), [getStartOfWeek](./lib/getStartOfWeek), [getStartOfMonth](./lib/getStartOfMonth.ts), [getStartOfYear](./lib/getStartOfYear.ts), [getStartOfDecade](./lib/getStartOfDecade.ts)

Возвращает объект даты начала единицы времени.

**Использование**

```js
getStartOfDay(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `diff` – Number. Выражается в единицах, о которых идёт речь в функции. 
Добавляется к итоговой дате. По умолчанию `0`.

Пример:

```js
// 1577836800 — это 2020-01-01T00:00:00.000Z
getStartOfDay(1577836800); // 2019-12-31T21:00:00.000Z (для GMT+3)
getStartOfDay(1577836800, 1); // 2020-01-01T21:00:00.000Z (для GMT+3)
getStartOfDay(1577836800, -1); // 2019-12-30T21:00:00.000Z (для GMT+3)
```


### [getEndOfMinutes](./lib/getEndOfMinutes.ts), [getEndOfHours](./lib/getEndOfHours.ts), [getEndOfDay](./lib/getEndOfDay.ts), [getEndOfWeek](./lib/getEndOfWeek.ts), [getEndOfMonth](./lib/getEndOfMonth.ts), [getEndOfYear](./lib/getEndOfYear.ts), [getEndOfDecade](./lib/getEndOfDecade.ts)

Возвращает объект даты окончания единицы времени.

**Использование**

```js
getEndOfDay(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `diff` – Number. Выражается в единицах, о которых идёт речь в функции. 
Добавляется к итоговой дате. По умолчанию `0`.

Пример:

```js
// 1577836800 — это 2020-01-01T00:00:00.000Z
getEndOfDay(1577836800); // 2020-01-01T20:59:59.999Z (для GMT+3)
getEndOfDay(1577836800, 1); // 2020-01-02T20:59:59.999Z (для GMT+3)
getEndOfDay(1577836800, -1); // 2019-12-31T20:59:59.999Z (для GMT+3)
```


### [getRelativeDate](./lib/getRelativeDate.ts)

Возвращает строку — временной интервал между датой и текущим временем.

**Использование**

```js
getRelativeDate(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String).

Пример:

```js
getRelativeDate(1577081613); // '2 месяца' (для 07.02.2020)
getRelativeDate(new Date()); // 'меньше минуты'
```


### [getUtcOffset](./lib/getUtcOffset.ts)

Возвращает значение смещения временной зоны относительно UTC, выраженного целым 
числом часов.

**Использование**

```js
getUtcOffset(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String).

Пример:

```js
getUtcOffset(new Date(2020, 0, 1)); // 3 (для GMT+3)
```


### [getTime](./lib/getTime.ts)

Возвращает значение временной метки в секундах.

**Использование**

```js
getTime(date);
```

Параметры:
- `date` – объект Date.

Пример:

```js
// сейчас 2020-02-07T08:26:59.422Z
getTime(); // 1581064019 (unixtime от new Date())

getTime(new Date(2020, 0, 1)); // 1577826000 (для GMT+3)
```


### [getTimezoneName](./lib/getTimezoneName)

Возвращает название текущей таймзоны. 

В случае отсутсвия поддержки получения таймзоны в Intl API возвращает название 
ближайшей к пользователю таймзоны со смещением, выраженным целым числом часов. 

**Использование**

```js
getTimezoneName();
```

Пример:

```js
getTimezoneName(); // 'Europe/Moscow' (для GMT+3 в ИЕ11 и для MSK в новых браузерах)
```


### [isTimeValid](./lib/isTimeValid.ts)

Проверяет валидность строки времени по шаблону.

**Использование**

```js
isTimeValid(value, format);
```

Параметры:
- `value` – String, строка времени;
- `format` – String, шаблон представления времени.

Пример:

```js
isTimeValid('22:30', 'HH:mm'); // true
```


### [parseDate](./lib/parseDate.ts)

Возвращает объект даты указанной строки времени. 

В случае отсутствия параметра `format`, парсит строку, используя нативный метод 
`Date.parse.` Можно передать строку формата ISO 8601 или RFC2822. Остальные 
строковые форматы даты без параметра `format` парсить не рекомендуется.

**Использование**

```js
parseDate(value, format);
```

Параметры:
- `value` – String, представление даты;
- `format` – String, шаблон указанной даты.

| Шаблон | Описание                             |
|--------|--------------------------------------|
| `DD`   | Двузначное представление дня месяца  |
| `D`    | Значение дня месяца от 1 до 31       |
| `MM`   | Двузначное представление месяца      |
| `YYYY` | Значение года                        |
| `YY`   | Две последние цифры значения года    |

Пример:

```js
parseDate('2000-01-21', 'YYYY-MM-DD'); // == new Date(2000, 0, 21)
parseDate('2020-01-01T00:00:00+03:00'); // == new Date(2020, 0, 1) (для GMT+3)
```

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
