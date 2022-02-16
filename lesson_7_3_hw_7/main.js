'use strict';
// Написать функцию `compress(list)`, которая сжимает серии массива, состоящего из единиц и нулей по следующему принципу:
// например, массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1] преобразуется в [4,7,2,4,1,1]

let list = compress([0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1]);
console.log(list); // [4,7,2,4,1,1]

function compress(arr) {
 let arrResult = [],
     count = 0,
     elem = arr[0];

 for(let i = 0; i < arr.length; i++) {
    if( arr[i] == elem) {
     count += 1;
    } else {
     arrResult.push(count);
     count = 1;
    }
  elem = arr[i];
 }

 arrResult.push(count);
 return arrResult;
}