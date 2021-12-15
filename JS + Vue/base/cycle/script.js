// while, do while, for, for of, for in

let i = 0
while (++i <= 10) {
    // console.log(i);
}

do {
    // console.log('acation');
} while (i < 0)

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        // continue    //      Пропускает цифру 5
        break //  Прерывает работу цикла для чего-то
    }
    // console.log(i);
}

let str = 'Hello'
let res = ''

for (let i = 0; i < str.length; i++) {
    // console.log(str[i] + '!');
    res += str[i] + '*'
}
// console.log(res);

let colors = ['white', 'black', 'yellow', 'orange']

for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
    colors[i] = colors[i].toUpperCase()
}
// console.log(colors);

const users = [{
        name: 'Dima',
        age: 23
    },
    {
        name: 'Oleg',
        age: 30
    },
    {
        name: 'Maks',
        age: 28
    },
    {
        name: 'Vika',
        age: 19
    },
]

const usersObj = {}

for (let i = 0; i < users.length; i++) {
    // console.log(users[i].name);
    usersObj[users[i].name] = users[i]
}

// console.log(usersObj['Dima']);

//  For in для перебора объектов

const user = {
        name: 'Dima',
        age: 23
    }
    /**
     * ! FOR IN
     */

for (let key in users) {
    // console.log(key);
    // console.log(users[key]);
}

// For of для более удобного перебора массивов

/**
 * ! FOR OF
 */


for (let value of users) {
    // console.log(value);
}

/**
 * * Каждое слово с большой буквы
 */

let a = 'I am in the easycode'
let b = ''
for (let i = 0; i < a.length; i++) {
    b += (a[i - 1] == ' ') ? a[i].toUpperCase() : a[i]
}
console.log(b);

/**
 * * Строка перевертыш
 */

let string = 'tseb eht ma i'
let str2 = ''

for (let i = string.length - 1; i >= 0; i--) {
    str2 += string[i]
}

console.log(str2);

/**
 * * Факториал
 */
let n = 10,
    result = 1

for (let i = 1; i <= n; i++) {
    result = result * i
    console.log(result);
}

/**
 * * Удалить пробелы
 */

let a4 = 'JavaScript is a pretty good language'
let b4 = ''
for (let i = 0; i < a4.length; i++) {
    b4 += (a4[i - 1] == ' ') ? a4[i].toUpperCase() : a4[i]
}
console.log(b4.split(' ').join(''));

/**
 * *Нечетные числа в массиве
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let value of arr) {
    if (value % 2 === 1) {
        console.log(value);
    }
}

/**
 * * Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in
 */

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let key in list) {
    if (typeof list[key] === 'string') {
        let first = list[key][0].toUpperCase();
        console.log(first + list[key].slice(1));
    } else {
        console.log(list[key]);
    }
}