//singleton
//object create

//object literals

const mySym = Symbol("key1")
const JsUser ={
    name : "Hitesh", 
    "full name" :"Hitesh Choudhary",
     //object always treat key name as a string.it is up too you how to you declare.
    [mySym] : "mykey1",
    age :18,
    location :"jalandhar",
    email : "hitesh@google.com",
    IsLoginDays :["Monday","Saturday"]

}

console.log(JsUser.name); // old type for access objects value with .

console.log(JsUser["name"]);// new mthod for access value of objects
// two ways for access the object dot notation and bracket notation
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); // square brackets used for acces the symbol
// console.log(typeof JsUser.mySym); access the type of  symobol

JsUser.email = "hiteshchatgpt.com"
// Object.freeze(JsUser) //freeze the object so that other not change the values of objects

JsUser.email = "hitesh@microsof.com"
// console.log(JsUser);
JsUser.greeting = function(){1
    console.log("Hello  JS users"); 
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS users, ${this.name}`); //declare greeting with objects values
}


