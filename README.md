# date-util

## Описание

Библиотека для работы с датой.

### Установка

Добавить пакет в зависимости
```bash
npm install --save date-util
```

Импортировать необходимые функции
```bash
import { addDate } from date-util
```

### Список доступных функций

### [addDate](./lib/addDate.js)

Добавляет указанную единицу времени и возвращает новый объект Date.

**Синтаксис**
```bash
addDate(date, quantity, unit);
```
Параметры:
- `date` - объект Date или временная метка Unix;
- `quantity` -  Number, количество единиц;
- `unit` - String, единица времени. Доступные значения `days`, `months`, `years`.

Пример
```bash
addDate(new Date(), 1 'days');

addDate(1577826000, 1, 'years');
```

### [subtractDate](./lib/subtractDate.js)

Удаляет указанную единицу времени и возвращает новый объект Date.

**Синтаксис**
```bash
subtractDate(date, quantity, unit);
```
Параметры:
- `date` - объект Date или Number, временная метка Unix;
- `quantity` -  Number, количество единиц;
- `unit` - String, единица времени. Доступные значения `days`, `months`, `years`.

Пример
```bash
subtractDate(new Date(), 1 'days');

subtractDate(1577826000, 1, 'years');
```

### [formatDate](./lib/formatDate.js)

Форматирует дату в строку по указанному шаблону. 

**Синтаксис**
```bash
formatDate(date, pattern);
```
Параметры:
- `date` - объект Date или Number, временная метка Unix;
- `pattern` - String, шаблон форматирования времени.    
      
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

**Синтаксис**
```bash
getDateUnit(date, unit);
```

Параметры:
- `date` - объект Date или Number, временная метка Unix;
- `unit` - String, единица времени. Доступные значения `day`, `month`, `year`.

Пример
```bash
getDateUnit(new Date(2020, 0, 1), 'day');

getDateUnit(1577826000, 'year');
```

### [getDuration](./lib/getDuration.js)

Возвращает объект, который содержит значение интервала времени в днях, часах и минутах.

**Синтаксис**
```bash
getDuration(seconds);
```

Параметры:
- `seconds` - Number, интревал времени в секундах.

Пример
```bash
getDuration(1000000); // { days: 11, hours: 13, minutes: 46 }
```

### [isSameDate](./lib/isSameDate.js)

Проверяет равенство единицы времени двух дат.

**Синтаксис**
```bash
isSameDate(firstDate, secondDate, unit);
```

Параметры:
- `firstDate` - объект Date или Number, временная метка Unix;
- `secondDate` - объект Date или Number, временная метка Unix;
- `unit` - String, единица времени. Доступные значения `day`, `month`, `year`.

Пример
```bash
isSameDate(1577826000, 1577912400, 'year');
```

### [getDateDiff](./lib/getDateDiff.js)

Возвращает значение разницы единицы времени двух дат.

**Синтаксис**
```bash
getDateDiff(firstDate, secondDate, unit);
```

Параметры:
- `firstDate` - объект Date или Number, временная метка Unix;
- `secondDate` - объект Date или Number, временная метка Unix;
- `unit` - String, единица времени. Доступные значения `days`, `months`, `years`.

Пример
```bash
getDateDiff(1577826000, 1577912400, 'days');
```

### [getStartOf](./lib/getStartOf.js)

Возвращает объект даты начала указанной единицы времени.

**Синтаксис**
```bash
getStartOf(date, unit);
```

Параметры:
- `date` - объект Date или Number, временная метка Unix;
- `unit` - String, единица времени. Доступные значения `day`, `month`, `year`.

Пример
```bash
getStartOf(1577912400, 'year');
```

### [getEndOf](./lib/getEndOf.js)

Возвращает объект даты конца указанной единицы времени.

**Синтаксис**
```bash
getEndOf(date, unit);
```

Параметры:
- `date` - объект Date или Number, временная метка Unix;
- `unit` - String, единица времени. Доступные значения `day`, `month`, `year`.

Пример
```bash
getEndOf(1577912400, 'year');
```

### [getUtcOffset](./lib/getUtcOffset.js)

Возвращает значение смещения временной зоны относительно UTC в часах.

**Синтаксис**
```bash
getUtcOffset(date);
```

Параметры:
- `date` - объект Date или Number, временная метка Unix;

Пример
```bash
getUtcOffset(new Date(2020, 0, 1);
```
