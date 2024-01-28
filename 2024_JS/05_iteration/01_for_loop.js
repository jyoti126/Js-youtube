for (let i = 0; i < 10; i++) {
    const element = i;
    if(i==5){
        console.log("number is 5");
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value :${i}`);
    for (let j = 1; j <= 10; j++) {
        const element = [j];
        // console.log(`inner loop value :${j} and outer loop value:${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
    
}
//Array used in loop
let myArray=["flash","superman","batman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break used in for

for (let index = 1; index <=20; index++) {
    if(index==5)
    {
        console.log(`Dtected 5`);
        break; //continue used then skip one iteration where condition match
    }
    console.log(`value of i ${index}`);
    
}
