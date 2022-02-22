'use strict';
// 1 - Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];
let n = 20;
let A = new Array(n);

for(let i = 0; i < A.length; i++) {
 A[i] = Math.floor(Math.random()*20);
}
console.log(A);

// 3 - найти максимальное число и минимальное число.
let maxA = A[0];
let minA = A[0];

for (let i = 0; i < A.length; i++) {
 if(A[i] > maxA) {
  maxA = A[i];
 }

 if(A[i] < minA) {
  minA = A[i];
 }
}
console.log('Максимальное и минимальное число массива A ', maxA, minA);

// 2 - проверить все числа на простоту, и найденные простые числа сохранить в массив B.
let B = new Array();

for(let k = 0; k < A.length; k++) {
 let n = A[k];

 if (n < 2) {
  continue;
 }

 let isPrime = true;

 for(let j = 2; j < n; j++) {
  if(n % j === 0) {
   isPrime = false;
   break;
  }
 }

 if (isPrime) {
  B.push(n);
 }
}
console.log('Простые числа из массива A', B);

// 4 - Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив. Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).

// С использованием дополнительного массива
let newA = [];
for(let i = 0; i < A.length; i++) {
 newA[i] = A[(A.length - 1) - i];
}
console.log('Перевернутый массив 1', newA);

//
for (let i = A.length-1; i >= 0; i--) {
 A.push(A[i]);
}
A.splice(0, A.length/2);
console.log('Перевернутый массив 2', A);

// 2.1 - Создать массивы А и В. Заполнить случайными числами. Найди все элементы которые повторяются в массивах А и B.
// 2.2 - В одномерном массиве произвести такую замену: 1 элемент поменять с 2, 3 элемент поменять с 4, 5 элемент поменять с 6 и тд. Если длинна массива непарная - последний элемент не трогать.
// Например: было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

let A2 = [1, 2, 3, 4, 5, 6];
let B2 = [1, 5, 686, 58575, 3, 545];
// let A2 = new Array(n);
// let B2 = new Array(n);
//
// for(let i = 0; i < A2.length; i++) {
//  A2[i] = Math.floor(Math.random()*150);
// }
// for(let i = 0; i < B2.length; i++) {
//  B2[i] = Math.floor(Math.random()*150);
// }
// console.log('Массив A2 ', A2);
// console.log('Массив B2 ', B2);

// var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//  return a.concat(b);
// });
// flattened равен [0, 1, 2, 3, 4, 5]

let concatA2B2 = A2.concat(B2);
console.log(concatA2B2)
let results;
let xx = [];
let flag = false;

for(let i = 0; i < concatA2B2.length; i++) {
 results = concatA2B2.filter(item => concatA2B2[i] === item );
 // console.log(results);

 if(results.length > 1) {
  // xx = results;
  flag = true;
 }

 if(flag) {
  xx += results;
 }
}

console.log(xx)
