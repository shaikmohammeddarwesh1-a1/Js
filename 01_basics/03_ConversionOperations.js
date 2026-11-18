let score = '33abc';

console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber); // NaN


// '33' -> 33
// '33abc' -> NaN
// true -> 1; false -> 0

let isLoggedIn = 1;

let booleanIsLogedIn = Boolean(isLoggedIn);

console.log(booleanIsLogedIn);

// 1 -> true , 0 -> false
// '' -> false


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); // string

// operations // 

let value = 3
let negvalue = -value
console.log(negvalue);


let str1 = 'hello'
let str2 = 'hitesh'

let str3 = str1 + str2
console.log(str3);

console.log('1'+2+2);
console.log(1+2+'2');
console.log(+true); // type conversion
