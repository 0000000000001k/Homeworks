/*

1. Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript.
    Прототипне наслідування потрібне для того, щоб не копіювати або прописувати методи уже створених об"єктів, а на їх основі створювати нові об"єкти
2. Для чого потрібно викликати super() у конструкторі класу-нащадка?.
    А саме супер використовується для успадкування властивостей батьківського об"єкту.
 */

/*Завдання
Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), salary (зарплата). Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.
Створіть гетери та сеттери для цих властивостей.
Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме властивість lang (список мов).
Для класу Programmer перезапишіть гетер для властивості salary. Нехай він повертає властивість salary, помножену на 3.
Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.*/

class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    };

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get age() {
        return this._age
    }

    set age(value) {
        this._age = value
    }

    get salary() {
        return this._salary
    }

    set salary(value) {
        this._salary = value
    }

}


class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this._lang = lang;
    }

    set salary(value) {
        super.salary = value;
    }

    get salary() {
        return super.salary * 3
    }
}

const programmer1 = new Programmer('Alex', '34', 20000, 'UA')
const programmer2 = new Programmer('Alex2', '56', 10000, 'EN')
const programmer3 = new Programmer('Alex3', '77', 40000, 'US')
console.log(programmer1)
console.log(programmer2)
console.log(programmer3)
