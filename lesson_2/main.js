'use strict';
// 1. Ввести с клавиатуры 2 числа `a` и `b` (где `a <<< b`. Символ "<<<" - означает "сильно меньше" ). Запустить цикл перебора от `a` до `b`. Вывести в консоль квадраты чётных чисел.

let a, b;

do {
    a = parseInt(prompt('Введите число a', ''));
    b = parseInt(prompt('Введите число b, больше на один десяток чем число a', ''));
} while (a > b);

for(let i = a; i <= b; i++) {
    if(i % 2 === 0) {
        console.log('Квадратного четного числа ' + i + ' = ' + Math.pow(i, 2));
    }
}

// 2. Заставить пользователя ввести с клавиатуры число (не строку и не NaN).

let number;

do {
    number = prompt('В поле можно ввести только число!');
} while (isNaN(number))

// 3. Проверить число на простоту. Число вводить с клавиатуры.

let numberPrime = prompt('Введите число', '');
let flag = true; // по умолчанию считаем число простым

for ( let i = 2; i < numberPrime; i++) {
    if(numberPrime % i === 0) {
        flag = false; // меняем значение флага, если число поделилось
        break; // выйдем из цикла
    }
}

if(flag) {
    console.log(numberPrime + ' Простое число!');
} else {
    console.log(numberPrime + ' Не простое число!');
}

// 4. Посчитать сумму простых чисел от 0 до 250.

let maxNumber = 250,
    sumPrime = 0;

for(let i = 2; i <= maxNumber; i++) {
    let flag = true;

    for ( let j = 2; j < i; j++) {
        if(i % j === 0) {
            flag = false;
            break;
        }
    }

    if(flag) {
        sumPrime += i;
    }
}

console.log('Сумма простых чисел = ' + sumPrime)