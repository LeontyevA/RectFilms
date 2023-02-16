const guest = "Саша \nСвета \nВова \nВера";
const guest1 = `Саша
Света
Вова
Вера`;

console.log(guest);
console.log(guest1);


const numbers = [1,2,3,4,5,6,7,8];
let odds = numbers.filter(num => num !== 0);

console.log(odds);

let str = `Hello`;

// получаем первый символ
console.log( str[0] ); // H
console.log( str.at(0) ); // H

// получаем последний символ
console.log( str[str.length - 1] ); // o
console.log( str.at(-4));

let str1 = `Строка, заменяющая подстроку из первого параметра. 
Поддерживает несколько специальных шаблонов замены; 
смотрите ниже раздел Передача строки в качестве второго параметра.`

let reg = /['А-Я']/g
str1 = str1.match(reg, '').join('');
console.log(str1);


