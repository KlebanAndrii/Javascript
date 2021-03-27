// - Подивившись на следюующіе вираження, скажіть, яким буде висновок в консоль

/*console.log(132 > 100 && 45 < 12);  false
console.log(34 > 33 && 23 < 90);   true
console.log(99 > 100 && 45 > 12);  false
console.log(132 > 100 || 45 < 12);  true
console.log(111 > 11 || 45 < 111);   true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12));  true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12));  true
console.log((132 > 100 && 45 < 12) && (132 > 100 || 45 < 12));   false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12));   true
console.log(!!'- 1');  true
console.log(!!-1);  true
console.log(!!'0');  true
console.log(!!'null');  true
console.log(!!'undefined');  true
console.log(!!(3 / 'owu'));   false
console.log((111 > 11 || 45 < 111) || !!'0');   true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12));  false*/

// 1.Определите змінні str, num, flag і txt зі значеннями «Привіт», 123, true, «true».
//   За допомогою оператора typeof переконайтеся, що значення змінних належать типам: string, number і boolean.

/*
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);
*/

/*2. Створіть змінні a1, a2, a3, a4, a5. За допомогою математичних операторів (додавання, віднімання і т.д.) знайдіть значення виразів:
    5 + 3,
    5 - 3,
    5 * 3,
    5/3,
    5% 3
помістивши результат кожного виразу в змінну. Наприклад, let a1 = 5 + 3.*/

/*
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
*/

/*
3. Створіть змінні a6, a7, a8, a9, a10. Помістіть в них результат виразів:
    5% 3,
    3% 5,
    5 + '3',
    '5' - 3,
    75 + 'кг'*/

/*let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);*/

//4. Напишіть код, який знаходить площу прямокутника висота 23см. (Змінна height),
//   шириною 10см (змінна width), значення площі повинно зберігається в числової змінної s.

/*
let height = '23см';
let width = '10см';
let s = parseInt(height) * parseInt(width);

console.log(s);
*/

//5. Напиши код, який знаходить обсяг циліндра висотою 10м (змінна heightC) і діаметром підстави  (dC),
// результат помістіть в змінну v.

/*
let heightC = '10м';
let dC = '4м';
let rad = parseInt(dC) / 2;
let v = (parseInt(heightC) * Math.PI * Math.pow(rad, 2));
console.log(v);
*/

//6. У прямокутного трикутника дві сторони n (зі значенням 3) і m (зі значенням 4).
//   Знайдіть гіпотенузу k по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор піднесення до степеня **).
/*

let n = 3;
let m = 4;
let side =Math.pow(n,2)+Math.pow(m,2);
let nm=Math.sqrt(side);

console.log(nm);
*/

//7. Напишіть скрипт, який виводить "Hello world", створивши змінну str і виводити з допомогою document.write, alert і console.log

/*
let str = 'Hello world';

document.write(str);
alert(str);
console.log(str);
*/

//8. Вивести в вікно браузера за допомогою методу alert () такі дані: Ваше ПІБ, вік, хобі (кожної на нового рядка з допомогою \ n).

/*
alert(`Kleban Andrii\n age 37\n hobbi: tennis and basketball`);*/


//9. Створити 4 змінні з використанням ключового слова let з іменами str1, str2, str3, concatenation.
//   Змінної str1 привласнити фразу 'Хто', str2 - 'ти', str3 - 'такий?'
//   Локальної змінної concatenation привласнити результат конкатенації 3-х рядків: str1, str2, str3.
//   Вивести в документ вміст змінної concatenation задопомогою document.write

/*
let str1 = 'Хто';
let str2 = 'ти';
let str3 = 'такий';
let concatenation = str1 + ' ' + str2 + ' ' + str3;
document.write(concatenation);*/


//10. Які значення виведе у вікно браузера наступний фрагмент коду? і чому?
//     let str = "20";
//      let a = 5;
//      document.write (str + a + "<br/>");    string(20)+a(5) = 205 (string)-напис, конкатенація доплюсується до стрінги;
//      document.write (str - a + "<br/>");    string(20)-a(5) = 15 (number)-спрацюють як числа;
//      document.write (str * "2" + "<br/>");  string(20)*"2" = 40 (number);
//      document.write (str / 2 + "<br/>");    string(20) / 2 = 10 (number);


// 11. Які значення виведе у вікно консолі наступний фрагмент коду якщо його помістити в console.log?
//     parseInt ( "3.14")    (3);
//     parseInt ( "- 7.875")  (-7);  - пробіл потрібно забрати; з пробілом буде (NaN);
//     parseInt ( "435")      (435);
//     parseInt ( "Вася")     (Nan);

//12. За допомогою вікна введення, що викликається методом prompt, користувач може ввести дані, які будуть використовуватися далі, повторіть код нижче
//     let str = prompt ( "Enter something", "ho-ho")
//     console.log (str);

/*
let code = prompt("Enter something");
if (code ==="ho-ho"){
    alert('Welcome');
}else {
    alert('Bye!');
}
console.log(code);*/


//13. За допомогою вікна введення, що викликається методом prompt, зробити додавання двох чисел, а висновок результату за допомогою методу alert

/*
let one=+prompt(8);
let two=+prompt(8);
let oneTwo=one+two;

alert(oneTwo);*/


//14. За допомогою вікна введення, що викликається методом prompt, користувач послідовно виводить ім'я, прізвище та вік, а вам не обходимо вивести рядок такого виду
//       Доброго вечора Іван Іванов, мої поздоровлення що вам 32, а висновок результату за допомогою методу alert

/*let name=prompt('Name?');
let surname=prompt('Surname?');
let age=+prompt('Age?');

alert(`Good morning ${name} ${surname}, my congratulations to you ${age}.`);*/


//--------------------------------------------------------------------------------------------------------------------//


//Додатково:

//1. Три різніх числа вводяться через prompt ().
// За допомоги if else вівесті іх в порядку зростання. (Відсортуваті по зростанню)

/*
let num1 = prompt(1);
let num2 = prompt(2);
let num3 = prompt(3);
if (num3 > num2 && num3 > num1 && num2 > num1) {
    if (num3 > num2) {
        console.log(num1, num2, num3);
    } else {
        console.log(num2, num1, num3);
    }
    if (num3 > num1) {
        console.log(num1, num2, num3);
    } else {
        console.log(num2, num1, num3);
    }
    if (num2 > num1) {
        console.log(num1, num2, num3);
    } else {
        console.log(num2, num1, num3);
    }
}
*/


//2.
// Все параматри отримуємо з клавіатури !!!!
// Імітуємо поведінку пішохода на перекстке.
// Якщо світлофор зелений - вивести "йди".
// Якщо світлофор жовтий - вивести "почекай".
// Якщо світлофор червоний - вивести "стій".
// Якщо світлофор в аварійному режимі вивести "роби що хочеш"!

/*
let color = prompt('Traffic lights');
if (color === 'red') {
    alert('Stop !');
} else if (color === 'yellow') {
    alert('Wait !');
} else if (color === 'green') {
    alert('To go !')
} else if (color === 'alarm') {
    alert('Do what you want !')
}
*/


//3
// Всі параметри отримуємо з клавіатури !!!! (prompt, confirm)
// Створити змінну isRoadClear яка характеризує наявність на дорозі машин.
// Покращуємо попереднє завдання.
// Якщо світлофор зелений і машин немає - вивести "йди".
// Якщо світлофор зелений і машини є - вивести почекай поки порушники проїдуть ".
// Якщо світлофор жовтий і машини є - вивести "чекай".
// Якщо світлофор жовтий і машин немає - вивести "все рано чекай".
// Якщо світлофор червоний і машин ні-вивести "стій все рано".
// Якщо світлофор червоний - і машини є вивести "стій і чекай".
// Якщо світлофор в аварійному режимі вивести "роби що хочеш"!

let color = prompt('Traffic lights');
let isRoadClear = confirm('Car !');


if (color === 'green' && isRoadClear === false) {
    alert('To go !');
}
if (color === 'green' && isRoadClear === true) {
    alert('Stop the car !');
}
if (color === 'yellow' && isRoadClear === true) {
    alert('Stop !');
}
if (color === 'yellow' && isRoadClear === false) {
    alert('Wait !');
}
if (color === 'red' && isRoadClear === false) {
    alert('Stay up early !');
}
if (color === 'red' && isRoadClear === true) {
    alert('Stand and wait !');
}
if (color === 'alarm') {
    alert('Do what you want !');
}