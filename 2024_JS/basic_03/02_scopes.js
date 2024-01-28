//scopes in js
var c=300
let a=20
if(true){
    let a =10
    const b = 20
    var c = 30
    console.log("inner",a);
}
// console.log(a);
// console.log(b);
// console.log(c);

//Nested function
/*parent and child two function...child access the all attraibutes of parent but 
parent not acces values of child function

*/


function one(){
    const username ="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); //not print website because it is part of nested function

     two()
}
// one()

if(true){
    const username="hitesh"
    if(username ==="hitesh"){
        const website =" youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++ interesting ++++++++++++++++ 
console.log(addone(5))
function addone(num){
    return num+1;

}

// addTwo(5) //it is show error because you have not used variable without declaration
const addTwo =function(num){
    return num+2
}
console.log(addTwo(5))
