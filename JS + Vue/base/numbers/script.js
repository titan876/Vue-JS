const num1 = 10;
const num2 = 20;
let value;

value = num1 + num2;
value = 4 % 2; //      остаток от деления


value = 0.6 + 0.7
value = parseFloat(value.toFixed(2)) //  Округление до 2 знаков после запятой
    // value = (0.6 * 10 + 0.7 * 10) / 10

//  Math

value = Math.PI
value = Math.random() //  Рандомное число от 0 до 1
value = Math.round(2.4) //  Округление
value = Math.ceil(2.1) // Округление в большую сторону
value = Math.floor(2.1) // Округление в меньшую сторону
value = Math.min(2, 12, 15, 0, 12)
value = Math.max(2, 12, 15, 6, 12)

value = Math.floor(Math.random() * 100 + 1) //  Получвачем рандомное число

const arr = ['black', 'red', 'yellow', 'white', 'pink', 'blue', 'orange', 'green']
value = Math.floor(Math.random() * arr.length) //  Получаем рандомный элемент массива

// console.log(value, arr[value]);



/**
 * ? Homework
 * Получить число pi из Math и округлить его до 2-х знаков после точки
 * Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
 * Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число.

 * Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
 *Получить число из строки ‘100$’
 */

let digPi = Math.PI;
digPi = +digPi.toFixed(2)
console.log(digPi);

let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51)
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51)
console.log(min, max);

let randomDig = Math.random() * 100 + 1
randomDig = +randomDig.toFixed(2)
console.log(randomDig);

let randomDig2 = Math.random() * 10 + 1
randomDig2 = Math.round(randomDig2)
console.log(randomDig2);

let result = parseFloat((0.6 + 0.7).toFixed(1))
console.log(result);

let stToNum = parseInt('100$')
console.log(stToNum);