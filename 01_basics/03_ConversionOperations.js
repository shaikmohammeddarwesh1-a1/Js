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

let stringNumber = string(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); // string