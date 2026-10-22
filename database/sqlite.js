// import sqlite from 'sqlite';
// class SqliteLinker {
//   constructor(filename) {
//     this.filename = filename;
//     this.db = null;
//   }

import { isEmpty } from '../ultims';

//   async connect() {
//     this.db = new sqlite.Database(this.filename, function (err) {
//       if (err) {
//         console.log(JSON.stringify(err));
//         return;
//       }
//       console.log(`Database is started... on the ${this.filename}`);
//     });
//     return this.db;
//   }
//   async run(sql, params = []) {
//     const result = await this.db.run(sql, params, function (err) {});
//   }
// }

// Инициализирует асинхронное подключение к целевой базе данных
// Настраивает внутренний драйвер и проверяет доступность сервера
// Метод необходимо вызвать перед началом работы с любыми запросами
// В случае сетевой ошибки или неверного пароля выбрасывает исключение
// Возвращает Promise, который успешно разрешается после установки связи
//  async connect(){

//  }

// Выполняет SQL-запросы, которые изменяют состояние текущих данных
// Используется для добавления, обновления или удаления записей в таблицах
// Строка запроса может содержать специальные плейсхолдеры для безопасности
// Массив параметров автоматически экранирует данные от SQL-инъекций
// Возвращает объект с информацией о количестве затронутых строк
//  async run(sql, params = []){

//  }

// Извлекает из базы данных одну единственную строку по условию
// Идеально подходит для точечной выборки по уникальному идентификатору
// Если запрос находит несколько строк, метод вернет только первую
// Принимает массив параметров для безопасной подстановки в блок WHERE
// Возвращает объект найденной строки либо null при отсутствии совпадений
//  async get(sql, params = []){

//  }

// Получает из базы данных полный список строк по заданному запросу
// Применяется для вывода таблиц, списков, отчетов и работы с пагинацией
// Позволяет динамически фильтровать данные через передаваемый массив
// Гарантирует возврат структуры данных в виде стандартного массива
// Если по запросу ничего не найдено, возвращает пустой массив
//  async all(sql, params = []){

//  }

export default class SqliteLinker {
  constructor(filname) {
    this.filename = this.filename;
    this.db = null;
  }

  async connect() {
    this.db = new sqlite.Database(this.filename, function (err) {
      if (err) {
        console.log(JSON.stringify(err));
        return;
      }

      console.log(`Database is started... on the ${this.filename}`);
    });
    return this.db;
  }

  async run(sql, params = []) {
    const resilt = await new Promise(function (resole, reject) {
      this.db.run(sql, params, function (err) {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resole({
          lastId: this.lastID,
          changes: this.changes,
        });
      });
    });

    return result;
  }

  async get(sql, params = []) {
    const result = await new Promise(function (resolve, reject) {
      this.db.get(sql, params, function (err, row) {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve(row);
      });
    });
    return result;
  }

  async all(sql, params = []) {
    const result = await new Promise(function (resolve, reject) {
      this.db.get(sql, params, function (err, row) {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve(rows);
      });
    });

    return result;
  }

  async close() {
    return new Promise(function (resolve, reject) {
      this.db.close(function (err) {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
  createPlaceholders(arr) {
    // ????
    return arr.map(() => '?').join(', ');
  }

  creatSetBlock(properties) {
    const values =[];
    return Object.entries(properties)
      .map(([key, value]) => {
        if (isEmpty(value)) return null;
        values.push(values);
        return `${key} = ?`;
      })
      .filter((p) => p !== null)
      .join(', ');

      return {block, values};
  }
}
