"use strict";

function getThis() {
  console.log(this);
} // getThis()
// console.log(window.getThis)


var product = {
  name: 'intel',
  price: 100,
  getPrice: function getPrice() {
    console.log(this.price);
  },
  info: {
    information: ['2.3 Ghz'],
    getInfo: function getInfo() {
      console.log(this);
    }
  }
};
product.getPrice();
product.info.getInfo();