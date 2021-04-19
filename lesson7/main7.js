// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так,
// щоб при кліку на кнопку зникавл елемент с id="text".
//---------------------------------------------------------------------------------------------

// const element = document.getElementById('text');
//
// element.onclick = (ev => {
//     element.hidden = true;
// });

//-------------------------------------------------------------------------------------------
//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//-------------------------------------------------------------------------------------------

// const butt = document.getElementById('but1');
//
// butt.onclick = (ev => {
//     butt.hidden = true;
// });

//--------------------------------------------------------------------------------------------
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//     та повідомити про це користувача
//-----------------------------------------------------------------------------------------------------------

// const input1 = document.getElementById('input1');
// const butt = document.getElementById('but1');
//
// butt.onclick = (ev => {
//     if (+input1.value < 18) {
//         confirm('You are a minor !');
//     }
// });

//--------------------------------------------------------------------------------------------------------------
// - Створіть меню, яке розгортається/згортається при клику
//---------------------------------------------------------------------------------------------------------------

// const list = document.getElementById('list');
// const press = document.getElementById('but2');
//
// let flag = true;
// press.onclick = (ev => {
//     list.style.display = flag ? 'none' : 'block';
//     flag = !flag;
// });

//------------------------------------------------------------------------------------------------------------------
// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
//--------------------------------------------------------------------------------------------------------------------

// const comments = [
//     {
//         title: 'Lorem ipsum dolor sit amet,' +
//             ' consectetur adipisicing elit. Accusamus aperiam,' +
//             ' aut eius esse excepturi ipsam quaerat quo repellat tempora vel!',
//         body: 'Lorem ipsum dolor sit amet.'
//     },
//     {
//         title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
//             ' Expedita fugiat illum modi nemo nisi, quos?',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
//     },
//     {
//         title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores assumenda consequatur cum,' +
//             ' dignissimos dolore dolorum, illo illum itaque perferendis placeat provident quod ut vitae.',
//         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
//     }
// ];
//
// const loremDiv = document.getElementById('root');
// comments.forEach(item => {
//     const p = document.createElement('p');
//     const hed = document.createElement('h3');
//     const div = document.createElement('div');
//     const button = document.createElement('button');
//
//     button.innerText = 'To hide';
//
//     button.onclick = () => {
//         p.hidden = !p.hidden;
//     }
//
//     hed.innerHTML = item.body;
//     p.innerHTML = item.title;
//
//     div.appendChild(hed);
//     div.appendChild(p);
//     div.appendChild(button);
//
//     loremDiv.appendChild(div);
// });

//---------------------------------------------------------------------------------------------------------------------
// - Створити 2 форми  по 2 інпути в кожній.
// створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//---------------------------------------------------------------------------------------------------------------------

// const but3 = document.getElementById('but3');
//
// but3.onclick = (ev) => {
//     const myForms = document.forms;
//     for (let item of myForms) {
//         for (let myInput of item) {
//           console.log(myInput.value);
//         }
//     }
// };


//--------------------------------------------------------------------------------------------------------------------
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//---------------------------------------------------------------------------------------------------------------------


// const loremDiv = document.getElementById('root');
// const createTable = (string, columns, targetId) => {
//
//     const target = document.getElementById(targetId);
//     const table = document.createElement('table');
//
//     for (let i = 0; i < string; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             const td = document.createElement('td');
//             td.innerText = `${i} : ${j}`
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//
//     target.appendChild(table)
// }
//
// createTable(4, 8,'root');


//-------------------------------------------------------------------------------------------------------------------
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//--------------------------------------------------------------------------------------------------------------------

// const arrImg = [
//     {
//         alt: 'News of the World1',
//         url: './News%20of%20the%20World/News%20of%20the%20World1.jpg'
//     },
//     {
//         alt: 'News of the World2',
//         url: './News%20of%20the%20World/News%20of%20the%20World2.jpg'
//     },
//     {
//         alt: 'News of the World3',
//         url: './News%20of%20the%20World/News%20of%20the%20World3.jpg'
//     },
// ];
//
//
//
// const butLeft = document.getElementById('butLeft');
// const butRight = document.getElementById('butRight');
// const boxImg = document.getElementById('boxImg');
//
// let leftRightIndex = 0;
//
// butLeft.onclick = () => {
//     if (leftRightIndex - 1 < 0) {
//         leftRightIndex = arrImg.length - 1;
//     } else {
//         leftRightIndex = leftRightIndex -1;
//     }
//     boxImg.src = arrImg[leftRightIndex].url;
//     boxImg.alt = arrImg[leftRightIndex].alt;
// };
//
// butRight.onclick = () => {
//     if (leftRightIndex + 1 > arrImg.length - 1) {
//         leftRightIndex = 0;
//     } else {
//         leftRightIndex = leftRightIndex +1;
//     }
//     boxImg.src = arrImg[leftRightIndex].url;
//     boxImg.alt = arrImg[leftRightIndex].alt;
// };


//_____________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
//_____________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

//--------------------------------------------------------------------------------------------------------------------

// const censorship = ['uu', 'rr', 'oo', 'cc'];
//
// const input5 = document.getElementById('input5');
// const but5 = document.getElementById('but5');
//
// but5.onclick = (ev) => {
//     const text = input5.value;
//     const audit = censorship.includes(text);
//     if (audit) {
//         alert('So not good to say');
//     }
// }


//---------------------------------------------------------------------------------------------------------------------
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

//---------------------------------------------------------------------------------------------------------------------

// const censorship2 = ['uuu', 'rrr', 'ooo', 'ccc'];
//
// const input6 = document.getElementById('input6');
// const but6 = document.getElementById('but6');
//
// but6.onclick = (ev) => {
//     const text2 = input6.value.split(' ');
//
//     let audit2 = false;
//     text2.forEach(censorship => {
//         audit2 = censorship2.includes(censorship);
//     });
//     if (audit2) {
//         alert('So not good to say');
//     }
// };


//---------------------------------------------------------------------------------------------------------------------
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст
// по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
//
//---------------------------------------------------------------------------------------------------------------------



// const h2 = document.getElementsByTagName('h2');
// const menu = document.createElement('ul');
// document.getElementById('content').appendChild(menu);
//
// let add = 0;
// for (let item of h2) {
//     const li = document.createElement('li');
//     let a = document.createElement('a');
//     a.innerText = item.innerText;
//
//     a.setAttribute('href', '#href' + add);
//     li.appendChild(a);
//     menu.appendChild(li);
//
//     let a2 = document.createElement('a');
//     h2[add].appendChild(a2);
//     a2.setAttribute('name', 'href' + add);
//     add++;
// }




//---------------------------------------------------------------------------------------------------------------------
// -- Взяти масив юзерів


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


// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву.
// Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
//---------------------------------------------------------------------------------------------------------------------



// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const input3 = document.getElementById('input3');
//
// let usersBox = JSON.parse(JSON.stringify(usersWithAddress));
// document.getElementById('res').onclick = function() {
//
//     if (input1.checked) {
//         usersBox = usersBox.filter(value => value.isMarried === false);
//     }
//     if (input2.checked) {
//         usersBox = usersBox.filter(value => value.age >= 29);
//     }
//     if (input3.checked) {
//         usersBox = usersBox.filter(value => value.address.city === 'Kyiv');
//     }
//     for (let user of usersBox) {
//
//         document.write(`<div>
// Id: ${user.id}
// Name: ${user.name}
// Age: ${user.age}
// Married: ${user.isMarried}
// City: ${user.address.city}
// </div>`)
//     }
// };




























































































