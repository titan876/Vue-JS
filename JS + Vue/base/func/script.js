(function(msg) {
    console.log(msg)

    function sayHello(firstNmae = "Default", lastname = "Default") { //  В случае отсутсвия парамметра можно сделать дефолты 
        if (!firstNmae) return console.error("Error"); //  Если значениея не переданы, то возвращаем ошибку
        console.log(firstNmae, lastname);
        return `hello ${firstNmae} ${lastname}` //  Возвращаем значения
    }


    let res = sayHello('Dima', 'Belyaev')
    let res2 = sayHello('Misha', 'Serov') + "!"
    let res3 = sayHello() //  Вернет ошибку
    let res4 = sayHello(null)
    console.clear()

    let x = 10

    function foo() {
        let x = 20 //  Переменная локальная для функции
        console.log(x)
        return x
    }

    foo()

    console.log(x);
    console.clear()

    const user = {
        name: 'Dima',
        age: 23
    }

    function getObj(obj) {
        // console.log(obj)
        obj.name = "Dmitriy"
    }

    getObj(user)
    console.log(user)
    console.clear()

    const square = function(x) { //  Нельзя вызывать если функция находится в константе
        return x * x
    }


})("Hello world");
// Функция вызывается сразу же

function foo(x) {
    // console.log(arguments)
    // console.log(x);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

foo(11, "string", [1, 2, 3, 4])
console.clear()

/**
 * * Перемножение 
 */

function home1() {
    let cnt = 1
    for (let i = 0; i < arguments.length; i++) {
        cnt *= arguments[i]
    }
    // console.log(cnt);
}

home1(2, 4, 5, 6)

/**
 * * Функция строки перевертыша
 */

function reverseString(str) {
    let str2 = ''
    if (typeof str === 'string') {
        for (let i = str.length - 1; i >= 0; i--) {
            str2 += str[i]
        }
        console.log(str2);
    } else {
        console.error('Not a sting')
    }
}


reverseString('test');
reverseString('');
reverseString(null);
reverseString(undefined);
reverseString();
console.clear()

/**
 * * Угадываение чисел
 */

function guessTheNumber(num) {
    const wrongNumber = new Error('Please provide number if range 0 - 10')
    const notNumber = new Error('Please provide a valid number')
    if (typeof num != 'number') return console.log(notNumber);
    else if (0 < num && num > 10) return console.log(wrongNumber);
    else {
        let rand = Math.floor(Math.random() * 10)
        rand === num ? console.log('You Win') : console.log(`You are lose, your number is ${num}, the random number is ${rand}`);
    }
}

// guessTheNumber(5);
// guessTheNumber(15);
guessTheNumber(undefined);