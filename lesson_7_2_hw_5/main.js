'use strict';
// Написать функцию, которая примет как аргументы(параметры) два массива и сравнит суммы всех ЧИСЛОВЫХ элементов.
// Тот массив, сумма которого большая - должен вернутся функцией.

function sumElem(arr1, arr2) {

    function sumArr(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if(isNaN(arr[i])) {
                continue;
            } else {
                sum += Number(arr[i]);
            }
        }
        return sum;
    }

    if(sumArr(arr1) > sumArr(arr2)) {
        return arr1;
    } else {
        return arr2;
    }
}

let sum = sumElem(
    [1, 10, 10, '30'], // 51
    [10, 10, 10, 'text', '10'] // 40
);
console.log(sum);