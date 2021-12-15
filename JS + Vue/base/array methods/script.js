const numArray = [2, 3, 45, 78, 656, 4578]

let value

value = numArray.length
    // numArray.length = 0
    // numArray.length = 100

value = Array.isArray(numArray) //  * Проверка является ли массивом
value = numArray[2]
numArray[2] = 12
value = numArray.indexOf(78) //  * Поиск элемента массива

value = numArray.push(100) // * Добавляем элемент с конца
value = numArray.pop() // * Удаляем элемент с конца и записываем его в переменную
value = numArray.unshift(111) // * Добавляем элемент в начало  
value = numArray.shift() // * Удаляем элемент с начала и записываем его в переменную
value = numArray.slice(0, 2) // * выделяем из массива 2 элемента с 0 индекса 2 элемента. Если ничего не передавать вернет копию масисва
value = numArray.splice(1, 1, 'one', 'two') // * Удаляем из массива с 1 индекса 1 элемент , возвращает массив из вырезанных элементов. Вместо элементов можно добавить нвоые (one, two). так же если во 2 индесе указать 0 , то просто будут добавлены переменные с 1 индекса
value = numArray.reverse() //  * Переварачиваем массив
value = numArray.concat(numArray) // * Вернет копию массива
value = numArray.concat(1, 2, 3, 4) // * Запишит в конец масиива
value = [].concat(1, 2, 3, 4)
value = numArray.join(" ") //  * Вернет из массива строку
value = 'Hello world'.split(" ") //  * Разбивает строку на массив. если ничего не передавать, вернет 1 элемент, если "", то разобъет по символам, если " " , то по словам
console.log(value, numArray);
console.clear()

/**
 * *Создать функцию которая принимает число n и возвращает массив заполненный числами от 1 до n
 */

function getArray(num) {
    const arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(num)
    }
    console.log(arr);
}

// getArray(8);

/**
 * *Возвращает новый массив с дублированными элементами
 */

function doubleArray(arr) {
    let numArr = []
    for (let i = 0; i < arr.length; i++) {
        numArr = arr.concat(arr)
    }
    console.log(numArr);
}

// doubleArray([1, 2, 3])

/**
 *  * Удаляем первый элемент из переданных массивов
 */

function changeCollection() {
    let arr = arguments
    for (let i of arr) {
        arr = i.splice(0, 1)
        console.log(i);
    }

}


changeCollection([1, 2, 3], ['a', 'b', 'a'], [5, 7, 9, 10])