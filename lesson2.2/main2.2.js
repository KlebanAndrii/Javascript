//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

/*
let masNumber = [3, 7, 23, 54, 59];
let masString = ['hello', 'girl', 'love', 'boy', 'child'];
let masStNuBi = [45, 'read', false, 8, 'true'];

console.log(masNumber);
console.log(masString);
console.log(masStNuBi);

*/

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

/*let arr = [43, 'yellow', false, 'good', 65.5];
console.log(arr[2]);*/

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись
// до конкретного індексу. Вивести в консоль

/*
let emptyMas = [];

emptyMas[8] = 'hello';
emptyMas[5] = 'good';
emptyMas[4] = 35;
emptyMas[3] = false;
emptyMas[2] = 'like';
emptyMas[1] = true;
emptyMas[6] = 863;

console.log(emptyMas[2]);
*/


//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

/*
for (let i = 0; i < 10; i++) {
    document.write('Everything will be fine !' + '<div/>');
}
*/

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом
// і індексом всередині


/*
let forDiv = ['pen', 'travel', 37, 'music', 'cat', true, 'three',];

for (let i = 0; i < 10; i++) {
    document.write('I like to ' + forDiv[1] + ' and listen to ' + forDiv[3] + '!' + '<div/>');
}
*/

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

/*
let c = 0;
while (c < 20) {
    document.write('<h1/>' + 'Did i understand everything correctly ?');
    c++;
}
*/

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

/*
let whIndex = [65, true, 'coffee', 'lunch', 83, 'thanks'];

let j = 0;
while (j < 20) {
    document.write('<h1/>' + 'I love delicious food and drink ' + whIndex[2]);
    j++
}
*/

//- Створити масив з 10 числових елементів.
// Вивести в консоль всі його елементи в циклі.

/*
let masNum = [244, 21, 56, 23, 78, 990, 75, 43.4, 62, 54,];

for (let i = 0; i < masNum.length; i++) {
    console.log(masNum[i]);
}
*/

//- Створити масив з 10 строкрових елементів.
// Вивести в консоль всі його елементи в циклі.


/*
let masStr = ['hello', 'bye', 'dog', 'cat', 'table', 'chair', 'pen', 'phone', 'glass', 'book'];

for (let i = 0; i < masStr.length; i++) {
    console.log(masStr[i]);
}
*/

//- Створити масив з 10 елементів будь-якого типу.
// Вивести в консоль всі його елементи в циклі.

/*
let elements = [23, 645, 'good', 'fine', true, 'number', false, 'plate', 'child', 48];

for (let element of elements) {
    console.log(element);
}
*/

//- Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

/*
let elementBoolean = ['like', 35, 'yes', true, 12, 'bread', false, true, 'control', 55];

for (let i = 0; i < elementBoolean.length; i++) {
    if (typeof elementBoolean[i] === 'boolean') {
        console.log(elementBoolean[i]);
    }
}
*/

//- Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

/*let elementNumber = [false, true, 'control', 55, 'like', 35, 'yes', true, 12, 'bread'];

for (let i = 0; i < elementNumber.length; i++) {
    if (typeof elementNumber[i] === 'number') {
        console.log(elementNumber[i]);
    }
}*/

//- Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

/*
let elementStringa = ['table', 'chair', 455, 'pen', true, 'phone', 'control', 55, 'like', 35];

for (let i = 0; i < elementStringa.length; i++) {
    if (typeof elementStringa[i] === 'string') {
        console.log(elementStringa[i]);
    }
}
*/

//- Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

/*
let toFill = [];

toFill[1] = 56;
toFill[2] = 'hello';
toFill[3] = 'lesson';
toFill[4] = 45;
toFill[5] = true;
toFill[6] = 'lemon';
toFill[7] = 'bear';
toFill[8] = false;
toFill[9] = 'boy';
toFill[10] = 567;

for (let i = 0; i < toFill.length; i++) {
    console.log(toFill[i]);
}

*/

//- Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

/*
for (i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<br/>${i}`);
}
*/

//- Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write


/*
for (i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<p/>${i}`);
}
*/

//- Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write


/*
for (i = 0; i < 100; i = i + 2) {
    console.log(i);
    document.write(`<br/>${i}`);
}
*/


//- Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write

/*for (i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<br/>${i}`);
    }

}*/

//- Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write

/*
for (i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`<br/>${i}`);
    }
}
*/

//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)


/*for (let min = 0; min < 2; min++) {
    for (let sec = 1; sec < 60; sec++) {
        console.log(`${min} : ${sec}`);
    }
}*/

//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

/*
for (let hour = 0; hour <= 2; hour++) {
    for (let min = 1; min < 60; min++) {
        if (hour === 2 && min === 20) {
            break;
        }
        for (let sec = 1; sec < 60; sec++) {
            console.log(`${hour} : ${min} : ${sec}`);
        }
    }
}
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

/*
let addEnd = ['a', 'b', 'c'];

for (i = 1; i <= 3; i++) {
    addEnd.push(i);
}
console.log(addEnd);
*/


//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

/*let NumberNew = [1, 2, 3];

for (let i = NumberNew.length - 1; i >= 0; --i) {
    console.log(NumberNew[i]);
}*/

//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

/*
let masPush = [1, 2, 3];

masPush.push(4, 5, 6);
console.log(masPush);
*/


//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

/*let masUnshift = [1, 2, 3];

masUnshift.unshift(4, 5, 6);
console.log(masUnshift);*/

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

/*let deletedShift = ['js', 'css', 'jq'];

let showShift = deletedShift.shift();
console.log(showShift);*/

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

/*let popDeleted = ['js', 'css', 'jq'];

let showPop = popDeleted.pop();
console.log(showPop);*/

//- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

/*let shiftMas = [1, 2, 3, 4, 5];

shiftMas.shift();
shiftMas.shift();
shiftMas.shift();
console.log(shiftMas);*/

//- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

/*let popMas = [1, 2, 3, 4, 5];

popMas.pop();
popMas.pop();
popMas.pop();
console.log(popMas);*/

//- Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

/*let addVMas = [1, 2, 3, 4, 5];

let saveMasFive = addVMas.pop();
let saveMasFour = addVMas.pop();
addVMas.push('a', 'b', 'c');
addVMas.push(saveMasFour, saveMasFive);

console.log(addVMas);*/

//- Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

/*let saveAdd = [1, 2, 3, 4, 5];

let saveOne = saveAdd.shift();
saveAdd.unshift('a', 'b');
saveAdd.unshift(saveOne);
let saveFive = saveAdd.pop();
saveAdd.push('c');
saveAdd.push(saveFive);
saveAdd.push('e');

console.log(saveAdd);*/

//- Взяти масив з 10 чисел або створити його.
// Вивести в консоль тільки ті елементи, значення яких є парними.

/*
let even_number = [345, 56, 3, 875, 98.6, 45, 6, 68, 234, 54];

for (let i = 0; i < even_number.length; i++) {
    if (even_number[i] % 2 === 0) {
        console.log(even_number[i]);
    }
}
*/

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

/*let masEvenNumber = [9, 875, 98.6, 45, 8, 67, 845, 56, 234, 94];
let masEmpty = [];

for (let i = 0; i < masEvenNumber.length; i++) {
    masEmpty.push(masEvenNumber[i]);
}
console.log(masEmpty);*/

//- Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.

/*
let twoMas = [342, 57, 890, 353, 55754, 66, 898, 78, 90, 13,];
let evenTwo = [];

for (i = 0; i < twoMas.length; i++) {
    evenTwo[i] = twoMas[i];
}
console.log(evenTwo);
*/

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

/*
let newsWhile = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let k = 0;
while (k < newsWhile.length) {

    console.log(newsWhile[k]);
    k++;
}
*/

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 2. перебрати його циклом for

/*
let newsFor = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (i = 0; i < newsFor.length; i++) {
    console.log(newsFor[i]);
}
*/

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 3.перебрати циклом while та вивести  числа тільки з непарним індексом

/*let sortWhile = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let h = 0;
while (h < sortWhile.length) {
    if (h % 2 === 1) {
        console.log(sortWhile[h]);
    }
    h++;
}*/

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 4.перебрати циклом for та вивести  числа тільки з непарним індексом

/*
let sortFor = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < sortFor.length; i++) {
    if (i % 2 === 1) {
        console.log(sortFor[i]);
    }
}
*/

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 5.перебрати циклом while та вивести  числа тільки парні  значення

/*
let whileNews = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let p = 0;
while (p < whileNews.length) {
    if (whileNews[p] % 2 === 0) {
        console.log(whileNews[p]);
    }
    p++
}
*/

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 6.перебрати циклом for та вивести  числа тільки парні  значення

/*let forNews = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < forNews.length; i++) {
    if (forNews[i] % 2 === 0) {
        console.log(forNews[i]);
    }
}*/

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 7.замінити кожне число кратне 3 на слово "okten"

/*
let numberON = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < numberON.length; i++) {
    if (numberON[i] % 3 === 0) {
        numberON[i] = 'okten';
    }
    console.log(numberON[i]);
}
*/

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 8.вивести масив в зворотньому порядку.

/*let revers_mas=[2,17,13,6,22,31,45,66,100,-18];

let mas_revers=revers_mas.reverse();
console.log(mas_revers);*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9.всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1.зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//  перебрати його циклом while

/*
let newsWhileDouble = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let f = newsWhileDouble.length - 1;
while (f >= 0) {

    console.log(newsWhileDouble[f]);
    --f;
}
*/

// 9.всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 2. перебрати його циклом for

/*
let DoubleFor = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (i = DoubleFor.length - 1; i >= 0; --i) {
    console.log(DoubleFor[i]);
}
*/

// 9.всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 3.перебрати циклом while та вивести  числа тільки з непарним індексом

/*
let sortWhileD = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let h = sortWhileD.length - 1;
while (h >= 0) {
    if (h % 2 === 1) {
        console.log(sortWhileD[h]);
    }
    --h;
}
*/


// 9.всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 4.перебрати циклом for та вивести  числа тільки з непарним індексом

/*
let sortFor = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = sortFor.length - 1; i >= 0; --i) {
    if (i % 2 === 1) {
        console.log(sortFor[i]);
    }
}*/

// 9.всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 5.перебрати циклом while та вивести  числа тільки парні  значення

/*
let whileNews = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let p = whileNews.length - 1;
while (p >= 0) {
    if (whileNews[p] % 2 === 0) {
        console.log(whileNews[p]);
    }
    --p;
}*/

// 9.всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 6.перебрати циклом for та вивести  числа тільки парні  значення

/*let forNews = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = forNews.length - 1; i >= 0; --i) {
    if (forNews[i] % 2 === 0) {
        console.log(forNews[i]);
    }
}*/

// 9.всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 7.замінити кожне число кратне 3 на слово "okten"

/*let numberON = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = numberON.length - 1; i >= 0; --i) {
    if (numberON[i] % 3 === 0) {
        numberON[i] = 'okten';
    }
    console.log(numberON[i]);
}*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

/*
let emptyMasNum = [];

for (let i = 0; i < 50; i++) {
    emptyMasNum[i] = i * 2;

}
console.log(emptyMasNum);
*/

// Створити пустий масив та :
//         заповнити його 50 непарними числами за допомоги циклу.

/*
let oddNum = [];

for (let i = 0; i < 50; i++) {
    oddNum[i] = i * 2 + 1;

}
console.log(oddNum);*/


//
//           Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

/*
let randomNumber = [];

for (let i = 0; i < 20; i++) {
    randomNumber[i] = Math.random();
}
console.log(randomNumber);*/


//     Створити пустий масив та :
//         Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


/*
let NumberRandom = [];

for (let i = 0; i < 20; i++) {
    NumberRandom[i] = Math.floor((Math.random() * 732 - 8) + 8);
}
console.log(NumberRandom);*/


//    2. Вивести за допомогою console.log кожен третій елемен

/*
let NumberRandom1 = [];

for (let i = 0; i < 20; i++) {
    NumberRandom1[i] = Math.floor((Math.random() * 732 - 8) + 8);
}
for (let i = 2; i < NumberRandom1.length; i += 3) {
    console.log(NumberRandom1[i]);
}*/


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

/*
let NumberRandom2 = [];

for (let i = 0; i < 20; i++) {
    NumberRandom2[i] = Math.floor((Math.random() * 732 - 8) + 8);
}
for (let i = 2; i < NumberRandom2.length; i += 3) {
    if (NumberRandom2[i] % 2 === 0) {
        console.log(NumberRandom2[i]);
    }
}*/


//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив


/*
let NumberRandom3 = [];

for (let i = 0; i < 20; i++) {
    NumberRandom3[i] = Math.floor((Math.random() * 732 - 8) + 8);
}
let NumberNewsMas=[];
for (let i = 2; i < NumberRandom3.length; i += 3) {
    if (NumberRandom3[i] % 2 === 0) {
       NumberNewsMas.push(NumberRandom3[i]);
    }
}
console.log(NumberNewsMas);*/


//    5. Вивести кожен елемент масиву, сусід справа якого є парним
//    EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

/*
let neighbor = [1, 2, 3, 5, 7, 9, 56, 8, 67];

for (let i = 0; i < neighbor.length; i++) {
    if (neighbor[i + 1] % 2 === 0) {
        console.log(neighbor[i]);
    }
}*/


// 6. Є масив з числами [100,250,50,168,120,345,188],
// Які характеризують вартість окремої покупки. Обрахувати середній чек.

/*
let purchase = [100, 250, 50, 168, 120, 345, 188];

let newsPurchase = 0;
for (let check of purchase) {
    newsPurchase += check;
}
console.log(newsPurchase / purchase.length);*/


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

/*
let NumberRandom1 = [];

for (let i = 0; i < 20; i++) {
    NumberRandom1[i] = Math.floor((Math.random() * 732 - 8) + 8);
}
let multiplyByFive = [];
for (let i = 0; i < NumberRandom1.length; i++) {
    multiplyByFive[i] = NumberRandom1[i] * 5;
}
console.log(multiplyByFive);*/


//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
//  і якщо елемент є числом - додати його в інший масив.

/*let addToNewsMas = [23, 645, 'good', 'fine', true, 'number', false, 'plate', 'child', 48];
let NewsToNumber = [];
for (let i = 0; i < addToNewsMas.length; i++) {
    if (typeof addToNewsMas[i] === 'number') {
        NewsToNumber[i] = addToNewsMas[i];
    }
}
console.log(NewsToNumber);*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

/*
let letters = ['a', 'b', 'c'];
let word="";
for (let i = 0; i < letters.length; i++) {
   word=word+letters[i];
}
console.log(word);*/

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

/*
let whileLetters = ['a', 'b', 'c'];

let i = 0;
let oneWord = "";
while (i < whileLetters.length) {
    oneWord = oneWord + whileLetters[i];
    i++;
}
console.log(oneWord);*/


//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

/*
let wordLetters = ['a', 'b', 'c'];

let twoWord = "";
for (let words of wordLetters) {
    twoWord = twoWord + words;
}
console.log(twoWord);*/


//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.


/*
let wordLetters1 = ['a', 'b', 'c'];

let twoWord1 = "";
for (let words1 in wordLetters1) {
    twoWord1 = twoWord1 + wordLetters1[words1];
}
console.log(twoWord1);
*/
