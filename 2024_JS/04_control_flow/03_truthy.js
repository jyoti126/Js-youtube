const userEmail= []
if (userEmail) {
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}

//falsy values
// false,0,-0,BigInt 0n,"", null, undefined ,NaN(not a number)

//truthy values
// "0",'false'," ",[],function(){}

if (userEmail.length === 0) { //Check array is empty
    console.log("Array is empty");
}

const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish coalescing operator (??):null undefined

let val1;
// val1 = 5 ?? 10  //result is 5
// val1 = null ?? 10 //return value 10
// val1 = undefined ?? 20
val1 = null ?? 20 ?? 30
console.log(val1);

//ternary operator

//condition ? true :false

const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80");