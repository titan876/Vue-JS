const firstName = 'Dima'
const latstName = 'Belyaev'
const age = 23
const str = 'Hello my name is Dima'

let value

value = firstName + latstName
value = firstName + ' ' + latstName
value += ' I am ' + age

value = firstName.length
value = firstName[3]
value = firstName[firstName.length - 1]
value = latstName[latstName.length - 1] //  последний символ в строке

value = firstName.toUpperCase()
value = firstName.toLowerCase()
value = firstName.concat(' ', latstName) // Соединение аргументов

value = firstName.indexOf('m') //  Инекс символа
value = str.indexOf('m', 10) //  Инекс символа, начиная с 10 символа (lastIndexOf поиск начинается с конца)
velue = str.includes('my') // Есть ли значение (BOOLEAN)

value = str.slice(0, 5) //  вырезает с 0 по 5 индекс
value = str.slice() //  Вернет всю строку
value = str.slice(5) //  Вырежет с 5 индекса

value = str.replace('Dima', 'Dmitriy') //  Заменяем Dima на Dmitriy


console.log(value);