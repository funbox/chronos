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

### [addDays](./lib/addDays.js), [addMonths](./lib/addMonths.js), [addYears](./lib/addYears.js)

Добавляет количество дней, месяцев или лет и возвращает новый объект Date.

**Использование**
```bash
addDays(date, quantity);
```
Параметры:
- `date` – объект Date или временная метка Unix;
- `quantity` – Number, количество единиц.

Пример
```bash
addDays(new Date(), 1);

addYears(1577826000, 1);
```

### [subtractDays](./lib/subtractDays.js), [subtractMonths](./lib/subtractMonths.js), [subtractYears](./lib/subtractYears.js)

Удаляет количество дней, месяцев или лет и возвращает новый объект Date.

**Использование**
```bash
subtractDays(date, quantity);
```
Параметры:
- `date` – объект Date или Number, временная метка Unix;
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
formatDate(date, pattern);
```
Параметры:
- `date` – объект Date или Number, временная метка Unix;
- `pattern` – String, шаблон форматирования времени.    
      
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
    
Пример
```bash
formatDate(new Date(2020, 0, 1), 'YYYY-MM-DD');

formatDate(1577826000, 'HH:mm:ss');
```

### [getDateUnit](./lib/getDateUnit.js)

Возвращает указанную единицу времени.

**Использование**
```bash
getDateUnit(date, unit);
```

Параметры:
- `date` – объект Date или Number, временная метка Unix;
- `unit` – String, единица времени. Доступные значения `day`, `month`, `year`.

Пример
```bash
getDateUnit(new Date(2020, 0, 1), 'day');

getDateUnit(1577826000, 'year');
```

### [getDuration](./lib/getDuration.js)

Возвращает объект, который содержит значение интервала времени в днях, часах и минутах.

**Использование**
```bash
getDuration(seconds);
```

Параметры:
- `seconds` – Number, интревал времени в секундах.

Пример
```bash
getDuration(1000000); // { days: 11, hours: 13, minutes: 46 }
```

### [isSameDay](./lib/isSameDay.js), [isSameMonth](./lib/isSameMonth.js), [isSameYear](./lib/isSameYear.js)

Проверяет равенство единицы времени двух дат.

**Использование**
```bash
isSameYear(firstDate, secondDate);
```

Параметры:
- `firstDate` – объект Date или Number, временная метка Unix;
- `secondDate` – объект Date или Number, временная метка Unix.

Пример
```bash
isSameYear(1577826000, 1577912400);
```

### [getDateDiff](./lib/getDateDiff.js)

Возвращает значение разницы единицы времени двух дат.

**Использование**
```bash
getDateDiff(firstDate, secondDate, unit);
```

Параметры:
- `firstDate` – объект Date или Number, временная метка Unix;
- `secondDate` – объект Date или Number, временная метка Unix;
- `unit` – String, единица времени. Доступные значения `minutes`, `days`, `months`, `years`.

Пример
```bash
getDateDiff(1577826000, 1577912400, 'days');
```

### [getStartOfDay](./lib/getStartOfDay.js), [getStartOfMonth](./lib/getStartOfMonth.js), [getStartOfYear](./lib/getStartOfYear.js)

Возвращает объект даты начала единицы времени.

**Использование**
```bash
getStartOfDay(date);
```

Параметры:
- `date` – объект Date или Number, временная метка Unix.

Пример
```bash
getStartOfDay(1577912400);
```

### [getEndOfDay](./lib/getEndOfDay.js), [getEndOfMonth](./lib/getEndOfMonth.js), [getEndOfYear](./lib/getEndOfYear.js)

Возвращает объект даты окончания единицы времени.

**Использование**
```bash
getEndOfDay(date);
```

Параметры:
- `date` – объект Date или Number, временная метка Unix.

Пример
```bash
getEndOfDay(1577912400);
```

### [getUtcOffset](./lib/getUtcOffset.js)

Возвращает значение смещения временной зоны относительно UTC в часах.

**Использование**
```bash
getUtcOffset(date);
```

Параметры:
- `date` – объект Date или Number, временная метка Unix.

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

