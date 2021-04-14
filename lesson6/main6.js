// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//     b) відсортувати його від більшого до меншого.
//     c) Відфілтрувати числа які є кратними 3.
// d) Відфілтрувати числа які є більшими за 10.
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
//********************************************************************************************************************//
//
// let numbers = [23, 54, 6, 86, 8, 9, 21, 45, 3, 67, 53, 88, 96, 4, 7, 11, 31, 44, 55, 34];
//-----------------------------------------------------------------------------------------------------------------

//     a) відсортувати його від меншого до більшого.
//----------------------------------------------------
// let numbers1 = numbers.sort((a, b) => a - b);
// console.log(numbers1);
//----------------------------------------------------------------

//     b) відсортувати його від більшого до меншого.
//--------------------------------------------------
// let numbers2 = numbers.sort((a, b) => b - a);
// console.log(numbers2);
//----------------------------------------------------------------

//     c) Відфілтрувати числа які є кратними 3.
//---------------------------------------------------
// let numbers3 = numbers.filter((number) => {
//     return number % 3 === 0;
// });
// console.log(numbers3);
//-------------------------------------------------------------------

// d) Відфілтрувати числа які є більшими за 10.
//----------------------------------------------------
// let numbers4 = numbers.filter((number) => number > 10);
// console.log(numbers4);
//----------------------------------------------------------------------

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//----------------------------------------------
// numbers.forEach((value, index, array) => {
// document.write(value, '<br>');
// document.write(index, '<br>');
// document.write(array, '<br>');
//
// });
//----------------------------------------------------------------------------

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
//---------------------------------------------------------------------
// let numbers5 = numbers.map((number) => number * 3);
// console.log(numbers5);
//------------------------------------------------------------------------------------------------------

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
//--------------------------------------------------------------------
// let numbers6 = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
// console.log(numbers6);


//====================================================================================================================//
// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
// b) Відсортувати в зворотньому порядку
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//====================================================================================================================//

// let strings = ['hello', 'petro', 'max', 'dog', 'cat', 'pork', 'dimas', 'lemon', 'agg', 'oleg', 'boy', 'man', 'girl',
//     'woman', 'red', 'black', 'olga', 'fish', 'good', 'zero'];
//---------------------------------------------------------------------------------------------------------------------

//     a) Відсортувати його в алфавітному порядку
//-------------------------------------------------
// let strings1 = strings.sort();
// console.log(strings1);
//------------------------------------------------------------------------

// b) Відсортувати в зворотньому порядку
//---------------------------------------------
// let strings2 = strings.sort((a, b) => {
//     if (a < b) {
// return 1;
//     }
//     return  -1;
// })
// console.log(strings2);
//---------------------------------------------------------------------------------

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//-----------------------------------------------------------------------------------
// let strings3 = strings.filter(string => string.length > 4);
// console.log(strings3);
//-----------------------------------------------------------------------------------

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//-----------------------------------------------------------------------------
// let strings4 = strings.map(string => 'Sam says ' + string);
// console.log(strings4);
//-----------------------------------------------------------------
// strings.forEach((value, index, array) => {
//   array[index] = `Sam says ${value}`;
// });
// console.log(strings);


//====================================================================================================================//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];

// a) відсортувати його за  віком (зростання , а потім окремо спадання)
//----------------------------------------------------------------------------------------
// users.sort((a, b) => a.age - b.age);
// console.log(users);
//--------------------------------------------------------------------------
// users.sort((a, b) => b.age - a.age);
// console.log(users);
//---------------------------------------------------------------------------------------------------------

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//---------------------------------------------------------------------------------------------
// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);
//-------------------------------------------------------------------------
// users.sort((a, b) => b.name.length - a.name.length);
// console.log(users);
//--------------------------------------------------------------------------------------------------------

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
//-------------------------------------------------------------------------------------------------------------
// let users1 = users.map((value, index) => ({...value, id: index + 1}));
// console.log(users);
// console.log(users1);
//------------------------------------------------------------------------------------------------

// d) відсортувати його за індентифікатором
//----------------------------------------------------------------------------------------------------
// users1.sort((a, b) => a.id - b.id);
// console.log(users1);


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//====================================================================================================================//

// users.reduce((acc, value) => {
//     if (value.isMarried === true) {
//         value.flat = true;
//         acc.push(value);
//     }
//     console.log(acc);
//     return acc;
// }, []);

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
//-----------------------------------------------------------------
// let cars1 = cars.filter(value => value.volume >= 3);
// console.log(cars1);

//-----------------------------------------------
// - двигун = 2л
//------------------------

// let cars2 = cars.filter(value => value.volume === 2);
// console.log(cars2);

//------------------------------------------------
// - виробник мерс
//---------------------------------
// let cars3 = cars.filter(value => value.producer.startsWith('mercedes'));
// console.log(cars3);

//--------------------------------------------------------------
// - двигун більше 3х літрів + виробник мерседес
//--------------------------------------------------

// let cars4 = cars.filter(value => value.volume >=3 && value.producer.startsWith('mercedes'));
// console.log(cars4);

//----------------------------------------------
// - двигун більше 3х літрів + виробник субару
//------------------------------------------------------

// let cars5 = cars.filter(value => value.volume >=3 && value.producer.startsWith('subaru'));
// console.log(cars5);

//------------------------------------------------
// - сили більше ніж 300
//----------------------------------------------

// let cars6 = cars.filter(value => value.power >= 300);
// console.log(cars6);

//--------------------------------------------------------------
// - сили більше ніж 300 + виробник субару
//--------------------------------------------------

// let cars7 = cars.filter(value => value.power >= 300 && value.producer.startsWith('subaru'));
// console.log(cars7);

//-----------------------------------------
// - мотор серіі ej
//----------------------------------

// let cars8 = cars.filter(value => value.engine.startsWith('ej'));
// console.log(cars8);

//-----------------------------------------------------------
// - сили більше ніж 300 + виробник субару + мотор серіі ej
//-------------------------------------------------------------

// let cars9 = cars.filter(value => value.power >=300 &&
//     (value.producer.startsWith('subaru') &&
//         (value.engine.startsWith('ej'))));
// console.log(cars9);

//----------------------------------------------------
// - двигун меньше 3х літрів + виробник мерседес
//---------------------------------------------------

// let cars10 = cars.filter(value => value.volume < 3 && value.producer.startsWith('mercedes'));
// console.log(cars10);

//---------------------------------------------
// - двигун більше 2л + сили більше 250
//-------------------------------------------------

// let cars11 = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(cars11);

//-----------------------------------------------
// - сили більше 250  + виробник бмв
//----------------------------------------------------

// let cars12 = cars.filter(value => value.power > 250 && value.producer.startsWith('bmw'));
// console.log(cars12);

//
//
//===================================================================================================================//


// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
//-----------------------------------------------------
// usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(usersWithAddress);
//----------------------------------------------------
// -- Відсортувати їх по ID в зворотньому порядку
//-----------------------------------------------------------
// usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(usersWithAddress);
//------------------------------------------
// -- Відсортувати по віку
//-----------------------------------------------
// usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(usersWithAddress);
//-----------------------------------------------------
// -- Відсортувати по віку в зворотньому порядку
//-----------------------------------------------------------
// usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(usersWithAddress);
//-------------------------------------------------------------
// -- Відсорутвати по імені
//----------------------------------------------------------
// let name1 = usersWithAddress.sort((a, b) => {
//     let nameA = a.name.toUpperCase();
//     let nameB = b.name.toUpperCase();
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//     return  0;
// });
// console.log(usersWithAddress);

//---------------------------------------------------------
// -- Відсорутвати по назві вулиці
//-----------------------------------------------------------------

// let street1 = usersWithAddress.sort((a, b) => {
//     let streetA = a.address.street.toUpperCase();
//     let streetB = b.address.street.toUpperCase();
//     if (streetA < streetB) {
//         return -1;
//     }
//     if (streetA > streetB) {
//         return  1;
//     }
//     return  0;
// })
// console.log(street1);

//--------------------------------------------------------------------
// -- Відсорутвати по номеру будинку
//---------------------------------------------------------------------

// usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(usersWithAddress);

//----------------------------------------------------------
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
//-----------------------------------------------------------

// let age1 = usersWithAddress.filter(value => value.age < 30);
// console.log(age1);

//----------------------------------------------------------------
// -- Залишити тільки одружених
//-------------------------------------------------------

// let isMarried1 = usersWithAddress.filter(value => value.isMarried === true);
// console.log(isMarried1);

//---------------------------------------------------------
// -- Залишити тільки одружених, які молодні за 30
//------------------------------------------------------------

// let isMarried2 = usersWithAddress.filter(value => value.isMarried === true && value.age < 30);
// console.log(isMarried2);

//---------------------------------------------------------------
// -- Залишити лише тих, в кого парні номери будинків.
//------------------------------------------------------------

// let number1 = usersWithAddress.filter(value => {
// return value.address.number % 2 === 0;
// });
// console.log(number1);

//---------------------------------------------------------
// -- Порахувати загальний вік всіх людей. (reduce)
//----------------------------------------------------------------

// let number2 = usersWithAddress.reduce((acc, currentValue) => {
// return acc + currentValue.age;
// }, 0);
// console.log(number2);

//---------------------------------------------------------------------------------------------------
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
//---------------------------------------------------------------------------------------------------

// usersWithAddress.reduce((acc, currentValue) => {
//     if (currentValue.age > 30 && currentValue.isMarried === true) {
//         currentValue.child = true;
//         acc.push(currentValue);
//     }
//     console.log(acc);
//     return acc;
// }, []);

//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//------------------------------------------------------------------------------------------------------------
// const car = [
//     {producer: 'Opel', power: 100, owner: {name: 'Petro', age: 47, experience: 23}, price: 5000, year: 2010},
//     {producer: 'Skoda', power: 140, owner: {name: 'Andriy', age: 37, experience: 10}, price: 10000, year: 2009},
//     {producer: 'Subaru', power: 180, owner: {name: 'Olga', age: 25, experience: 5}, price: 12000, year: 2011},
//     {producer: 'Nissan', power: 120, owner: {name: 'Ira', age: 21, experience: 3}, price: 18000, year: 2015},
//     {producer: 'Ford', power: 90, owner: {name: 'Oleg', age: 42, experience: 14}, price: 8000, year: 2013},
//     {producer: 'Toyota', power: 160, owner: {name: 'Semen', age: 50, experience: 26}, price: 22000, year: 2016},
//     {producer: 'BMW', power: 220, owner: {name: 'Roma', age: 23, experience: 4}, price: 25000, year: 2017},
//     {producer: 'Honda', power: 190, owner: {name: 'Taras', age: 34, experience: 11}, price: 16000, year: 2014}];
//
//
//
//   .      Зробили половину автопарку ремонт мотору,
//   .      що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
//   .   На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//   .   Для початку вкладіть всі наші створені автомобілі в масив cars.
//   .       Далі необхідно рати кожну другу машинку (цикл з кроком в 2),
//   .       та робити їй підвищення потужності двигуна на 10% та ціну на 5%
//      Після того зробити перевірку досвіду ВСІХ наших водіїв.
//      Якщо досвід водія менший за 5 років, але його вік більший за 25,
//          то необідно відправити його на курси підвищення кваліфікації,
//          що збільшить йому досвід на 1 рік.
//      Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//----------------------------------------------------------------------------------------
// let cars = [];
// let car1 = car.filter((value, index) => {
//     if (index % 2 === 0) {
//         value.power = value.power + (value.power * 0.10);
//         value.owner = {
//             driver: {
//             name: prompt('driver name:'), age: +prompt('driver age:'),
//             experience: +prompt('driver experience:')}
//         };
//         cars.push(car[index]);
//     }
//     return value;
// });
// console.log(car1);
// console.log(cars);
//
// for (let i = 0; i < cars.length; i = i + 2) {
//     cars[i].power = cars[i].power + (cars[i].power * 0.10);
//     cars[i].price = cars[i].price + (cars[i].price * 0.05);
//     console.log(cars[i]);
// }
//
//


//=====================================================================================================================
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
//     Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента.
//     Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//=======================================================================================

// const arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
//
// const minAndMax = (array, key) => {
//     let minIn = null;
//     let maxIn = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === key) {
//             if (!minIn) {
//                 minIn = i;
//             }
//             maxIn = i;
//         }
//     }
//     return `Result: MinIn = ${minIn}, MaxIn = ${maxIn}`;
// };
//
// console.log(minAndMax(arr, 4));
// console.log(minAndMax(arr,1));

