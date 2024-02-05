//primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, Bigint

const score = 100;
const scoreValue = 100.3;

const isLogged=true;
const outsideTemp=null;

const name =Symbol(20);
const nameUp=Symbol(20);

console.log(name === nameUp);

const bigInt= 10000000000000868n;

console.log( bigInt)


// reference (Non Primitive)


 // Array, Object, Function

 const heros = ["akhil", "rejat", "arya", "sammy"];

 let myObj = {
    name: "Akhil",
    age: 22,
 }

 const myFunction = function(){
    console.log("hello World")
 }


 console.log(typeof myFunction)