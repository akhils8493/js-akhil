let grade = "33"

console.log(typeof grade);

let score = Number(grade)

console.log(typeof score);
console.log(score)

let isLoggedIn = 1;
console.log("Before -> ", typeof isLoggedIn);

let booleanInLoggedIn = Boolean(isLoggedIn)

console.log("After -> ", typeof booleanInLoggedIn)

console.log(booleanInLoggedIn);

// 1 => true and 0 => false    
// "" => false and "akhil" => true 

let someNumber = 33;
console.log("Before -> ", typeof someNumber);

let stringNumber = String(someNumber)

console.log("After -> ", typeof stringNumber)

console.log(stringNumber);


// **********operations*********** //

let val=5;
let negVar= - val;
console.log(negVar);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " Akhil";
let str3 = str1 + str2;
console.log(str3)


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log(1 + 2 + "2");
console.log("1" + 2 + 2);
console.log("1" + "2");
