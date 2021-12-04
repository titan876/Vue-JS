"use strict";

var firstName = 'Dima';
var latstName = 'Belyaev';
var age = 23;
var str;
str = '<ul>' + '<li>first name: ' + firstName + '</li>' + '<li>last name: ' + latstName + '<li>' + '<li>age: ' + age + '</li>' + '</ul>'; // console.log(str);
// ES6

str = "\n    <ul>\n        <li>first name: ".concat(firstName, "</li>\n        <li>last name: ").concat(latstName, "</li>\n        <li>age: ").concat(age, "</li>\n        <li>Math random: ").concat(Math.random(), "</li>\n        <li>").concat(5 + 5, "</li>\n    </ul>\n");
document.body.innerHTML = str;
/**
 * ? HOMEWORK
 * 
 * 
 * Получить первую и последнюю буквы строки

Сделать первую и последнюю буквы в верхнем регистре

Найти положение слова ‘string’ в строке

Найти положение второго пробела (“вручную” ничего не считать)

Получить строку с 5-го символа длиной 4 буквы

Получить строку с 5-го по 9-й символы

Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)



Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016” 
 */

var string = "some test string";
string = string[0] + string[string.length - 1];
console.log(string);
string = string[0].toUpperCase() + string[string.length - 1].toUpperCase();
console.log(string);
var str2 = "some test string";
str2 = str2.indexOf('string');
console.log(str2);
str2 = str.indexOf(' ', 5);
console.log(str2 - 1);
var str3 = "some test string";
str3 = str3.slice(5, 9);
console.log(str3);
var str4 = "some test string";
str4 = str4.slice(0, -6);
console.log(str4);
var a = 20,
    b = 16,
    res;
res = a.toString() + b.toString();
console.log(res);