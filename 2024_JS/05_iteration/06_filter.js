const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums= myNums.filter((num) => {
    return num>4
}
)
console.log(newNums);
// using the foreach in array
const newNum =[]
newNum.forEach( (num)=>{
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum);



const books =[
{ title:'book one', genre :'Fiction',publish:1981,edition:2004,},
{ title:'book two',genre:'Non-Fiction',publish:1992,edition:2008},
{ title:'book three',genre:'History',publish:1999,edition:2007},
{ title:'book four',genre:'non-Fiction',publish:1989,edition:2010},
{ title:'book five',genre:'Science',publish:2009,edition:2014},
{ title:'book six',genre:'Fiction',publish:1987,edition:2010},
{ title:'book seven',genre:'History',publish:1986,edition:1996},
{ title:'book eight',genre:'Science',publish:2011,edition:2016},
{ title:'book nine',genre:'non-fiction',publish:1981,edition:1989},
];

const userBooks=books.filter( (bk) =>{
    return bk.genre=='History'
    // return bk.publish <2000
})

console.log(userBooks);