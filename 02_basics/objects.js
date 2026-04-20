// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Raushan",
    "full name" : "Raushan Kumar",
    [mySym]:"mykey1",
    age:18,
    email:"raushan@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Tuesday","Wednesday","Thursday"],
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// JsUser.email = "raushan@microsoft.com"
// Object.freeze(JsUser)
// JsUser.email ="raushan@amazon.com"
// console.log(JsUser);
 
JsUser.greeting = function(){
    console.log("Hello Js User!");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
