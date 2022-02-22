'use strict';
// В двумерном массив удалить столбцы где сумма элементов столбца < 0.
// Массив должен быть размером 10 на 10, заполненым случайными числам в диапазоне от -20 до +20
let n = 10;
let m = 10;
let A = new Array(n);

// Формирование массива
for(let i = 0; i < A.length; i++) { // ряд(строка)
 A[i] = new Array(m);
 for(let j = 0; j < A[i].length; j++) { // столбец
  A[i][j] = Math.floor((Math.random()*41) - 20);
  document.write(A[i][j] + '&nbsp;&nbsp;');
 }
 document.write('<br/>');
}
console.log(A);
document.write('<br/>');


// Сумма столбца
let i, j, arSum = A[0].slice;
let k = 0

for(i = 1; i < A.length; i++) { // ряд(строка)
 for(j = 0; j < A[i].length; j++) { // столбец
  //arSum[j] += A[i][j];
   k += A[j][i]
 }
}


document.write('<br/>');
document.write(arSum);
document.write('<br/>');
document.write('<br/>');


console.log(arSum);


// Формирование массива
for(let i = 0; i < A.length; i++) { // ряд(строка)
 for(let j = 0; j < A[i].length; j++) { // столбец
  document.write(A[i][j] + '&nbsp;&nbsp;');
 }
 document.write('<br/>');
}