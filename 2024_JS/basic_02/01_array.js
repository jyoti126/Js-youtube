//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman" ,"naagraj"]
// console.log(myArr[2])
// console.log(myHeros)

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0])

//Array methods
myArr.push(8) // insert value in the last 
myArr.pop() // remove the last value
myArr.unshift(45) //insert value in front and shift all position of array elements
myArr.shift() //remove the front element of array which is shifted using unshifted function

// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))



const newArr = myArr.join() //join used to add all elements of array and converted to string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn1)
console.log(myn2)

