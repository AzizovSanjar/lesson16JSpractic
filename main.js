//Задание 1: Создание бургер - меню

//Создайте бургер - меню для мобильной версии веб - страницы.При клике на значок "бургер" меню должно разворачиваться или сворачиваться.Используйте свойство classList для добавления и удаления классов, а также стилизуйте его с помощью CSS.

let burger_menu = document.querySelector('.burger_menu');
let content = document.querySelector('.content');

burger_menu.addEventListener('click', function(){
	burger_menu.classList.toggle('active');
	content.classList.toggle('active');
})




//Задание 2: Интерактивное меню

//Создайте простое интерактивное меню, используя HTML, CSS и JavaScript. У вас будет список элементов меню, и при клике на каждый элемент меню он будет менять свой стиль. Используйте свойство classList для добавления и удаления классов, а также свойство style для изменения стилей элементов.

let menu = document.querySelector('#menu');

    let menuItem = menu.querySelectorAll('.menu-item');

    menu.addEventListener('click', (event) => {

    let target = event.target; 
    
    if(target.classList.contains('menu-item')) {
        
        for(let i = 0; i < menuItem.length; i++) {
        
        menuItem[i].classList.remove('active');
        }

        target.classList.add('active');
    }
    
    });



//Задание 3:Spread оператор

//Создайте массив numbers с несколькими числами.
//Создайте новый массив numbersCopy, используя spread оператор, чтобы скопировать все элементы из массива numbers.
//Добавьте новое число в массив numbers.
//Выведите оба массива (numbers и numbersCopy) в консоль, чтобы показать, что изменения в одном массиве не влияют на другой.

let numbers = [1, 2, 3, 4, 5]

let numbersCopy = [...numbers]

numbers[3] = 'New-York'

console.log(numbers);

console.log(numbersCopy);


//Задание 4:Rest параметр

//Напишите функцию sum с использованием rest параметра, которая принимает любое количество аргументов (чисел) и возвращает их сумму.
//Вызовите функцию sum несколько раз с разным количеством аргументов.
//Выведите результаты вызовов функции sum в консоль.
//Это задание позволит ученикам понять, как использовать операторы spread и rest для работы с массивами и аргументами функций. Они смогут увидеть, как spread позволяет копировать данные, а rest параметр собирать их в массивы.


function sum (a, b, c, ...rest) {

    console.log(rest)

    return rest[0] + ' ' + rest[1] + ' ' + a + ' ' + b + ' ' + c
}

console.log(sum(1, 2, 5, 'Мега', 'Лаб'));

