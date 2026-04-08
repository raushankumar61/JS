// primitive
// 7 types: string,Number,Boolean,null,undefined,symbol,bigint


const score = 100
const scoreValue  = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);
const bigNumber = 3456543576654536754n

// Reference type(Non Premative)
// Array,objects,Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"Raushan",
    age:21
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof myObj);





