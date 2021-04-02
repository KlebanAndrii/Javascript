//- Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//1) Напишіть код,  який за допомоги
// document.getElementById або
// document.getElementsByClassName або
// document.getElementsByTagName :

//           a) отримує текст з параграфа з id "content"


const oneContent = document.getElementById('content');


//           b) отримує текст з блоку з id "rules"

const oneRules = document.getElementById('rules');


//           c) замініть текст параграфа з id 'content' на будь-який інший


oneContent.innerText = 'Hello man !';

//           d) замініть текст параграфа з id 'rules' на будь-який інший


oneRules.innerText = 'I drinks coffee.';

//           e) змініть кожному елементу колір фону на червоний

oneContent.style.backgroundColor = 'red';
oneRules.style.backgroundColor = 'red';

//           f) змініть кожному елементу колір тексту на синій

oneContent.style.color = 'blue';
oneRules.style.color = 'blue';

//           g) отримати весь список класів елемента з id=rules і вивести їх в console.log


const classElements = document.getElementById('rules').classList;
console.log(classElements);


//           h) отримати всі елементи з класом fc_rules


let elementClass = document.getElementsByClassName('fc_rules');


//           i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (const colorElement of elementClass) {
    colorElement.style.color = 'red';
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


//2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку


for (const block of users) {
    const usersDiv = document.createElement('div');
    usersDiv.innerHTML = `Name: ${block.name}.<br> 
                          Age: ${block.age}.<br> 
                          City: ${block.address.city} <p>`;
    document.body.appendChild(usersDiv);
}

//3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const block of users) {

    const divUsers = document.createElement('div');
    divUsers.innerHTML = `Name: ${block.name}.
                         <br> Age: ${block.age}.`;


        const address = document.createElement('div');
        address.innerHTML = `<div>Country: ${block.address.country}</div>
                                  <div>City: ${block.address.city}</div>
                                  <div>Street: ${block.address.street}</div>
                                  <div>House number: ${block.address.houseNumber}</div> <hr>`
           document.body.appendChild(divUsers);
        document.body.appendChild(address);

}