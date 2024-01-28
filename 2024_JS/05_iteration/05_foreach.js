const coding=["js","rb","java","python","cpp"]

// coding.forEach( function (val){ //foreach using with function access array
//     console.log(val);
// })
coding.forEach( (item) => { //foreach using with arrow access array
console.log(item);
})

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

coding.forEach( (item,index,arr) => { //foreach using with arrow access array
    console.log(item,index,arr);
    })

    const myCoding=[{
        languageName:"javascript",
        languageFileName :"js",
    },
   {
        languageName:"java",
        languageFileName :"java",
    },
   {
        languageName:"python",
        languageFileName :"py",
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
})
