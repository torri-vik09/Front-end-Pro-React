'use strict';
// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. При копировании массива - функция применится к каждому элементу копируемого массива.
// newL = copy(list, function(value){ return value*10; })

let list = [4,7,2,4,1,1];
let newL = copy(list, function(value){ return value*10; })
let newL2 = copy(list)
console.log(newL); // [40, 70, 20, 40, 10, 10]
console.log(newL2); // [4,7,2,4,1,1]

function copy(arr, f) {
 let arrResult = [];

 for(let i = 0; i < arr.length; i++) {
    if(f){
        arrResult.push(f(arr[i]));
    } else {
        arrResult.push(arr[i]);
    }
 }
 return arrResult;
}