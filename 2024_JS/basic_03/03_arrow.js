const user={
    username:"hitesh",
    price : 999,
    welcomMessage : function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
    }

    }
    // console.log(this);
// user.welcomMessage()
// user.username="sam"
// user.welcomMessage()

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

// const chai=function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }

const chai=() =>{
    let username="hitesh"
    console.log(this);
}
chai()

// const addTwo(num1,num2)=> {
//     return num1+num2
// }
// const addTwo=(num1,num2)=> num1+num2
//  const addTwo=(num1,num2)=>( num1+num2)

 //object return
 const addTwo = (num1,num2) =>({username:"hitesh"})
 console.log(addTwo(3,4))


//  const myArray ={2,5,3,7,8}
//  myArray.foreach()





