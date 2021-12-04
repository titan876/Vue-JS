let value

value = 1 > 2
value = 1 <= 2
value = 1 == 1 // true
value = 1 == '1' // true
value = 1 === '1' // false
value = 1 != '1' // false
value = 1 !== '1' // true
value = 'a' > 'a' // false
value = 'a' > 'A' // true
value = 'a' > 'ab' // false
value = 'A'.charCodeAt()


// console.log(value);

// if (!value) {
//     console.log("act\n", value);
// } else {
//     console.log("else\n", value);
// }

// value = []

// if (value.length) {
//     console.log(value);
// } else {
//     console.log('array is empty');
// }

// if (Array.isArray(value)) {
//     console.log(value);
// } else {
//     console.log('array is empty');
// }

let user = {
    name: 'Dima'
}

if (user.name) {
    console.log(user.name);
} else {
    console.log('else');
}