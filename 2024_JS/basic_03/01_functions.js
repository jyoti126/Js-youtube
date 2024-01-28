
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}
sayMyName();
function addTwoNumbers(number1,number2){
    let result=number1+number1
    return result // when return used then remaining code not run
    console.log(number1+number2)
}
const result=addTwoNumbers(5,6)
console.log("Result", result);

function loginUserMessage(username="sam") {
    if(!username){
    console.log("please enter username");
    return

    }
    return `${username} just logged in`
    
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

function calculateartPrice(val1,val2, ...num1) { //rest operator...
    return num1;
    
}
console.log(calculateartPrice(500,200,300,2000))



const user ={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}` );
}
handleObject(user)
handleObject({
    username:"sem",
    price:399
})
const myNewArray =[200,300,100,600]
function returnSecondValue(gerArray){
    return gerArray[1]
}
console.log(returnSecondValue(myNewArray));
