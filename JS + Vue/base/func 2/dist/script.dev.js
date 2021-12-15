"use strict";

/**
 * ! ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
 */
function foo() {
  console.log('hello world');
}

foo.field = 'Dima'; // console.log(foo.field);
// *АНАЛОГ МЕТОДА MAP

var arr = ['Dima', 'Sergey', 'Maks', 'Viktor', 'Olga'];
var newArr = [];

for (var i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length); // * Массив из длины символов
} // console.log(newArr);


var newArr2 = [];

for (var _i = 0; _i < arr.length; _i++) {
  newArr2.push(arr[_i].toUpperCase());
} // console.log(newArr2)

/**
 * ? то же самое на функции высшег опорядка
 */


var names = ['Dima', 'Sergey', 'Maks', 'Viktor', 'Olga'];

function mapArray(arr, fn) {
  var res = [];

  for (var _i2 = 0; _i2 < arr.length; _i2++) {
    res.push(fn(arr[_i2]));
  }

  return res;
}

function nameLength(el) {
  // console.log(el);
  return el;
}

function nameToUppercase(el) {
  return el.toUpperCase();
}

var result = mapArray(names, nameLength);
var result2 = mapArray(names, nameToUppercase); // console.log(result);
// console.log(result2);

/** */

function greeting(firstName) {
  return function (lastName) {
    return "Hello, ".concat(firstName, " ").concat(lastName);
  };
} // const testGreeting = greeting('Dima')
// const fullName = testGreeting('Belyaev')


var fullName = greeting('Dima')('Belyaev'); // console.log(fullName);

function question(job) {
  var jobDictionary = {
    developer: 'что такое JavaScript?',
    teacher: 'какой предмет вы ведете?'
  };
  return function (name) {
    return "".concat(name, ", ").concat(jobDictionary[job]);
  };
}

var developerQuestion = question('developer');
console.log(developerQuestion('Dima'));
var teacherQuestion = question('teacher');
console.log(teacherQuestion('Vika'));