/*
Практика
1. Написать программу рассчета обьема цилиндра, все данные (кроме числа PI) вводятся с клавиатуры руками. (число Пи в js выглядит так: Math.PI). Также нужно вывести информацию в таком виде:

**************
Обьем цилиндра с площадью основы *S* (вывети значение), радиусом *R* и высотой *H* равен:
--------------------
V = результат.
-------------------
end.

P.S. Все звездочки и черточки нужно нарисовать. Вывод выполнять в документ (document.write())
*/

'use strict';

let separator_1 = '<br/>**************<br/>',
    separator_2 = '<br/>--------------------<br/>',
    S = parseInt(prompt()),
    R = parseInt(prompt()),
    H = parseInt(prompt()),
    V1 = S * H,
    V2 = Math.PI * H * R;

document.write(separator_1 +
    'Обьем цилиндра с площадью основы * S = '
    + S +
    ' *, радиусом * R = '
    + R +
    ' * и высотой * H = '
    + H +
    ' * равен:'
    + separator_2 +
    'V1 = SH = '
    + V1 + separator_2 +
    'V2 = πHR = '
    + V2 + separator_2 +
    'end.');

/*
Практика
2. Ввести с клавиатуры 3 переменные (a, b, c). Привести их все в число. Выполнить операцию суммирования всех переменных. Указать какие переменные являются чётными.
 */

let a = parseInt(prompt()),
    b = parseInt(prompt()),
    c = parseInt(prompt()),
    d = a + b + c,
    oddNumberA = a % 2,
    oddNumberB = b % 2,
    oddNumberC = c % 2;

console.log("Сумма всех переменных " + d);

if(!oddNumberA) {
    console.log("Чётная переменная *a* " + a);
}

if(!oddNumberB) {
    console.log("Чётная переменная *b* " + b);
}

if(!oddNumberC) {
    console.log("Чётная переменная *c* " + c);
}