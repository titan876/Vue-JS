let a = 1,
    b = 0


// if (a > 0) {
//     b = a
// } else {
//     b += a
// }

//  * Тернарный оператор

//Выражение ? если true : если false
//Выражение ? если true : Выражение ? если true : если false

b = a > 0 ? b = a : b + 1

b = a > 0 ? 2 : a < 0 ? 3 : 0

console.log(b);

// * Switch Case

let color = 'red'

switch (color) {
    case 'yellow':
        //     console.log('color is yellow')
        //     break;
    case 'red':
        console.log('color is red || red')
        break;
    case 'orange':
        console.log('color is orange')
        break;
    default:
        console.log('defailt');
}

let z = 'inline';

switch (z) {
    case 'block':
        console.log('block')
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
}

b = 'hidden'

b === 'hidden' ? b = 'visible' : b = 'hidden'

console.log(b);

let c = 0

c === 0 ? c = 1 : c < 0 ? c = 'less then zero' : c *= 10

console.log(c);