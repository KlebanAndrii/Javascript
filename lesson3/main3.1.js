//  Взяти файл template_2.html та працювати в ньому
//  1) Напишіть код, який :
//           a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

/*const tighten = document.getElementById('main_header');
tighten.innerText = 'mon-year';
tighten.style.color = 'red';*/

//          b) робить шириниу елементу ul 400px

/*let ul = document.getElementsByTagName("ul")
ul[0].setAttribute("style", "width:400px");*/

//           c) робить шириниу всіх елементів з класом linkList шириною 50%

/*let list = document.getElementsByClassName('linkList');
for (let i = 0; i < list.length; i++) {
    list[i].setAttribute("style", "width:50%");
}*/

//            d) отримує текст який зберігається в елементі з класом listElement2

/*let save = document.getElementsByClassName('listElement2')[0].textContent;
console.log(save)*/


//               e) отримує всі елементи li та змінює ім колір фону на сірий

/*let color = document.getElementsByTagName('li');
for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = 'gray';
}*/


//                 f) отримує всі елементи 'a' та додає їм клас anchor

/*let element = document.getElementsByTagName('a');
for (let i = 0; i < element.length; i++) {
    element[i].classList.add('anchor');
}

console.log(element);*/


//    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
//    змінює йому розмір тексту на 40 пікселів

/*let elements = document.getElementsByTagName('a');
for (let i = 0; i < elements.length; i++) {
    if (elements[i].textContent === 'link3') {
        elements[i].style.fontSize = '40px';
    }
}*/

//      h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

/*
let elements = document.getElementsByTagName('a');
for (let i = 0; i < elements.length; i++) {
    if (elements[i].textContent==='link2') {
        elements[i].classList.add('element_Link2');
    }
    console.log(elements[i])
}
*/


//       i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

/*let color = document.getElementsByClassName('sub-header');
for (let i = 0; i < color.length; i++) {
    if (color[i] === color[0]) {
        prompt(color[i].style.backgroundColor = 'red');
    }
    if (color[i]===color[1]) {
        prompt(color[i].style.backgroundColor = 'blue');
    }
}*/


//    j) отримує всі елементи 'sub-header'
//    та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

/*let color = document.getElementsByClassName('sub-header');
for (let i = 0; i < color.length; i++) {
    if (color[i].textContent === 'content 2 segment') {
        prompt(color[i].style.color = 'red');
    }
}*/

//    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

/*
let text = document.getElementsByClassName('content_1');
for (let i = 0; i < text.length; i++) {
    prompt(text[i].innerHTML = 'I finally did it');
}
*/


//                       l) отримати елементи p та змінити їм padding на 20px

/*
let size = document.getElementsByTagName('p');
for (let i = 0; i < size.length; i++) {
    size[i].style.padding = '20px'
}
*/


//       m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

/*let name = document.getElementsByClassName('text2');
for (let i = 0; i < name.length; i++) {
    name[i].innerHTML = 'mon-year';
}*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];
// 2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

for (let item of rules) {
    const block=document.createElement('div');
block.innerHTML=`<div>${item.title}</div>
                  <div>${item.body}</div><br>`
    block.style.color='red'
document.body.appendChild(block)

}








































