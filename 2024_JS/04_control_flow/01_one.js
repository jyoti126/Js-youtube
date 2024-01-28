//If

const isUserLoggerdIn = true
const temprature = 41
if(temprature < 50){
    console.log("Temprature less than 50");
    }
    else{
    console.log("Temprature greater than 50");
    }
    console.log("executed");

    const score =200
    if (score>100) {
        let power="fly" 
        // when used var data type then its scoope is global.it also used outside the block
        console.log(`user power:${power}`);
        
    }
    // console.log(`user power:${power}`);

//<,>,<=,>=,==,!=,=== !==


const balance =1000
//implicit scope
// if(balance >500) console.log("test"),console.log("test2"); //it is not good syntax

if (balance <500) {
    console.log("Less than 500"); 
}
else if(balance <750) {
    console.log("Less than 500"); 
}
else if(balance <900) {
    console.log("Less than 500"); 
}
else {
    console.log("Less than 1200"); 
}


const userLoggerdIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggerdIn && debitCard && 2==3){
    console.log("Allow to buy course"); 
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in");
}