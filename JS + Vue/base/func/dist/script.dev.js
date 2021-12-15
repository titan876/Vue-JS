"use strict";

(function (msg) {
  console.log(msg);

  function sayHello() {
    var firstNmae = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Default";
    var lastname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Default";
    //  В случае отсутсвия парамметра можно сделать дефолты 
    if (!firstNmae) return console.error("Error"); //  Если значениея не переданы, то возвращаем ошибку

    console.log(firstNmae, lastname);
    return "hello ".concat(firstNmae, " ").concat(lastname); //  Возвращаем значения
  }

  var res = sayHello('Dima', 'Belyaev');
  var res2 = sayHello('Misha', 'Serov') + "!";
  var res3 = sayHello(); //  Вернет ошибку

  var res4 = sayHello(null);
  console.clear();
  var x = 10;

  function foo() {
    var x = 20; //  Переменная локальная для функции

    console.log(x);
    return x;
  }

  foo();
  console.log(x);
  console.clear();
  var user = {
    name: 'Dima',
    age: 23
  };

  function getObj(obj) {
    // console.log(obj)
    obj.name = "Dmitriy";
  }

  getObj(user);
  console.log(user);
  console.clear();

  var square = function square(x) {
    //  Нельзя вызывать если функция находится в константе
    return x * x;
  };
})("Hello world"); // Функция вызывается сразу же


function foo(x) {
  // console.log(arguments)
  // console.log(x);
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

foo(11, "string", [1, 2, 3, 4]);
console.clear();
/**
 * * Перемножение 
 */

function home1() {
  var cnt = 1;

  for (var i = 0; i < arguments.length; i++) {
    cnt *= arguments[i];
  } // console.log(cnt);

}

home1(2, 4, 5, 6);
/**
 * * Функция строки перевертыша
 */

function reverseString(str) {
  var str2 = '';

  if (typeof str === 'string') {
    for (var i = str.length - 1; i >= 0; i--) {
      str2 += str[i];
    }

    console.log(str2);
  } else {
    console.error('Not a sting');
  }
}

reverseString('test');
reverseString('');
reverseString(null);
reverseString(undefined);
reverseString();
console.clear();
/**
 * * Угадываение чисел
 */

function guessTheNumber(num) {
  var wrongNumber = new Error('Please provide number if range 0 - 10');
  var notNumber = new Error('Please provide a valid number');
  if (typeof num != 'number') return console.log(notNumber);else if (0 < num && num > 10) return console.log(wrongNumber);else {
    var rand = Math.floor(Math.random() * 10);
    rand === num ? console.log('You Win') : console.log("You are lose, your number is ".concat(num, ", the random number is ").concat(rand));
  }
} // guessTheNumber(5);
// guessTheNumber(15);


guessTheNumber(undefined);