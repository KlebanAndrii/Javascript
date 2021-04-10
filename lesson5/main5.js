//

// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ================================================================================//


class Computer {
    constructor(ram, power, name) {
        this.ram = ram;
        this.power = power;
        this.name = name;
    }

    inclusion() {
        console.log('You are welcome : Windows 10');
    }
}

let lenovo = new Computer(4, 650, 'Lenovo');

console.log(lenovo);
lenovo.inclusion();


//================================================================================================================//
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// =================================================================================================================//

class Laptop extends Computer {
    constructor(ram, power, name, diagonal,) {
        super(ram, power, name);
        this.diagonal = diagonal;
        this.battery = this.power / (this.diagonal * this.ram);
    }
}

let asus = new Laptop(6, 750, 'ASUS', 15.6);

console.log(asus);
asus.inclusion();


//====================================================================================================================//
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===================================================================================================================//


class Ultrabook extends Laptop {
    constructor(ram, power, name, diagonal, weight) {
        super(ram, power, name, diagonal);
        this.weight = weight;
    }

    inclusion() {
        if (this.weight <= 2 && this.battery > 4) {
            console.log('You are welcome : Windows 10');
        } else {
            console.log('error');
        }
    }
}

let dell = new Ultrabook(8, 900, 'DELL', 15.6, 1.71);

console.log(dell);
dell.inclusion();

//===================================================================================================================//
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ==================================================================================================================//
class BasicPC extends Computer {
    constructor(ram, power, name) {
        super(ram, power, name);
        this.FPS = this.power / this.ram;
    }

    method(game_name) {
        console.log(`You are playing ${game_name} with ${this.FPS} FSP`);
    }

    maxPower(newsPower) {
        let interest = ((newsPower - this.power) / this.power) * 100;
        if (interest > 10 || newsPower < this.power) {
            console.log('Power has not increased');
        } else {
            this.power = newsPower;
            console.log('Power has increased');
        }
    }

    maxRam(newRam) {
        if (newRam / this.ram <= 2) {
            console.log('RAM increased');
            this.ram = newRam;
        } else {
            console.log('Can not be enlarged');
        }
    }
}

let basic = new BasicPC(4, 400, 'ZEVS');

console.log(basic);
basic.inclusion();
basic.method('First Class Trouble');
basic.maxPower(450);
basic.maxRam(6);


//
//====================================================================================================================//
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
//====================================================================================================================//
//
//
class GamerPC extends BasicPC {
    constructor(ram, power, name) {
        super(ram, power, name);
    }

    playTheGame(game_name) {
        let interestPc = this.power / 1000;
        this.power -= interestPc;
        console.log(`You are playing ${game_name} with ${this.FPS} FSP`);
    }

    fpsPc() {
        if (this.FPS / basic.FPS >= 2) {
            console.log('Good computer');
        } else {
            console.log('You can not play');
        }
    }

    powerPc() {
        if (this.power < 500 && this.ram < 8) {
            alert('This bucket does not start');
        }
    }
}

let everest = new GamerPC(8, 1600, 'Everest');
console.log(everest);
everest.playTheGame('Minecraft');
console.log(everest);
everest.powerPc();
everest.fpsPc();



// ______________________________________________________________________________________________________________________________________________________
//                                         РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//====================================================================================================================//
//

// function Car(structureCar, model, producer, year, maxSpeed, capacity,) {
//     this.structureCar = structureCar;
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.driver = {}
//
//     this.drive = function () {
//         console.log(`We go at a speed of ${this.maxSpeed} for an hour`);
//     }
//
//     this.info = function () {
//         console.log(`structureCar: ${this.structureCar},
//         model: ${this.model},
//         producer: ${this.producer},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         capacity: ${this.capacity},`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (newDriver) {
//         this.driver = newDriver;
//     }
// }
//
// let car = new Car('Skoda', 'SuperB', 'Czech Republic', 2010, 270, 2.0);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(320);
// car.info();
// car.changeYear(2015);
// car.info();
// car.addDriver({name: 'Andrii', age: 37});
// console.log(car.driver);

//
//====================================================================================================================//
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//====================================================================================================================//
//

// class Car {
//     constructor(structureCar, model, producer, year, maxSpeed, capacity,) {
//         this.structureCar = structureCar;
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.driver = {}
//     }
//
//     drive() {
//         console.log(`We go at a speed of ${this.maxSpeed} for an hour`);
//     }
//
//     info() {
//         console.log(`structureCar: ${this.structureCar},
//         model: ${this.model},
//         producer: ${this.producer},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         capacity: ${this.capacity},`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(newDriver) {
//         this.driver = newDriver;
//     }
// }
//
// let car = new Car('Skoda', 'SuperB', 'Czech Republic', 2010, 270, 2.0);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(320);
// car.info();
// car.changeYear(2015);
// car.info();
// car.addDriver({name: 'Andrii', age: 37});
// console.log(car.driver);

//
//
//====================================================================================================================//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//====================================================================================================================//
//
//
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//     }
// }
//
// class Prince extends Human {
//     constructor(name, age, sizeShoes) {
//         super(name, age);
//         this.sizeShoes = sizeShoes;
//     }
// }
//
// const prince1 = new Prince('Fabricio', 21, 36);
// const cinderella = [
//     new Cinderella('Ira', 18, 37),
//     new Cinderella('Mariana', 19, 38),
//     new Cinderella('Oksana', 21, 39),
//     new Cinderella('Ivanka', 17, 37),
//     new Cinderella('Veronica', 19, 36),
//     new Cinderella('Christina', 20, 38),
//     new Cinderella('Olya', 18, 41),
//     new Cinderella('Galya', 21, 37),
//     new Cinderella('Elena', 18, 39),
//     new Cinderella('Marina', 19, 40),
// ]
// for (const cinderella1 of cinderella) {
//     if (cinderella1.footSize === prince1.sizeShoes) {
//         console.log(cinderella1);
//     }
// }

//
//
//====================================================================================================================//
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//====================================================================================================================//
//


//
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let cinderella = [
//     new Cinderella('Ira', 18, 37),
//     new Cinderella('Mariana', 19, 38),
//     new Cinderella('Oksana', 21, 39),
//     new Cinderella('Ivanka', 17, 37),
//     new Cinderella('Veronica', 19, 36),
//     new Cinderella('Christina', 20, 38),
//     new Cinderella('Olya', 18, 41),
//     new Cinderella('Galya', 21, 37),
//     new Cinderella('Elena', 18, 39),
//     new Cinderella('Marina', 19, 40),
// ]
//
//
// function Prince(name, age, sizeShoes) {
//     this.name = name;
//     this.age = age;
//     this.sizeShoes = sizeShoes;
// }
//
//
// let prince = new Prince('Petro', 28, 40);
//
// function cinderella1(masCinderella, prince1) {
//     for (let oneCinderella of masCinderella) {
//         if (oneCinderella.footSize === prince1.sizeShoes) {
//            return oneCinderella
//         }
//
//     }
// }
// let one = cinderella1(cinderella,prince);
// console.log(one)
//


// ______________________________________________________________________________________________________________________________________________________
//                                                      Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//====================================================================================================================//
//
//

// function DescribeAtr(name, action,) {
//     this.name = name;
//     this.action = action;
//     this.description = function () {
//         console.log(this);
//     }
// }
//
// function DescribeTeg(name, action, masAtr) {
//     this.name = name;
//     this.action = action;
//     this.masAtr = masAtr;
//     this.description = function () {
//         console.log(this);
//     }
// }
//
// const desAtr = new DescribeAtr('accesskey','Активація посилання за допомогою комбінації клавіш.');
// const desAtr1 = new DescribeAtr('coords','Встановлює координати активної області.');
// const desAtr2 = new DescribeAtr('download','Пропонує завантажити вказаний по посиланню файл.');
// const desc = 'Тег <a> є одним з важливих елементів HTML і призначений для створення посилань.' +
//     ' Залежно від присутності атрибутів name або href тег <a> встановлює посилання або якір.' +
//     ' Якорем називається закладка всередині сторінки, яку можна вказати в якості мети посилання.' +
//     ' При використанні посилання,' +
//     ' яка вказує на якір, відбувається перехід до закладки всередині веб-сторінки.'
// const a = new DescribeTeg('<a>',desc,[desAtr,desAtr1,desAtr2]);
//
// a.description();

//
//
//====================================================================================================================//
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//====================================================================================================================//
//
//

// class DescribeAtr {
//     constructor(name, action,) {
//         this.name = name;
//         this.action = action;
//     }
//
//     description() {
//         console.log(this);
//     }
// }
//
// class DescribeTeg {
//     constructor(name, action, masAtr) {
//         this.name = name;
//         this.action = action;
//         this.masAtr = masAtr;
//     }
//
//     description() {
//         console.log(this);
//     }
// }
//
// const desAtr = new DescribeAtr('accesskey','Активація посилання за допомогою комбінації клавіш.');
// const desAtr1 = new DescribeAtr('coords','Встановлює координати активної області.');
// const desAtr2 = new DescribeAtr('download','Пропонує завантажити вказаний по посиланню файл.');
// const desc = 'Тег <a> є одним з важливих елементів HTML і призначений для створення посилань.' +
//     ' Залежно від присутності атрибутів name або href тег <a> встановлює посилання або якір.' +
//     ' Якорем називається закладка всередині сторінки, яку можна вказати в якості мети посилання.' +
//     ' При використанні посилання,' +
//     ' яка вказує на якір, відбувається перехід до закладки всередині веб-сторінки.'
// const a = new DescribeTeg('<a>',desc,[desAtr,desAtr1,desAtr2]);
//
// a.description();

//
//
//====================================================================================================================//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//====================================================================================================================//


// let car = {
//     structureCar: 'Skoda',
//     model: 'SuperB',
//     producer: 'Czech Republic',
//     year: 2010,
//     maxSpeed: 270,
//     capacity: 2.0,
//     driver: {},
//
//     drive() {
//         console.log(`We go at a speed of ${this.maxSpeed} for an hour`);
//     }
//     ,
//     info() {
//         console.log(`structureCar: ${this.structureCar},
//         model: ${this.model},
//         producer: ${this.producer},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         capacity: ${this.capacity},`);
//     },
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     },
//     changeYear(newValue) {
//         this.year = newValue;
//     },
//     addDriver(newDriver) {
//         this.driver = newDriver;
//     }
// }
//
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(320);
// car.info();
// car.changeYear(2015);
// car.info();
// car.addDriver({name: 'Andrii', age: 37});
// console.log(car.driver);
//====================================================================================================================//











































































