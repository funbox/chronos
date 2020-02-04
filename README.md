# @funboxteam/chronos

## Описание

Библиотека для работы с датой.

### Установка

Добавить пакет в зависимости
```bash
npm install --save @funboxteam/chronos
```

Импортировать необходимые функции
```bash
import { addDate } from @funboxteam/chronos
```

### Список доступных функций

### [addDays](./lib/addDays.js), [addHours](./lib/addHours.js), [addMinutes](./lib/addMinutes.js), [addMonths](./lib/addMonths.js), [addYears](./lib/addYears.js)

Добавляет количество дней, месяцев или лет и возвращает новый объект Date.

**Использование**
```bash
addDays(date, quantity);
addMonths(date, quantity);
addYears(date, quantity);
```
Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `quantity` – Number, количество единиц.

Пример
```bash
addDays(new Date(), 1);

addYears(1577826000, 1);
```

### [subtractDays](./lib/subtractDays.js), [subtractHours](./lib/subtractHours.js), [subtractMinutes](./lib/subtractMinutes.js), [subtractMonths](./lib/subtractMonths.js), [subtractYears](./lib/subtractYears.js)

Удаляет количество дней, месяцев или лет и возвращает новый объект Date.

**Использование**
```bash
subtractDays(date, quantity);
```
Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `quantity` – Number, количество единиц.

Пример
```bash
subtractDays(new Date(), 1);

subtractYears(1577826000, 1);
```

### [formatDate](./lib/formatDate.js)

Форматирует дату в строку по указанному шаблону. 

**Использование**
```bash
formatDate(date, format);
```
Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `format` – String, шаблон форматирования времени.    
      
| Значение  | Описание  |
|---|---|
| `ss`  | Двузначное представление секунд  |
| `mm`  | Двузначное представление минут  |
| `HH` | Двузначное представление часа  |
| `dddd`  | Название дня недели |
| `DD`  | Двузначное представление дня месяца  |
| `D` | Значение дня месяца от 1 до 31 |
| `MMMM` | Название месяца  |
| `MM` | Двузначное представление месяца |
| `YYYY`  | Значение года |
| `YY`  | Две последние цифры значения года |
| `Z`  | Представление смещения таймзоны в часах и минутах |
    
Пример
```bash
formatDate(new Date(2020, 0, 1), 'YYYY-MM-DDTHH:mm:ssZ'); // 2020-01-01T00:00:00+03:00

formatDate(1577826000, 'HH:mm:ss');
```

### [formatTime](./lib/formatTime.js)

Форматирует строку времени по указанному шаблону.

**Использование**
```bash
formatTime(value, valueFormat, format);

```
Параметры:
- `value` – String, представление времени;
- `valueFormat` – String, шаблон переданной строки времени;
- `format` – String, шаблон форматирования времени.

| Значение  | Описание  |
|---|---|
| `ss`  | Двузначное представление секунд  |
| `mm`  | Двузначное представление минут  |
| `H` |  Представление часа от 0 до 23  |
| `HH` | Двузначное представление часа  |

Пример
```bash
formatTime('22:00', 'HH:mm', 'HH:mm:ss'); // '22:00:00'
```

### [getDay](./lib/getDay.js), [getHours](./lib/getHours.js), [getMinutes](./lib/getMinutes.js), [getMonth](./lib/getMonth.js), [getYear](./lib/getYear.js), [getWeek](./lib/getWeek.js)

Возвращает указанную единицу времени.

**Использование**
```bash
getDay(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String).

`getWeek` возвращает номер недели начиная с начала текущего года. 

Пример
```bash
getDay(new Date(2020, 0, 1));

getYear(1577826000);
```

### [getWeekdayName](./lib/getWeekdayName.js), [getMonthName](./lib/getMonthName.js)

Возвращает название единицы времени.

**Использование**
```bash
getWeekdayName(date, format);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `format` – String, формат названия единицы времени. По умолчанию длинный – 'long', может быть короткий – 'short'. 

Пример
```bash
getWeekdayName(new Date(2020, 11, 30)); // понедельник
getWeekdayName(new Date(2020, 11, 30), 'short'); // пн
getMonthName(new Date(2020, 0, 1)); // январь
getMonthName(new Date(2020, 0, 1), 'short'); // янв
```

### [getDuration](./lib/getDuration.js)

Возвращает объект, который содержит значение интервала времени в днях, часах и минутах.

**Использование**
```bash
getDuration(seconds);
```

Параметры:
- `seconds` – Number, интервал времени в секундах.

Пример
```bash
getDuration(1000000); // { days: 11, hours: 13, minutes: 46, seconds: 40 }
```

### [isSameDay](./lib/isSameDay.js), [isSameHour](./lib/isSameHour.js), [isSameMinute](./lib/isSameMinute.js), [isSameMonth](./lib/isSameMonth.js), [isSameYear](./lib/isSameYear.js)

Проверяет равенство единицы времени двух дат.

**Использование**
```bash
isSameYear(firstDate, secondDate);
```

Параметры:
- `firstDate` – объект Date или временная метка Unix (Number, String);
- `secondDate` – объект Date или временная метка Unix (Number, String).

Пример
```bash
isSameYear(1577826000, 1577912400);
```

### [getDiffInDays](./lib/getDiffInDays.js), [getDiffInHours](./lib/getDiffInHours.js), [getDiffInMinutes](./lib/getDiffInMinutes.js), [getDiffInMonths](./lib/getDiffInMonths.js), [getDiffInYears](./lib/getDiffInYears.js)  

Возвращает значение разницы в единицах времени двух дат.

**Использование**
```bash
getDiffInDays(firstDate, secondDate);
```

Параметры:
- `firstDate` – объект Date или временная метка Unix (Number, String);
- `secondDate` – объект Date или временная метка Unix (Number, String).

Пример
```bash
getDiffInDays(1577826000, 1577912400);
```

### [getStartOfDay](./lib/getStartOfDay.js), [getStartOfDecade](./lib/getStartOfDecade.js), [getStartOfHours](./lib/getStartOfHours.js), [getStartOfMinutes](./lib/getStartOfMinutes.js), [getStartOfMonth](./lib/getStartOfMonth.js), [getStartOfWeek](./lib/getStartOfWeek), [getStartOfYear](./lib/getStartOfYear.js)

Возвращает объект даты начала единицы времени.

**Использование**
```bash
getStartOfDay(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `diff` – объект Date или временная метка Unix (Number, String).

Пример
```bash
getStartOfDay(1577912400);
getStartOfDay(1577912400, 1);
getStartOfDay(1577912400, -1);
```

### [getEndOfDay](./lib/getEndOfDay.js), [getEndOfDecade](./lib/getEndOfDecade.js), [getEndOfHours](./lib/getEndOfHours.js), [getEndOfMinutes](./lib/getEndOfMinutes.js), [getEndOfMonth](./lib/getEndOfMonth.js), [getEndOfWeek](./lib/getEndOfWeek.js), [getEndOfYear](./lib/getEndOfYear.js)

Возвращает объект даты окончания единицы времени.

**Использование**
```bash
getEndOfDay(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String);
- `diff` – Number, количество единиц добить / вычесть из даты.

Пример
```bash
getEndOfDay(1577912400);
getEndOfDay(1577912400, 1);
getEndOfDay(1577912400, -1);
```

### [getRelativeDate](./lib/getRelativeDate.js)

Возвращает временной интервал между датой и текущим временем в виде строки.

**Использование**
```bash
getRelativeDate(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String).

Пример
```bash
getRelativeDate(1577081613); // 5 часов
getRelativeDate(new Date()); // меньше минуты
```

### [getUtcOffset](./lib/getUtcOffset.js)

Возвращает значение смещения временной зоны относительно UTC в часах.

**Использование**
```bash
getUtcOffset(date);
```

Параметры:
- `date` – объект Date или временная метка Unix (Number, String).

Пример
```bash
getUtcOffset(new Date(2020, 0, 1);
```

### [getTime](./lib/getTime.js)

Возвращает значение временной метки в секундах.

**Использование**
```bash
getTime(date);
```

Параметры:
- `date` – объект Date.

Пример
```bash
getTime(); // unixtime от new Date();

getTime(new Date(2020, 0, 1);
```

### [getTimezoneName](./lib/getTimezoneName)

Возвращает название текущей таймзоны. 
В случае отсутсвия поддержки Intl API для получения таймзоны возвращает 
название ближайшей к пользователю таймзоны со смещением, выраженным целым числом часов. 

**Использование**
```bash
getTimezoneName();
```

Пример
```bash
getTimezoneName(); // 'Europe/Moscow';
```

### [isTimeValid](./lib/isTimeValid.js)

Проверяет валидность строки времени по шаблону

**Использование**
```bash
isTimeValid(value, format);
```

Параметры:
- `value` – String, строка времени;
- `format` – String, шаблон представления времени.

Пример
```bash
isTimeValid('22:30', 'HH:mm');
```

### [parseDate](./lib/parseDate.js)

Возвращает объект даты указанной строки времени

**Использование**
```bash
parseDate(value, format);

```

Параметры:
- `value` – String, представление даты;
- `format` – String, шаблон указанной даты.

| Значение  | Описание  |
|---|---|
| `DD`  | Двузначное представление дня месяца  |
| `D` | Значение дня месяца от 1 до 31 |
| `MM` | Двузначное представление месяца |
| `YYYY`  | Значение года |
| `YY`  | Две последние цифры значения года |

Пример
```bash
parseDate('2000-01-21', 'YYYY-MM-DD'); // new Date(2000, 0, 21)
```
