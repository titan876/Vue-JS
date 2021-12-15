"use strict";

// while, do while, for, for of, for in
var i = 0;

while (++i <= 10) {// console.log(i);
}

do {// console.log('acation');
} while (i < 0);

for (var _i = 0; _i < 10; _i++) {
  if (_i === 5) {
    // continue    //      Пропускает цифру 5
    break; //  Прерывает работу цикла для чего-то
  } // console.log(i);

}

var str = 'Hello';
var res = '';

for (var _i2 = 0; _i2 < str.length; _i2++) {
  // console.log(str[i] + '!');
  res += str[_i2] + '*';
} // console.log(res);


var colors = ['white', 'black', 'yellow', 'orange'];

for (var _i3 = 0; _i3 < colors.length; _i3++) {
  // console.log(colors[i]);
  colors[_i3] = colors[_i3].toUpperCase();
} // console.log(colors);


var users = [{
  name: 'Dima',
  age: 23
}, {
  name: 'Oleg',
  age: 30
}, {
  name: 'Maks',
  age: 28
}, {
  name: 'Vika',
  age: 19
}];
var usersObj = {};

for (var _i4 = 0; _i4 < users.length; _i4++) {
  // console.log(users[i].name);
  usersObj[users[_i4].name] = users[_i4];
} // console.log(usersObj['Dima']);
//  For in для перебора объектов


var user = {
  name: 'Dima',
  age: 23
};
/**
 * ! FOR IN
 */

for (var key in users) {} // console.log(key);
// console.log(users[key]);
// For of для более удобного перебора массивов

/**
 * ! FOR OF
 */


for (var _i5 = 0, _users = users; _i5 < _users.length; _i5++) {
  var value = _users[_i5];
} // console.log(value);

/**
 * * Каждое слово с большой буквы
 */


var a = 'I am in the easycode';
var b = '';

for (var _i6 = 0; _i6 < a.length; _i6++) {
  b += a[_i6 - 1] == ' ' ? a[_i6].toUpperCase() : a[_i6];
}

console.log(b);
/**
 * * Строка перевертыш
 */

var string = 'tseb eht ma i';
var str2 = '';

for (var _i7 = string.length - 1; _i7 >= 0; _i7--) {
  str2 += string[_i7];
}

console.log(str2);
/**
 * * Факториал
 */

var n = 10,
    result = 1;

for (var _i8 = 1; _i8 <= n; _i8++) {
  result = result * _i8;
  console.log(result);
}
/**
 * * Удалить пробелы
 */


var a4 = 'JavaScript is a pretty good language';
var b4 = '';

for (var _i9 = 0; _i9 < a4.length; _i9++) {
  b4 += a4[_i9 - 1] == ' ' ? a4[_i9].toUpperCase() : a4[_i9];
}

console.log(b4.split(' ').join(''));
/**
 * *Нечетные числа в массиве
 */

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (var _i10 = 0, _arr = arr; _i10 < _arr.length; _i10++) {
  var _value = _arr[_i10];

  if (_value % 2 === 1) {
    console.log(_value);
  }
}
/**
 * * Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in
 */


var list = {
  name: 'denis',
  work: 'easycode',
  age: 29
};

for (var _key in list) {
  if (typeof list[_key] === 'string') {
    var first = list[_key][0].toUpperCase();

    console.log(first + list[_key].slice(1));
  } else {
    console.log(list[_key]);
  }
}