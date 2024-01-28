//Declare objects using two methods
const tinderUser = new Object()
const tinderUser2 ={}

tinderUser.id="123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

//Nested objects
const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"hitseh",
            lastname:"Choudhary"
        }
    } 
}
//Access the nested objects
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.lastname);

//combine objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 ={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)

//{} represent all values combine it is optional.
// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

//spread operator used for combine objects
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);


//get value from database
const users = [
    {
    id:1,
    email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
     },
    {
         id:1,
         email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },  
]
users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //access the keys of objects
console.log(Object.values(tinderUser)); //access the values of objects
console.log(Object.entries(tinderUser)); //entries return a array of a given objects

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//check key available in the object then true


//++++++++++++++++++
//Destructure of object
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor
// const {courseInstructor}=course
const {courseInstructor:instructor}=course // change name of courseInstructor
console.log(instructor);

//++++++++++++  API+++++
// {
//     "name" :"hitesh,"
//     "coursename" :"js in hindi,"
//     "price" :"free,"
// }

// [
//     {},
//     {},
//     {},
//     {},
// ]

