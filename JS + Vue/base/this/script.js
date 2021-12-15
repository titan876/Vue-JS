function getThis() {
    console.log(this);
}

// getThis()

// console.log(window.getThis)

const product = {
    name: 'intel',
    price: 100,
    getPrice: function() {
        console.log(this.price);
    },
    info: {
        information: ['2.3 Ghz'],
        getInfo: function() {
            console.log(this);
        }
    }
}

product.getPrice()
product.info.getInfo()