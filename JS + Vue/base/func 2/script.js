/**
 * ! ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
 */


function foo() {
    console.log('hello world');
}

foo.field = 'Dima'

// console.log(foo.field);

// *АНАЛОГ МЕТОДА MAP

const arr = ['Dima', 'Sergey', 'Maks', 'Viktor', 'Olga']

let newArr = []

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length) // * Массив из длины символов
}

// console.log(newArr);

let newArr2 = []

for (let i = 0; i < arr.length; i++) {
    newArr2.push(arr[i].toUpperCase())
}

// console.log(newArr2)


/**
 * ? то же самое на функции высшег опорядка
 */

const names = ['Dima', 'Sergey', 'Maks', 'Viktor', 'Olga']

function mapArray(arr, fn) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]))
    }
    return res
}

function nameLength(el) {
    // console.log(el);
    return el
}

function nameToUppercase(el) {
    return el.toUpperCase()
}

const result = mapArray(names, nameLength)
const result2 = mapArray(names, nameToUppercase)

// console.log(result);
// console.log(result2);

/** */

function greeting(firstName) {
    return function(lastName) {
        return `Hello, ${firstName} ${lastName}`
    }
}

// const testGreeting = greeting('Dima')
// const fullName = testGreeting('Belyaev')
const fullName = greeting('Dima')('Belyaev')
    // console.log(fullName);

function question(job) {
    const jobDictionary = {
        developer: 'что такое JavaScript?',
        teacher: 'какой предмет вы ведете?'
    }
    return function(name) {
        return `${name}, ${jobDictionary[job]}`
    }

}

const developerQuestion = question('developer')
console.log(developerQuestion('Dima'));

const teacherQuestion = question('teacher')
console.log(teacherQuestion('Vika'));