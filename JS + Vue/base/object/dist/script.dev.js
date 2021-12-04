"use strict";

var user = {
  firstName: 'Dima',
  age: 23,
  isAdmin: true,
  mail: 'test@yandex.ru',
  'user-address': {
    city: 'Moscow'
  },
  skills: ['html', 'css', 'js']
};
var value,
    prop = 'skills';
value = user.firstName;
value = user['isAdmin'];
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop]['0'];
user.firstName = 'Dmitriy';
user.info = 'some info';
user['user-address'].city = 'Korolev';
user['user-address'].country = 'Russia';
console.log(value);
console.log(user);
var phone = {
  product: 'iphone',
  price: 1000,
  currency: 'dollar',
  details: {
    model: 13,
    color: 'red'
  }
};
console.log(phone);